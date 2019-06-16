(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b6144"],{"1c40":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"column justify-start items-center"},["begin"==t.etape?o("div",[o("h1",{staticClass:"text-secondary text-center"},[t._v("Votre diagnostic mobilité")]),o("q-card",{attrs:{bordered:""}},[o("q-card-section",[t._v("\n        Votre assurance ne prends pas en charge de véhicule de prêt ? Pas de panique, nous allons étudier ensemble vos besoins pour trouver la meilleure solution pendant la durée d'imobilisation de votre véhicule\n      ")]),o("q-separator"),o("q-card-actions",{attrs:{vertical:""}},[o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:""},on:{click:function(e){return t.next()}}},[t._v("Commencer")])],1)],1)],1):t._e(),"usage"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Quels types de déplacement devez vous faire ?")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[o("q-toggle",{attrs:{color:"primary",label:"Trajets quotidiens (aller au travail, faire les courses, ...)"},on:{input:t.quotidien},model:{value:t.form.usages.quotidien,callback:function(e){t.$set(t.form.usages,"quotidien",e)},expression:"form.usages.quotidien"}}),o("q-toggle",{attrs:{color:"primary",label:"Trajets exceptionnels (partir en vacances, ...)"},on:{input:t.exceptionnel},model:{value:t.form.usages.exceptionnel,callback:function(e){t.$set(t.form.usages,"exceptionnel",e)},expression:"form.usages.exceptionnel"}})],1),o("q-separator",{attrs:{inset:""}}),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",disabled:t.usageOk()},on:{click:function(e){return t.next()}}},[t._v("Continuer")])],1)],1):t._e(),"moyenTransportQuotidien"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Pour vos trajets quotidiens (aller au travail, faire les courses, ...), quels moyens de transport pouvez vous utiliser?")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[o("q-toggle",{attrs:{color:"primary",label:"Moyens de transport alternatifs (trottinette, vélo électrique, ...)"},model:{value:t.form.moyenTransportQuotidien.alternatif.active,callback:function(e){t.$set(t.form.moyenTransportQuotidien.alternatif,"active",e)},expression:"form.moyenTransportQuotidien.alternatif.active"}}),o("q-toggle",{attrs:{color:"primary",label:"Transport en commun (bus, train, metro, ...)"},model:{value:t.form.moyenTransportQuotidien.commun.active,callback:function(e){t.$set(t.form.moyenTransportQuotidien.commun,"active",e)},expression:"form.moyenTransportQuotidien.commun.active"}}),o("q-toggle",{attrs:{color:"primary",label:"Autre vehicule"},model:{value:t.form.moyenTransportQuotidien.voiture.active,callback:function(e){t.$set(t.form.moyenTransportQuotidien.voiture,"active",e)},expression:"form.moyenTransportQuotidien.voiture.active"}})],1),o("q-separator",{attrs:{inset:""}}),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",disabled:t.usageOk()},on:{click:function(e){return t.next()}}},[t._v("Continuer")])],1)],1):t._e(),"moyenTransportExceptionnel"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Pour vos trajets exceptionnels (partir en vacances, ...), quels moyens de transport pouvez vous utiliser?")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[o("q-toggle",{attrs:{color:"primary",label:"Transport en commun (bus, train, metro, ...)"},model:{value:t.form.moyenTransportExceptionnel.commun.active,callback:function(e){t.$set(t.form.moyenTransportExceptionnel.commun,"active",e)},expression:"form.moyenTransportExceptionnel.commun.active"}}),o("q-toggle",{attrs:{color:"primary",label:"Autre vehicule"},model:{value:t.form.moyenTransportExceptionnel.voiture.active,callback:function(e){t.$set(t.form.moyenTransportExceptionnel.voiture,"active",e)},expression:"form.moyenTransportExceptionnel.voiture.active"}})],1),o("q-separator",{attrs:{inset:""}}),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",disabled:t.usageOk()},on:{click:function(e){return t.next()}}},[t._v("Continuer")])],1)],1):t._e(),"complAlternatif"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Possédez-vous déja un moyen de transport alternatif ou souhaitez-vous en acquérir un?")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[o("q-btn-toggle",{attrs:{push:"","toggle-color":"primary",options:[{label:"Je possède un moyen de transport alternatif",value:"possede"},{label:"Je souhaite en acquérir un",value:"acquerir"}]},model:{value:t.form.alternative,callback:function(e){t.$set(t.form,"alternative",e)},expression:"form.alternative"}})],1),t.form.alternative?o("q-card-section",{staticClass:"text-h6"},[t._v("\n      Pour être bien assuré lors de vos déplacement, votre assureur peut faire le point avec vous.\n      Quand peut-il vous contacter ?\n    ")]):t._e(),t.form.alternative?o("q-card-section",{attrs:{vertical:""}},[o("q-btn-toggle",{attrs:{push:"","toggle-color":"primary",options:[{label:"Maintenant",value:"now"},{label:"Plus tard",value:"plustard"},{label:"Jamais",value:"never"}]},model:{value:t.form.contact.type,callback:function(e){t.$set(t.form.contact,"type",e)},expression:"form.contact.type"}}),"plustard"===t.form.contact.type?o("q-date",{attrs:{minimal:""},model:{value:t.form.contact.date,callback:function(e){t.$set(t.form.contact,"date",e)},expression:"form.contact.date"}}):t._e()],1):t._e(),t.form.alternative?o("q-separator",{attrs:{inset:""}}):t._e(),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",disabled:t.usageOk()},on:{click:function(e){return t.next()}}},[t._v("Continuer")])],1)],1):t._e(),"complVoiture"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Seriez-vous interesser par du co-voiturage ?")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[o("q-btn-toggle",{attrs:{push:"","toggle-color":"primary",options:[{label:"Non",value:"pasCovoit"},{label:"Oui",value:"covoit"}]},model:{value:t.form.voiture,callback:function(e){t.$set(t.form,"voiture",e)},expression:"form.voiture"}})],1),o("q-separator",{attrs:{inset:""}}),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",disabled:t.usageOk()},on:{click:function(e){return t.next()}}},[t._v("Continuer")])],1)],1):t._e(),"complCommun"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Quel type de transport en commun emprunterez-vous ?")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[o("q-toggle",{attrs:{color:"primary",label:"Train"},model:{value:t.form.commun.train,callback:function(e){t.$set(t.form.commun,"train",e)},expression:"form.commun.train"}}),o("q-toggle",{attrs:{color:"primary",label:"Bus"},model:{value:t.form.commun.bus,callback:function(e){t.$set(t.form.commun,"bus",e)},expression:"form.commun.bus"}}),o("q-toggle",{attrs:{color:"primary",label:"Métro"},model:{value:t.form.commun.metro,callback:function(e){t.$set(t.form.commun,"metro",e)},expression:"form.commun.metro"}})],1),o("q-separator",{attrs:{inset:""}}),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")]),o("q-btn",{staticClass:"bg-primary text-white",attrs:{flat:"",disabled:t.usageOk()},on:{click:function(e){return t.next()}}},[t._v("Continuer")])],1)],1):t._e(),"end"==t.etape?o("q-card",{attrs:{bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Bon voyage !")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-section",{attrs:{vertical:""}},[t.form.alternative?o("div",[t._v("En trottinette ou en vélo, respectez le code de la route et restez prudent.")]):t._e(),o("div",[t._v("Nous mettons tout en oeuvre, pour que votre véhicule soit prêt dans les plus brefs délais.")])]),o("q-separator",{attrs:{inset:""}}),o("q-card-actions",{attrs:{align:"between"}},[o("q-btn",{attrs:{flat:""},on:{click:t.goToPrec}},[t._v("Précédent")])],1)],1):t._e()],1)},a=[],n=o("bc3a"),i=o.n(n),s={name:"Mobility",data:function(){return{etape:null,prec:[],form:{usages:{quotidien:!1,exceptionnel:!1},moyenTransportQuotidien:{commun:{active:!1},alternatif:{active:!1},voiture:{active:!1}},moyenTransportExceptionnel:{commun:{active:!1},voiture:{active:!1}},alternative:null,contact:{type:null,date:null},voiture:null,commun:{train:!1,bus:!1,metro:!1}}}},mounted:function(){this.goTo("begin")},methods:{goTo:function(t){"end"===t&&i.a.post("/api/societaires/1/datas/mobilite",this.form),this.prec.push(this.etape),this.etape=t},goToPrec:function(){this.etape=this.prec.pop()},next:function(){"begin"===this.etape?this.goTo("usage"):"usage"===this.etape?this.form.usages.quotidien?this.goTo("moyenTransportQuotidien"):this.goTo("moyenTransportExceptionnel"):"moyenTransportQuotidien"===this.etape?this.form.usages.exceptionnel?this.goTo("moyenTransportExceptionnel"):this.form.moyenTransportQuotidien.alternatif.active?this.goTo("complAlternatif"):this.form.moyenTransportQuotidien.voiture.active||this.form.moyenTransportExceptionnel.voiture.active?this.goTo("complVoiture"):this.form.moyenTransportQuotidien.commun.active||this.form.moyenTransportExceptionnel.commun.active?this.goTo("complCommun"):this.goTo("end"):"moyenTransportExceptionnel"===this.etape?this.form.moyenTransportQuotidien.alternatif.active?this.goTo("complAlternatif"):this.form.moyenTransportQuotidien.voiture.active||this.form.moyenTransportExceptionnel.voiture.active?this.goTo("complVoiture"):this.form.moyenTransportQuotidien.commun.active||this.form.moyenTransportExceptionnel.commun.active?this.goTo("complCommun"):this.goTo("end"):"complAlternatif"===this.etape?this.form.moyenTransportQuotidien.voiture.active||this.form.moyenTransportExceptionnel.voiture.active?this.goTo("complVoiture"):this.form.moyenTransportQuotidien.commun.active||this.form.moyenTransportExceptionnel.commun.active?this.goTo("complCommun"):this.goTo("end"):"complVoiture"===this.etape&&(this.form.moyenTransportQuotidien.commun.active||this.form.moyenTransportExceptionnel.commun.active)?this.goTo("complCommun"):this.goTo("end")},usageOk:function(){return!(this.form.usages.exceptionnel||this.form.usages.quotidien)}}},c=s,l=o("2877"),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports}}]);