(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2093f6"],{a7f0:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"column justify-start items-center q-pa-md"},[s("h1",{staticClass:"text-secondary text-center"},[e._v("Estimer les dégats "),s("br"),e._v(" sur votre véhicule")]),s("q-card",{staticClass:"my-card",attrs:{bordered:""}},[s("q-card-section",{staticClass:"bg-primary text-white"},[s("div",{staticClass:"text-h6"},[e._v("Prenez une photo de votre véhicule")]),s("div",{staticClass:"text-subtitle2"},[s("u",[e._v("Powered by Fotonowere")])])]),s("q-separator"),s("q-card-section",[s("q-uploader",{ref:"uploader",staticClass:"no-box-shadow",staticStyle:{width:"100%"},attrs:{accept:"image/*",disable:e.sent,"hide-upload-btn":!0,url:"/api/societaires/1/cars/damages/pictures",color:"tertiary"},on:{added:e.added,removed:e.removed,uploaded:e.uploaded}}),s("div",{staticClass:"row justify-end"},[e.hasFile?s("q-btn",{staticClass:"c-btn-upload",attrs:{color:"primary",label:"Envoyer",icon:"cloud_upload",disable:e.sent,unelevated:""},on:{click:function(t){return e.$refs.uploader.upload()}}}):e._e()],1)],1),s("q-separator"),e.sent?s("q-separator",{attrs:{inset:""}}):e._e(),""!==e.score&&e.score<=50?s("q-card-section",[e._v("\n      A première vue, votre voiture devrait être réparable.\n    ")]):e._e(),e.score?s("q-separator",{attrs:{inset:""}}):e._e(),""!==e.score&&e.score>50?s("q-card-section",[e._v("\n      Uh Oh, il y à "+e._s(e.score)+"% de chances que votre véhicule ne soit pas réparable\n    ")]):e._e(),""!==e.score?s("q-separator",{attrs:{inset:""}}):e._e(),""!==e.score?s("q-card-actions",{attrs:{align:"between"}},[s("q-btn",{staticClass:"white",attrs:{flat:""},on:{click:function(t){return e.go("/")}}},[e._v("Retour à l'accueil")]),e.score<=50?s("q-btn",{staticClass:"bg-primary text-white",on:{click:function(t){return e.go("/mobility")}}},[e._v("Comment se déplacer en\n        attendant ?\n      ")]):e._e(),e.score>50?s("q-btn",{staticClass:"bg-primary text-white",on:{click:function(t){return e.go("/search-car")}}},[e._v("Changer de véhicule")]):e._e()],1):e._e(),s("br"),e.pictures&&e.pictures.length>0?s("q-card-section",{staticClass:"bg-primary text-white"},[s("div",{staticClass:"text-h6"},[e._v(" Vos précédents relevés :")]),s("div",{staticClass:"text-subtitle2"},[s("u",[e._v("Powered by Fotonowere")])])]):e._e(),e.pictures&&e.pictures.length>0?s("q-separator",{attrs:{inset:""}}):e._e(),e._l(e.pictures,function(e,t){return s("q-card-section",[s("q-btn",{attrs:{push:"",color:"teal",label:e.score}}),s("div",[s("q-img",{attrs:{src:e.file}})],1)],1)})],2)],1)},r=[],i=(s("ac6a"),s("cadf"),s("06db"),s("456d"),s("a481"),s("bc3a")),c=s.n(i),n={name:"CarDamage",data:function(){return{hasFile:!1,sent:!1,score:"",pictures:[]}},mounted:function(){var e=this;c.a.get("api/societaires/1/cars/damages/pictures").then(function(t){return e.pictures=t.data})},methods:{go:function(e){this.$router.push(e)},added:function(e){this.hasFile=!0},removed:function(){this.hasFile=!1},uploaded:function(e){var t=this;this.sent=!0,c.a.get("/api/societaires/1/cars/damages/scores/latest").then(function(e){t.score=(Object.keys(e.data)||{80:null})[0].replace(/(\.png)|(\.jpeg)|(\.jpg)/i,"")})}}},o=n,l=s("2877"),d=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=d.exports}}]);