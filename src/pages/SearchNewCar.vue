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
      <h1 class="text-secondary text-center">Votre nouvelle voiture en quelques clics !</h1>
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="search"
          label="Recherche"
          class="bg-primary text-white"
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

    <div v-if="etape==='resultats'" style="width:100%;">
      <h1 class="text-secondary text-center">Vos résultats</h1>
      <q-card bordered>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6" style="display: flex; align-items: center">
            <q-icon size="1.3em" name="format_list_bulleted" style="margin-right: 15px;"></q-icon>
            {{ nbResult }} Résultats
          </div>
        </q-card-section>
        <q-separator/>

        <q-card-section>
          <q-list bordered separator>
            <q-item v-for="(oldCar, index) in oldCarsResults" :key="index">
              <q-item-section>
                <q-img
                  :src="oldCar.images[0]"
                  style="height: 140px; max-width: 150px"
                  v-if="oldCar && oldCar.images && oldCar.images.length> 0"
                >
                  <template v-slot:loading>
                    <div class="text-tertiary">
                      <q-spinner-ios/>
                      <div class="q-mt-md">Loading...</div>
                    </div>
                  </template>
                </q-img>
              </q-item-section>
              <q-item-section>
                <div>
                  <span class="text-subtitle2">Marque - Modèle</span>
                  <p>{{oldCar.attributes.brand}} - {{oldCar.attributes.model}}</p>
                </div>
                <div>
                  <span class="text-subtitle2">Prix</span>
                  <p>{{oldCar.price}} €</p>
                </div>
                <div>
                  <span class="text-subtitle2">Kilométrage</span>
                  <p>{{oldCar.attributes.mileage}} km</p>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-separator/>
      </q-card>
      <q-btn flat @click="goToPrec()">Précédent</q-btn>
    </div>

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
        nbResult: 0,
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
          this.nbResult = oldCar.data.nbResult;
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

<style scoped lang="stylus">
  p
    margin-bottom 5px
</style>
