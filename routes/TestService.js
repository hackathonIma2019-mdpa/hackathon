const fs = require('fs');
const path = require('path');
const LOGGER = require('../utils/logger');

class TestService {

    constructor(app, db) {
        this.db = db;

        app.route('/api/test')
            .get(this.test.bind(this))
            .post(this.postTest.bind(this))
        ;
        app.route('/api/test/:id')
            .get(this.getTest.bind(this))
        ;

        LOGGER.debug("Service Test intialized")
    }

    test(req, res) {
        res.send("Test !!!");
    }

    getTest(req, res) {
      LOGGER.debug(JSON.stringify(this.db.get(this.db.collections.test).data));
        res.send(this.db.get(this.db.collections.test).data.find((el) => el.$loki === Number(req.params.id)));
    }

    postTest(req, res) {
      LOGGER.debug(JSON.stringify(req.body));
      let elem = this.db.save(this.db.get(this.db.collections.test), req.body);

      res.send(elem);
    }

}

module.exports = {
    TestService
};
