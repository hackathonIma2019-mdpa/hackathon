(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d212b1f"],{aa09:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",["init"==t.etape?a("q-card",{attrs:{bordered:""}},[a("q-card-actions",{attrs:{align:"between"}},[a("q-btn",{attrs:{flat:""},on:{click:function(e){return t.sameCar()}}},[t._v("Je veux la même voiture")]),a("q-btn",{attrs:{flat:""},on:{click:function(e){return t.goTo("recherche")}}},[t._v("Je veux changer de modèle")])],1)],1):t._e(),"recherche"==t.etape?a("q-card",{attrs:{bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("i",{staticClass:"material-icons"},[t._v("\n          search\n        ")]),t._v("\n        Recherche\n      ")])]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-input",{attrs:{outlined:"",label:"Marque"},model:{value:t.form.searchText,callback:function(e){t.$set(t.form,"searchText",e)},expression:"form.searchText"}}),t._v("\n\n\n      Kilométrage\n      "),a("div",{staticClass:"q-pa-md"},[a("q-badge",{attrs:{color:"secondary"}},[t._v("\n          Min : "+t._s(t.form.minKm)+"\n        ")]),a("q-slider",{attrs:{min:0,max:2e5,step:5,snap:"",label:"","label-always":"",color:"purple"},model:{value:t.form.minKm,callback:function(e){t.$set(t.form,"minKm",e)},expression:"form.minKm"}})],1),a("div",{staticClass:"q-pa-md"},[a("q-badge",{attrs:{color:"secondary"}},[t._v("\n          Max : "+t._s(t.form.maxKm)+"\n        ")]),a("q-slider",{attrs:{min:0,max:2e5,step:5,snap:"",label:"","label-always":"",color:"purple"},model:{value:t.form.maxKm,callback:function(e){t.$set(t.form,"maxKm",e)},expression:"form.maxKm"}})],1),t._v("\n\n      Prix\n      "),a("div",{staticClass:"q-pa-md"},[a("q-badge",{attrs:{color:"secondary"}},[t._v("\n          min : "+t._s(t.form.minPrice)+"\n        ")]),a("q-slider",{attrs:{min:0,max:1e5,step:500,snap:"",label:"","label-always":"",color:"blue"},model:{value:t.form.minPrice,callback:function(e){t.$set(t.form,"minPrice",e)},expression:"form.minPrice"}})],1),a("div",{staticClass:"q-pa-md"},[a("q-badge",{attrs:{color:"secondary"}},[t._v("\n          max : "+t._s(t.form.maxPrice)+"\n        ")]),a("q-slider",{attrs:{min:0,max:1e5,step:500,snap:"",label:"","label-always":"",color:"blue"},model:{value:t.form.maxPrice,callback:function(e){t.$set(t.form,"maxPrice",e)},expression:"form.maxPrice"}})],1),a("q-input",{attrs:{outlined:"",label:"Code postal"},model:{value:t.form.codePostal,callback:function(e){t.$set(t.form,"codePostal",e)},expression:"form.codePostal"}})],1),a("q-separator",{attrs:{inset:""}}),a("q-card-actions",{attrs:{align:"between"}},[a("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),a("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:""},on:{click:function(e){return t.goTo("resultats")}}},[t._v("Rechercher")])],1)],1):t._e(),"resultats"==t.etape?a("q-card",{attrs:{bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("i",{staticClass:"material-icons"},[t._v("\n          format_list_bulleted\n        ")]),t._v("\n        Résultats\n      ")])]),a("q-separator",{attrs:{inset:""}}),t._l(t.oldCarsResults,function(e){return a("q-card-section",[e&&e.images&&e.images.length>0?a("q-img",{staticStyle:{height:"140px","max-width":"150px"},attrs:{src:e.images[0]},scopedSlots:t._u([{key:"loading",fn:function(){return[a("div",{staticClass:"text-yellow"},[a("q-spinner-ios"),a("div",{staticClass:"q-mt-md"},[t._v("Loading...")])],1)]},proxy:!0}],null,!0)}):t._e(),a("div",[t._v(t._s(e.attributes.brand)+" - "+t._s(e.attributes.model))]),a("div",[t._v(t._s(e.price)+" €")]),a("div",[t._v(t._s(e.attributes.mileage)+" km")])],1)}),a("q-separator",{attrs:{inset:""}}),a("q-card-actions",{attrs:{align:"between"}},[a("q-btn",{attrs:{flat:""},on:{click:function(e){return t.goToPrec()}}},[t._v("Précédent")])],1)],2):t._e(),"fiche"==t.etape?a("q-card",{attrs:{bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("i",{staticClass:"material-icons"},[t._v("\n          directions_car\n        ")]),t._v("\n        Fiche voiture\n      ")])]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[t._v("\n\n      TODO fiche\n\n    ")]),a("q-separator",{attrs:{inset:""}}),a("q-card-actions",{attrs:{align:"between"}},[a("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")])],1)],1):t._e()],1)},r=[],n=a("bc3a"),i=a.n(n),o={name:"SearchNewCar",data:function(){return{etape:"init",isSameCar:!1,prec:[],selectedCar:null,oldCarsResults:null,results:null,form:{minPrice:0,maxPrice:0,codePostal:null,minKm:0,maxKm:0,searchText:null}}},mounted:function(){var t=this;i.a.get("/api/old-car").then(function(e){t.oldCarsResults=e.data.results,console.log("oldCar.results: ",e.data.results)})},methods:{goTo:function(t){this.prec.push(this.etape),this.etape=t},goToPrec:function(){this.isSameCar&&(this.isSameCar=!1),this.etape=this.prec.pop()},sameCar:function(){this.goTo("resultats"),this.isSameCar=!0,this.prec.push("recherche"),this.results=this.oldCarsResults},displayResults:function(){var t=this;i.a.get("/api/search").then(function(e){t.results=e.data.results,console.log("oldCar.results: ",e.data.results),t.goTo("resultats")})},displayDetail:function(){this.goTo("fiche")}}},l=o,c=a("2877"),m=Object(c["a"])(l,s,r,!1,null,null,null);e["default"]=m.exports}}]);