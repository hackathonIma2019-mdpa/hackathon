<template>
  <q-page>


    <div v-if="true">
      <div class="text-h6">
        <i class="material-icons">
        search
        </i>
        Recherche
      </div>


      <q-input outlined v-model="text" label="Marque" />


      Kilométrage
      <div class="q-pa-md">
        <q-badge color="secondary">
          Min : {{minKms}}
        </q-badge>

        <q-slider
          v-model="minKms"
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
          Max : {{maxKms}}
        </q-badge>

        <q-slider
          v-model="maxKms"
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
          min : {{minPrice}}
        </q-badge>

        <q-slider
          v-model="minPrice"
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
          max : {{maxPrice}}
        </q-badge>

        <q-slider
          v-model="maxPrice"
          :min="0"
          :max="100000"
          :step="500"
          snap
          label
          label-always
          color="blue"
        />
      </div>


      <q-input outlined v-model="number" label="Code postal" />

      
    </div>

    <div v-if="true">
      <div class="text-h6">
        <i class="material-icons">
          format_list_bulleted
        </i>
        Résultats
      </div>
    </div>

    <div v-if="true">
      <div class="text-h6">
        <i class="material-icons">
          directions_car
        </i>
        Fiche voiture
      </div>
    </div>









  </q-page>
</template>


<script>
  export default {
    name: 'Mobility',
    data(){
      return {
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
