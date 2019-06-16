const fs = require('fs');
const path = require('path');
const LOGGER = require('../utils/logger');
formidable = require('formidable');

class CarDamageService {

  constructor(app, db) {
    this.db = db;

    app.route('/api/societaires/:idSocietaire/cars/damages/pictures')
      .post(this.postPicture.bind(this))
      .get(this.getPictures.bind(this))
    ;

    app.route('/api/societaires/:idSocietaire/cars/damages/scores/latest')
      .get(this.getScore.bind(this))
    ;

    LOGGER.debug("CarDamageService intialized")
  }

  test(req, res) {
    res.send("Test !!!");
  }

  getPictures(req, res) {
    LOGGER.debug(JSON.stringify(this.db.get(this.db.collections.societaires).data));
    let societaire = this.db.get(this.db.collections.societaires).data.find((el) => el.$loki === Number(req.params.idSocietaire)) || {};
    res.send(societaire.pictures.map((file) => {
      let filename = Object.keys(file)[0];
      return {
        score : filename.replace(/(\.png)|(\.jpeg)|(\.jpg)/i,''),
        file: 'data:image/png;base64, '+fs.readFileSync(file[filename].path).toString('base64')
      };
    }));
  }

  getScore(req, res) {
    LOGGER.debug(JSON.stringify(this.db.get(this.db.collections.societaires).data));
    let societaire = this.db.get(this.db.collections.societaires).data.find((el) => el.$loki === Number(req.params.idSocietaire)) || {};
    res.send(societaire.pictures[societaire.pictures.length - 1]);
  }

  postPicture(req, res) {
    LOGGER.debug('\n-----------');
    LOGGER.debug(req.file);
    LOGGER.debug('\n-----------');
    let societaire = this.db.get(this.db.collections.societaires).data.find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

    societaire.pictures = societaire.pictures || [];
    const form = new formidable.IncomingForm();
    form.parse(req, (_, fields, files) => {
      societaire.pictures = [...(societaire.pictures || []), files];


      this.db.save(this.db.get(this.db.collections.societaires), societaire);

      societaire = this.db.get(this.db.collections.societaires).data.find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

      LOGGER.debug(JSON.stringify(societaire));
      // MOCK :
      // Appel Fotonowere pour avoir un score
      res.send("Fotonowere score's");
    });
  }
}

module.exports = {
  CarDamageService
};
