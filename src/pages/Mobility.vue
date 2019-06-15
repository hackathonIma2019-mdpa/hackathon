<template>
  <q-page class="flex flex-center">
    <q-card  v-if="etape=='begin'" bordered >
      <q-card-section>
        <div class="text-h6">Diagnostic mobilité</div>
      </q-card-section>

      <q-separator inset />
      <q-card-section>
        Afin de vous proposer une solution personnalisée, faisons ensemble le point sur vos besoins de mobilité pendant la durée d'imobilisation de votre véhicule
      </q-card-section>
      <q-separator inset />
      <q-card-actions vertical>
        <q-btn flat class="bg-primary text-white"  v-on:click="goTo('besoins')">Commencer</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='besoins'" bordered >
      <q-card-section>
        <div class="text-h6">Avez-vous besoin d'un véhicule dans les prochains jours ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-actions vertical>
        <q-btn-toggle
          v-model="form.besoin"
          push
          toggle-color="primary"
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
      <q-separator inset />
      <q-card-actions align="between">
          <q-btn flat v-on:click="goToPrec" >Précédent</q-btn>
          <q-btn flat class="bg-primary text-white" :disabled="besoinOk()" v-on:click="goToUsage">Continuer</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='usage'" bordered >
      <q-card-section>
        <div class="text-h6">Pour quels usages ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-toggle
          v-model="form.usages.travail"
          color="primary"
          label="Aller au travail"
        />
        <q-toggle
          v-model="form.usages.courses"
          color="primary"
          label="Faire mes courses"
        />
        <q-toggle
          v-model="form.usages.vacances"
          color="primary"
          label="Partir en vacances"
        />
        <q-toggle
          v-model="form.usages.personnes"
          color="primary"
          label="Transporter des personnes"
        />
        <q-toggle
          v-model="form.usages.objets"
          color="primary"
          label="Transporter des objets"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
          <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
          <q-btn flat class="bg-primary text-white" :disabled="usageOk()" v-on:click="goTo('autres')">Continuer</q-btn>
      </q-card-actions>
    </q-card>


    <q-card v-if="etape=='autres'" bordered >
      <q-card-section>
        <div class="text-h6">Avez-vous d'autres moyens de transports à votre disposition ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-actions vertical>
        <q-btn-toggle
          v-model="form.autres"
          push
          toggle-color="primary"
          :options="[
          {label: 'Non', value: 'pasAutres', slot: 'non'},
          {label: 'Oui', value: 'autres', slot: 'oui'},
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
      <q-card-section vertical v-if="form.autres==='autres'">
        <q-toggle
          v-model="form.autresDetail.voiture"
          color="primary"
          label="Voiture"
        />
        <q-toggle
          v-model="form.autresDetail.moto"
          color="primary"
          label="Moto"
        />
        <q-toggle
          v-model="form.autresDetail.velo"
          color="primary"
          label="Vélo / Vélo électrique"
        />
        <q-toggle
          v-model="form.autresDetail.trottinette"
          color="primary"
          label="Trottinette"
        />
        <q-toggle
          v-model="form.autresDetail.scooter"
          color="primary"
          label="Scooter"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat class="bg-primary text-white" :disabled="autresOk()" v-on:click="goTo('end')">Continuer</q-btn>
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
          besoin: null,
          usages: {
            travail: false,
            courses: false,
            vacances: false,
            personnes: false,
            objets: false
          },
          autres: null,
          autresDetail: {
            voiture: false,
            moto: false,
            velo: false,
            scooter: false,
            trottinette: false,
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
      goToUsage() {
        if (this.form.besoin === 'besoin') {
          this.goTo('usage');
        } else {
          this.goTo('end');
        }
      },
      besoinOk() {
        return !this.form.besoin;
      },
      usageOk() {
        return !(this.form.usages.courses || this.form.usages.objets || this.form.usages.personnes|| this.form.usages.travail|| this.form.usages.vacances);
      },
      autresOk() {
        return !(this.form.autres=='pasAutres' || this.form.autresDetail.moto || this.form.autresDetail.scooter || this.form.autresDetail.trottinette|| this.form.autresDetail.velo|| this.form.autresDetail.voiture);
      },
    }
  }
</script>
