<template>
  <q-page class="column justify-start items-center q-pa-md">

    <div v-if="etape==='init'" class="">
      <h1 class="text-secondary text-center">Vous souhaitez changer de voiture ?</h1>
      <q-btn-group spread unelevated>
        <q-btn color="fourth" @click="sameCar()">Je veux la même voiture</q-btn>
        <q-btn color="secondary" @click="goTo('recherche')">Je veux changer de modèle</q-btn>
      </q-btn-group>
    </div>

    <div v-if="etape=='recherche'" style="width: 100%">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="search"
          label="Recherche"
          class="bg-secondary text-white"
          expand-icon-class="text-white"
          default-opened
        >
          <q-card>
            <q-card-section>
              <q-input outlined
                       v-model="form.searchText"
                       label="Marque"/>
              <h6 class="text-tertiary">Kilométrage</h6>
              <div class="badge-container">
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
              <div class="badge-container">
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
              <h6 class="text-tertiary">Prix</h6>
              <div class="badge-container">
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
              <div class="badge-container">
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
                       label="Code postal"/>
            </q-card-section>
            <q-separator inset/>
          </q-card>
        </q-expansion-item>
      </q-list>
      <div class="row justify-between" style="margin-top: 15px; margin-bottom: 15px;">
        <q-btn flat v-on:click="goToPrec" icon="keyboard_arrow_left">
          Précédent
        </q-btn>
        <q-btn flat class="bg-primary text-white" v-on:click="goTo('resultats')">Rechercher</q-btn>
      </div>
    </div>

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

      <q-card-section v-for="oldCar in oldCarsResults">

        <q-img
          :src="oldCar.images[0]"
          style="height: 140px; max-width: 150px"
          v-if="oldCar && oldCar.images && oldCar.images.length> 0"
        >
          <template v-slot:loading>
            <div class="text-yellow">
              <q-spinner-ios />
              <div class="q-mt-md">Loading...</div>
            </div>
          </template>
        </q-img>


        <div>{{oldCar.attributes.brand}} - {{oldCar.attributes.model}}</div>
        <div>{{oldCar.price}} €</div>
        <div>{{oldCar.attributes.mileage}} km</div>


      </q-card-section>
      <q-separator inset/>

      <q-card-actions align="between">
        <q-btn flat @click="goToPrec()">Précédent</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="etape=='fiche'" bordered>
      <q-card-section>
        <div class="text-h6">
          <i class="material-icons">
            directions_car
          </i>
          Fiche voiture
        </div>
      </q-card-section>
      <q-separator inset/>
      <q-card-section>

        TODO fiche

      </q-card-section>
      <q-separator inset/>

      <q-card-actions align="between">
        <q-btn flat v-on:click="goToPrec">Précédent</q-btn>
      </q-card-actions>
    </q-card>


  </q-page>
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'SearchNewCar',
    data() {
      return {
        etape: "init",
        isSameCar: false,
        prec: [],
        selectedCar: null,
        oldCarsResults: null,
        results: null,
        form: {
          minPrice: 0,
          maxPrice: 0,
          codePostal: null,
          minKm: 0,
          maxKm: 0,
          searchText: null
        }
      }
    },

    mounted() {
      axios.get('/api/old-car')
        .then((oldCar) => {
          this.oldCarsResults = oldCar.data.results;
          console.log('oldCar.results: ', oldCar.data.results);
        });
    },

    methods: {
      goTo(etape) {
        this.prec.push(this.etape);
        this.etape = etape;
      },

      goToPrec() {
        if (this.isSameCar) {
          this.isSameCar = false;
        }
        this.etape = this.prec.pop();
      },

      sameCar() {
        this.goTo("resultats");
        this.isSameCar = true;
        this.prec.push("recherche");
        this.results = this.oldCarsResults;
      },

      displayResults() {
        axios.get('/api/search')
          .then((cars) => {
            this.results = cars.data.results;
            console.log('oldCar.results: ', cars.data.results);
            this.goTo('resultats');
          });
      },

      displayDetail() {
        this.goTo('fiche');
      },

    }
  }
</script>
