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
        <q-btn flat v-on:click="goTo('besoins')">Commencer</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='besoins'" bordered >
      <q-card-section>
        <div class="text-h6">Avez-vous besoin de votre véhicule dans les prochains jours ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-actions vertical>
        <q-btn flat  v-on:click="goTo('usage')">Oui, tous les jours</q-btn>
        <q-btn flat  v-on:click="goTo('usage')">Oui, quelques jours</q-btn>
        <q-btn flat  v-on:click="goTo('begin')">Non</q-btn>
      </q-card-actions>
      <q-separator inset />
      <q-card-actions vertical>
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='usage'" bordered >
      <q-card-section>
        <div class="text-h6">Pour quels usages ?</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section vertical>
        <q-toggle
          v-model="usages.travail"
          color="primary"
          label="Aller au travail"
        />
        <q-toggle
          v-model="usages.courses"
          color="primary"
          label="Faire mes courses"
        />
        <q-toggle
          v-model="usages.vacances"
          color="primary"
          label="Partir en vacances"
        />
        <q-toggle
          v-model="usages.personnes"
          color="primary"
          label="Transporter des personnes"
        />
        <q-toggle
          v-model="usages.objets"
          color="primary"
          label="Transporter des objets"
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions >
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        <q-btn flat >Continuer</q-btn>
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
        usages: {
          travail:false,
          courses:false,
          vacances:false,
          personnes:false,
          objets:false
        }
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
      }
    }
  }
</script>
