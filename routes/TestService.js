const fs = require('fs');
const path = require('path');
const LOGGER = require('../utils/logger');

class TestService {

    constructor(app, db) {
        this.db = db;

        app.route('/api/test')
            .get(this.test.bind(this))
        ;

        LOGGER.debug("Service Test intialized")
    }

    test(req, res) {
        res.send("Test !!!");
    }

}

module.exports = {
    TestService
};
