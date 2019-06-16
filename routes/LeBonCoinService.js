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

  searchCustom({minPrice=0, maxPrice=100000, codePostal, minKm=0, maxKm=500000, searchText}) {

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
     search.addSearchExtra("price", {min: minPrice, max: maxPrice});
    }
    if (minKm || maxKm) {
      search.addSearchExtra("ranges", {mileage: {min: minKm, max: maxKm }});
    }
    return search.run().then(data => {
      LOGGER.debug(JSON.stringify(data));
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
