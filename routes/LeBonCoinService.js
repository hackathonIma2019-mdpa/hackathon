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

    this.initSearch();
}

  initSearch() {
    this.searchOldCar().run().then(data => {
      data.$loki = 1;
      this.db.insert(this.db.collections.cars, data);
    });
  }

  searchOldCar() {
    const search = new leboncoin.Search();
    return search
      .setPage(1)
      .setLimit(10)
      .setQuery("Peugeot 307")
      .setDepartment("savoie")
      .setCategory("voitures")
      .addSearchExtra("price", {max: 3000})
      .addSearchExtra("ranges", {mileage: {min:100000}});
  }

  callSearch(req, res) {
    this.searchCustom(req.params).then(data => res.send(data))
      .catch(err => console.error(err));
  }

  searchCustom({minPrice=0, maxPrice=100000, codePostal, minKm=0, maxKm=500000, searchText}) {
    const search = new leboncoin.Search();
    search
      .setPage(1)
      .setLimit(10)
      .setCategory("voitures");
    if (searchText) {
      search.setQuery(searchText);
    }
    if (codePostal) {
      search.setDepartment([{"zipcode": codePostal}]);
    }
    if (minPrice || maxPrice) {
     search.addSearchExtra("price", {min: minPrice, max: maxPrice});
    }
    if (minKm || maxKm) {
      search.addSearchExtra("ranges", {mileage: {min: minKm, max: maxKm }});
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
