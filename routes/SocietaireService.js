const fs = require('fs');
const path = require('path');
const LOGGER = require('../utils/logger');
formidable = require('formidable');

class SocietaireService {

  constructor(app, db) {
    this.db = db;

    app.route('/api/societaires/:idSocietaire/datas/want-to-change-car')
      .post(this.postWantToChangeCar.bind(this))
    ;

    app.route('/api/societaires/:idSocietaire/datas/mobilite')
      .post(this.postDataMobilites.bind(this))
    ;

    app.route('/api/societaires/:idSocietaire/datas/cars/pinned')
      .post(this.postPinnedCar.bind(this))
      .get(this.getPinnedCar.bind(this))
    ;
    app.route('/api/societaires/:idSocietaire/datas/cars/pinned/:idCar')
      .delete(this.removePinnedCar.bind(this))


    LOGGER.debug("Societaire Service intialized")
  }


  postDataMobilites(req, res) {
    let societaire = this.db.get(this.db.collections.societaires).data.find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

    societaire.data = societaire.data || {};
    societaire.data.wantToChangeCar = true;

    this.db.save(this.db.get(this.db.collections.societaires), societaire);

    res.send(200);
  }

  postWantToChangeCar(req, res) {
    let societaire = this.db.get(this.db.collections.societaires).data.find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

    societaire.data = societaire.data || {};
    societaire.data.mobilite = req.body;

    this.db.save(this.db.get(this.db.collections.societaires), societaire);

    res.send(200);
  }

  postPinnedCar(req, res) {
    let societaire = this.db.get(this.db.collections.societaires).data
      .find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

    societaire.data = societaire.data || {};
    societaire.data.pinnedCars = req.body;

    this.db.save(this.db.get(this.db.collections.societaires), societaire);

    res.send(200);
  }
  removePinnedCar(req, res) {
    let societaire = this.db.get(this.db.collections.societaires).data
      .find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

    societaire.data = societaire.data || {};
    societaire.data.pinnedCars = (societaire.data.pinnedCars || [])
      .filter((pinned) => pinned.id.toString(10) !== req.params.idCar);

    this.db.save(this.db.get(this.db.collections.societaires), societaire);

    res.send(200);
  }

  getPinnedCar(req, res) {
    let societaire = this.db.get(this.db.collections.societaires).data
      .find((el) => el.$loki === Number(req.params.idSocietaire)) || {};

    societaire.data = societaire.data || {};

    res.send(societaire.data.pinnedCars);
  }


}

module.exports = {
  SocietaireService
};
