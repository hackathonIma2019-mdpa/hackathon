(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b6144"],{"1c40":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",{staticClass:"flex flex-center"},["begin"==e.etape?t("q-card",{attrs:{bordered:""}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Diagnostic mobilité")])]),t("q-separator",{attrs:{inset:""}}),t("q-card-section",[e._v("\n      Afin de vous proposer une solution personnalisée, faisons ensemble le point sur vos besoins de mobilité pendant la durée d'imobilisation de votre véhicule\n    ")]),t("q-separator",{attrs:{inset:""}}),t("q-card-actions",{attrs:{vertical:""}},[t("q-btn",{attrs:{flat:""},on:{click:function(s){return e.goTo("besoins")}}},[e._v("Commencer")])],1)],1):e._e(),"besoins"==e.etape?t("q-card",{attrs:{bordered:""}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Avez-vous besoin de votre véhicule dans les prochains jours ?")])]),t("q-separator",{attrs:{inset:""}}),t("q-card-actions",{attrs:{vertical:""}},[t("q-btn",{attrs:{flat:""},on:{click:function(s){return e.goTo("usage")}}},[e._v("Oui, tous les jours")]),t("q-btn",{attrs:{flat:""},on:{click:function(s){return e.goTo("usage")}}},[e._v("Oui, quelques jours")]),t("q-btn",{attrs:{flat:""},on:{click:function(s){return e.goTo("begin")}}},[e._v("Non")])],1),t("q-separator",{attrs:{inset:""}}),t("q-card-actions",{attrs:{vertical:""}},[t("q-btn",{attrs:{flat:""},on:{click:e.goToPrec}},[e._v("Précédent")])],1)],1):e._e(),"usage"==e.etape?t("q-card",{attrs:{bordered:""}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Pour quels usages ?")])]),t("q-separator",{attrs:{inset:""}}),t("q-card-section",{attrs:{vertical:""}},[t("q-toggle",{attrs:{color:"primary",label:"Aller au travail"},model:{value:e.usages.travail,callback:function(s){e.$set(e.usages,"travail",s)},expression:"usages.travail"}}),t("q-toggle",{attrs:{color:"primary",label:"Faire mes courses"},model:{value:e.usages.courses,callback:function(s){e.$set(e.usages,"courses",s)},expression:"usages.courses"}}),t("q-toggle",{attrs:{color:"primary",label:"Partir en vacances"},model:{value:e.usages.vacances,callback:function(s){e.$set(e.usages,"vacances",s)},expression:"usages.vacances"}}),t("q-toggle",{attrs:{color:"primary",label:"Transporter des personnes"},model:{value:e.usages.personnes,callback:function(s){e.$set(e.usages,"personnes",s)},expression:"usages.personnes"}}),t("q-toggle",{attrs:{color:"primary",label:"Transporter des objets"},model:{value:e.usages.objets,callback:function(s){e.$set(e.usages,"objets",s)},expression:"usages.objets"}})],1),t("q-separator",{attrs:{inset:""}}),t("q-card-actions",[t("q-btn",{attrs:{flat:""},on:{click:e.goToPrec}},[e._v("Précédent")]),t("q-btn",{attrs:{flat:""}},[e._v("Continuer")])],1)],1):e._e()],1)},r=[],o={name:"Mobility",data:function(){return{etape:null,prec:[],usages:{travail:!1,courses:!1,vacances:!1,personnes:!1,objets:!1}}},mounted:function(){this.goTo("begin")},methods:{goTo:function(e){this.prec.push(this.etape),this.etape=e},goToPrec:function(){this.etape=this.prec.pop()}}},n=o,c=t("2877"),i=Object(c["a"])(n,a,r,!1,null,null,null);s["default"]=i.exports}}]);