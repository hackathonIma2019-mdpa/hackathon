<template>
  <q-page class="flex flex-center">
    <q-card  v-if="etape=='begin'" bordered >
      <q-card-section>
        <div class="text-h6">Diagnostic mobilité</div>
      </q-card-section>

      <q-separator inset />
      <q-card-section>
        Votre assurance ne prends pas en charge de véhicule de prêt ? Pas de panique, nous allons étudier ensemble vos besoins pour trouver la meilleure solution pendant la durée d'imobilisation de votre véhicule
      </q-card-section>
      <q-separator inset />
      <q-card-actions vertical>
        <q-btn flat class="bg-primary text-white"  v-on:click="next()">Commencer</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='usage'" bordered >
      <q-card-section>
        <div class="text-h6">Quels types de déplacement devez vous faire ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-toggle
          v-model="form.usages.quotidien"
          @input="quotidien"
          color="primary"
          label="Trajets quotidiens (aller au travail, faire les courses, ...)"
        />
        <q-toggle
          v-model="form.usages.exceptionnel"
          @input="exceptionnel"
          color="primary"
          label="Trajets exceptionnels (partir en vacances, ...)"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
          <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
          <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="next()">Continuer</q-btn>
      </q-card-actions>
    </q-card>


    <q-card v-if="etape=='moyenTransportQuotidien'" bordered >
      <q-card-section>
        <div class="text-h6">Pour vos trajets quotidiens (aller au travail, faire les courses, ...), quels moyens de transport pouvez vous utiliser?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-toggle
          v-model="form.moyenTransportQuotidien.alternatif.active"
          color="primary"
          label="Moyens de transport alternatifs (trottinette, vélo électrique, ...)"
        />
        <q-toggle
          v-model="form.moyenTransportQuotidien.commun.active"
          color="primary"
          label="Transport en commun (bus, train, metro, ...)"
        />
        <q-toggle
          v-model="form.moyenTransportQuotidien.voiture.active"
          color="primary"
          label="Autre vehicule"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="next()">Continuer</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='moyenTransportExceptionnel'" bordered >
      <q-card-section>
        <div class="text-h6">Pour vos trajets exceptionnels (partir en vacances, ...), quels moyens de transport pouvez vous utiliser?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-toggle
          v-model="form.moyenTransportExceptionnel.commun.active"
          color="primary"
          label="Transport en commun (bus, train, metro, ...)"
        />
        <q-toggle
          v-model="form.moyenTransportExceptionnel.voiture.active"
          color="primary"
          label="Autre vehicule"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="next()">Continuer</q-btn>
      </q-card-actions>
    </q-card>


    <q-card v-if="etape=='complAlternatif'" bordered >
      <q-card-section>
        <div class="text-h6">Possédez-vous déja un moyen de transport alternatif ou souhaitez-vous en acquérir un?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-btn-toggle
          v-model="form.alternative"
          push
          toggle-color="primary"
          :options="[
          {label: 'Je possède un moyen de transport alternatif', value: 'possede'},
          {label: 'Je souhaite en acquérir un', value: 'acquerir'},
        ]"
        >
        </q-btn-toggle>
      </q-card-section>
      <q-card-section class="text-h6" v-if="form.alternative">
        Pour être bien assuré lors de vos déplacement, votre assureur peut faire le point avec vous.
        Quand peut-il vous contacter ?
      </q-card-section>
      <q-card-section vertical v-if="form.alternative">
        <q-btn-toggle
          v-model="form.contact.type"
          push
          toggle-color="primary"
          :options="[
          {label: 'Maintenant', value: 'now'},
          {label: 'Plus tard', value: 'plustard'},
          {label: 'Jamais', value: 'never'},
        ]"
        >
        </q-btn-toggle>
        <q-date v-model="form.contact.date" minimal v-if="form.contact.type === 'plustard'"/>
      </q-card-section>
      <q-separator inset v-if="form.alternative"/>
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="next()">Continuer</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='complVoiture'" bordered >
      <q-card-section>
        <div class="text-h6">Seriez-vous interesser par du co-voiturage ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-btn-toggle
          v-model="form.voiture"
          push
          toggle-color="primary"
          :options="[
          {label: 'Non', value: 'pasCovoit'},
          {label: 'Oui', value: 'covoit'},
        ]"
        >
        </q-btn-toggle>
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="next()">Continuer</q-btn>
      </q-card-actions>
    </q-card>


    <q-card v-if="etape=='complCommun'" bordered >
      <q-card-section>
        <div class="text-h6">Quel type de transport en commun emprunterez-vous ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-toggle
          v-model="form.commun.train"
          color="primary"
          label="Train"
        />
        <q-toggle
          v-model="form.commun.bus"
          color="primary"
          label="Bus"
        />
        <q-toggle
          v-model="form.commun.metro"
          color="primary"
          label="Métro"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="next()">Continuer</q-btn>
      </q-card-actions>
    </q-card>



    <q-card v-if="etape=='end'" bordered >
      <q-card-section>
        <div class="text-h6">Et bien bon courage vous etes pas arrivez à destination!</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        Ha ha ha!
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'Mobility',
    data(){
      return {etape:null,
        prec:[],
        form: {
          usages: {
            quotidien: false,
            exceptionnel: false,
          },
          moyenTransportQuotidien : {
            commun : {active: false},
            alternatif: {active: false},
            voiture: {active: false},
          },
          moyenTransportExceptionnel : {
            commun : {active: false},
            voiture: {active: false},
          },
          alternative:null,
          contact: {
            type: null,
            date: null,
          },
          voiture : null,
          commun: {
            train : false,
            bus: false,
            metro: false,
          },
        },
      }
    },
    mounted(){
      this.goTo('begin');
    },
    methods : {
      goTo(etape) {
        this.prec.push(this.etape);
        this.etape= etape;
      },
      goToPrec() {
        this.etape=this.prec.pop();
      },
      next() {
        if (this.etape === 'begin') {
          this.goTo('usage');
        } else if (this.etape === 'usage') {
          if (this.form.usages.quotidien) {
            this.goTo('moyenTransportQuotidien');
          } else {
            this.goTo('moyenTransportExceptionnel');
          }
        } else if (this.etape === 'moyenTransportQuotidien') {
          if (this.form.usages.exceptionnel) {
            this.goTo('moyenTransportExceptionnel');
          } else {
            if (this.form.moyenTransportQuotidien.alternatif.active) {
              this.goTo('complAlternatif');
            } else if (this.form.moyenTransportQuotidien.voiture.active || this.form.moyenTransportExceptionnel.voiture.active) {
              this.goTo('complVoiture');
            } else if (this.form.moyenTransportQuotidien.commun.active || this.form.moyenTransportExceptionnel.commun.active) {
              this.goTo('complCommun');
            } else {
              this.goTo('end');
            }
          }
        } else if (this.etape === 'moyenTransportExceptionnel') {
          if (this.form.moyenTransportQuotidien.alternatif.active) {
            this.goTo('complAlternatif')
          } else if (this.form.moyenTransportQuotidien.voiture.active || this.form.moyenTransportExceptionnel.voiture.active) {
            this.goTo('complVoiture');
          } else if (this.form.moyenTransportQuotidien.commun.active || this.form.moyenTransportExceptionnel.commun.active) {
            this.goTo('complCommun');
          } else {
            this.goTo('end');
          }
        } else if (this.etape === 'complAlternatif') {
          if (this.form.moyenTransportQuotidien.voiture.active || this.form.moyenTransportExceptionnel.voiture.active) {
            this.goTo('complVoiture');
          } else if (this.form.moyenTransportQuotidien.commun.active || this.form.moyenTransportExceptionnel.commun.active) {
            this.goTo('complCommun');
          } else {
            this.goTo('end')
          }
        } else if (this.etape === 'complVoiture') {
          if (this.form.moyenTransportQuotidien.commun.active || this.form.moyenTransportExceptionnel.commun.active) {
            this.goTo('complCommun');
          } else {
            this.goTo('end')
          }
        } else {
          this.goTo('end');
        }

      },
      usageOk() {
        return !(this.form.usages.exceptionnel || this.form.usages.quotidien);
      },
      autresOk() {
        return !(this.form.autres=='pasAutres' || this.form.autresDetail.moto || this.form.autresDetail.scooter || this.form.autresDetail.trottinette|| this.form.autresDetail.velo|| this.form.autresDetail.voiture);
      },
    }
  }
</script>
