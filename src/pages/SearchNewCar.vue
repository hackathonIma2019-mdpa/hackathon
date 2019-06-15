<template>
  <q-page>

    <q-card v-if="etape=='recherche'" bordered >
      <q-card-section>
        <div class="text-h6">
          <i class="material-icons">
            search
          </i>
          Recherche
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-input outlined
                 v-model="form.searchText"
                 label="Marque" />


        Kilométrage
        <div class="q-pa-md">
          <q-badge color="secondary">
            Min : {{form.minKm}}
          </q-badge>

          <q-slider
            v-model="form.minKm"
            :min="0"
            :max="200000"
            :step="5"
            snap
            label
            label-always
            color="purple"
          />
        </div>
        <div class="q-pa-md">
          <q-badge color="secondary">
            Max : {{form.maxKm}}
          </q-badge>

          <q-slider
            v-model="form.maxKm"
            :min="0"
            :max="200000"
            :step="5"
            snap
            label
            label-always
            color="purple"
          />
        </div>

        Prix
        <div class="q-pa-md">
          <q-badge color="secondary">
            min : {{form.minPrice}}
          </q-badge>

          <q-slider
            v-model="form.minPrice"
            :min="0"
            :max="100000"
            :step="500"
            snap
            label
            label-always
            color="blue"
          />
        </div>
        <div class="q-pa-md">
          <q-badge color="secondary">
            max : {{form.maxPrice}}
          </q-badge>

          <q-slider
            v-model="form.maxPrice"
            :min="0"
            :max="100000"
            :step="500"
            snap
            label
            label-always
            color="blue"
          />
        </div>


        <q-input outlined
                 v-model="form.codePostal"
                 label="Code postal" />
      </q-card-section>
      <q-separator inset />

      <q-card-actions align="between">
        <q-btn flat class="bg-primary text-white" v-on:click="goTo('resultats')">Rechercher</q-btn>
      </q-card-actions>

    </q-card>


    <q-card v-if="etape=='resultats'" bordered >
    <q-card-section>
      <div class="text-h6">
        <i class="material-icons">
          format_list_bulleted
        </i>
        Résultats
      </div>
    </q-card-section>
    <q-separator inset />
    <q-card-section>

      TODO recherches

    </q-card-section>
    <q-separator inset />

    <q-card-actions align="between">
      <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
      <q-btn flat class="bg-primary text-white" v-on:click="goTo('fiche')">Rechercher</q-btn>
    </q-card-actions>
  </q-card>


    <q-card v-if="etape=='fiche'" bordered >
      <q-card-section>
        <div class="text-h6">
          <i class="material-icons">
            directions_car
          </i>
          Fiche voiture
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>

        TODO fiche

      </q-card-section>
      <q-separator inset />

      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
        </q-card-actions>
    </q-card>



  </q-page>
</template>


<script>
  export default {
    name: 'Recherche voiture',
    data(){
      return {
        etape: null,
        prec:[],
        selectedCar: null,
        form: {
          minPrice:null,
          maxPrice:null,
          codePostal:null,
          minKm:null,
          maxKm:null,
          searchText:null
        }
      }
    },

    mounted(){
      this.goTo('recherche');
    },

    methods : {
      goTo(etape) {
        this.prec.push(this.etape);
        this.etape = etape;
      },
      goToPrec() {
        this.etape = this.prec.pop();
      },

      displayResults() {
        this.goTo('resultats');
      },

      displayDetail() {
        this.goTo('fiche');
      },

    }
  }
</script>
