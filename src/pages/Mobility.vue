<template>
  <q-page class="column justify-start items-center q-pa-md">
    <div v-if="etape=='begin'">
      <h1 class="text-secondary text-center">Votre diagnostic mobilité</h1>
      <q-card bordered>
        <q-card-section>
          Afin de vous proposer une solution personnalisée, faisons ensemble le point sur vos besoins de mobilité
          pendant la durée d'imobilisation de votre véhicule
        </q-card-section>
        <q-separator/>
        <q-card-actions vertical>
          <q-btn flat class="bg-primary text-white" v-on:click="goTo('besoins')">Commencer</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <q-card v-if="etape=='besoins'" bordered>
      <q-card-section class="bg-tertiary text-white">
        <div class="text-h6">Avez-vous besoin d'un véhicule dans les prochains jours ?</div>
      </q-card-section>
      <q-separator inset/>
      <q-card-actions vertical>
        <q-btn-toggle
          unelevated
          v-model="form.besoin"
          toggle-color="secondary"
          :options="[
          {label: 'Non', value: 'pasBesoin', slot: 'non'},
          {label: 'Oui', value: 'besoin', slot: 'oui'},
        ]"
        >
          <template v-slot:oui>
            <q-tooltip>Oui</q-tooltip>
          </template>

          <template v-slot:non>
            <q-tooltip>Non</q-tooltip>
          </template>
        </q-btn-toggle>
      </q-card-actions>
      <q-separator/>
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
          }
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
              this.goTo('complAlternatif')
            } else {
              this.goTo('end');
            }
          }
        } else if (this.etape === 'moyenTransportExceptionnel') {
          if (this.form.moyenTransportQuotidien.alternatif.active) {
            this.goTo('complAlternatif')
          } else {
            this.goTo('end');
          }
        } else if (this.etape === 'complAlternatif') {
          this.goTo('end')
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
