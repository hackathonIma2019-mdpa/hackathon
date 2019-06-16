const fs = require('fs');
const path = require('path');
const LOGGER = require('../utils/logger');
const leboncoin = require('leboncoin-api');

class LeBonCoinService {

  constructor(app, db) {
    this.db = db;

    app.route('/api/search')
      .get(this.callSearch.bind(this))
    ;

    app.route('/api/old-car')
      .get(this.callSearchOldCar.bind(this))
    ;
}

  callSearch(req, res) {
    LOGGER.debug(JSON.stringify(req.query));
    this.searchCustom(req.query).then(data => res.send(data))
      .catch(err => console.error(err));
  }

  callSearchOldCar(req, res) {
    this.searchOldCar().then(data => res.send(data))
      .catch(err => console.error(err));
  }

  searchOldCar() {
    const search = new leboncoin.Search();
    search
      .setPage(1)
      .setLimit(10)
      .setQuery("Peugeot 307")
      .setDepartment("savoie")
      .setCategory("voitures")
      .addSearchExtra("price", {max: 3000})
      .addSearchExtra("ranges", {mileage: {min:100000}});
    return search.run().then(data => {
      this.save(data);
      return data;
    });
  }

  searchCustom({minPrice, maxPrice, codePostal, minKm, maxKm, searchText}) {

    LOGGER.debug(minPrice,
    maxPrice,
    codePostal,
    minKm,
    maxKm,
    searchText);
    const search = new leboncoin.Search();
    search
      .setPage(1)
      .setLimit(10)
      .setCategory("voitures");
    if (searchText) {
      search.setQuery(searchText);
    }
    if (codePostal) {
      search.setLocation([{"zipcode": codePostal}]);
    }
    if (minPrice || maxPrice) {
     search.addSearchExtra("price", {min: Number(minPrice) || 0, max: Number(maxPrice) || 100000});
    }
    if (minKm || maxKm) {
      search.addSearchExtra("ranges", {mileage: {min: Number(minKm) || 0, max: Number(maxKm) || 500000 }});
    }
    return search.run().then(data => {
      this.save(data);
      return data;
    });
  }

  save(body) {
    this.db.save(this.db.get(this.db.collections.cars), body);
  }


}

module.exports = {
  LeBonCoinService
};
