<template>
  <div id="page-econimiser">
    <div style="display: flex;justify-content: center">
      <h6>Economiser sur mes réparations</h6>
    </div>
    <div class="q-pa-md">
      <div class="text-subtitle1">
        Sélectionner la zone de votre véhicule :
      </div>

      <div class="row">
        <div class="col-3">
          &nbsp;
        </div>
        <div class="col" style="text-align: center">
          <q-btn flat round @click="up" icon="fas fa-chevron-up"></q-btn>
        </div>
        <div class="col-3">
          &nbsp;
        </div>
      </div>

      <div style="display: flex;justify-content: start;align-items: center">
        <div class="col" style="text-align: end">
          <q-btn @click="left" flat round icon="fas fa-chevron-left"></q-btn>
        </div>
        <div v-ripple="{ color: 'primary' }" class="relative-position">
          <img :src="img" @click="allerList"/>
        </div>
        <div class="col">
          <q-btn @click="right" flat round icon="fas fa-chevron-right"></q-btn>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          &nbsp;
        </div>
        <div class="col" style="text-align: center">
          <q-btn flat round @click="down" icon="fas fa-chevron-down"></q-btn>
        </div>
        <div class="col-3">
          &nbsp;
        </div>
      </div>

      <div class="row">
        <div class="col-7">
        </div>
      </div>

      <div class="text-subtitle1">
        Ou par pièce :
      </div>
      <div>
        <q-select square v-model="model" :options="options"/>
      </div>

    </div>
    <back-button route="/"></back-button>
  </div>
</template>
<script>
  import BackButton from '../../components/BackButton'
  import avantFace from '../../assets/econimiser/avant-face.jpg';
  import faceLateraleDroite from '../../assets/econimiser/face-laterale-droite.jpg';
  import faceLateraleGauche from '../../assets/econimiser/face-laterale-gauche.jpg';
  import arriere from '../../assets/econimiser/arriere.jpg';
  import vitrage from '../../assets/econimiser/vitrage.jpg';
  import freinage from '../../assets/econimiser/freinage.jpg';
  import echappement from '../../assets/econimiser/echappement.jpg';

  export default {
    name: 'Econimiser',
    components:{BackButton},
    data() {
      return {
        img: avantFace,
        model: '',
        options: [
          '',
          'Moteur',
          'Levier De Frein à Main',
          'Feu Arrière Droit',
          'Porte Avant Droite',
          'Porte Arrière Droite',
          'Ceinture Avant Gauche',
          'Jante Alu',
          'Pare Choc Avant',
          'Rétroviseur Extérieur Électrique Droit Peint',
          'Rétroviseur Extérieur Électrique Gauche',

        ]
      }
    },
    methods: {
      left() {
        const { img } = this;
        if (img === avantFace) {
          this.img = faceLateraleDroite
          return;
        }
        if (img === faceLateraleDroite) {
          this.img = arriere
          return;
        }

        if (img === arriere) {
          this.img = faceLateraleGauche
          return;
        }

        this.img = avantFace
      },

      right() {
        const { img } = this;
        if (img === avantFace) {
          this.img = faceLateraleGauche
          return;
        }
        if (img === faceLateraleGauche) {
          this.img = arriere
          return;
        }

        if (img === arriere) {
          this.img = faceLateraleDroite
          return;
        }

        this.img = avantFace
      },

      up() {
        const { img } = this;
        if (img === avantFace) {
          this.img = vitrage
          return;
        }
        if (img === vitrage) {
          this.img = arriere
          return;
        }

        if (img === arriere) {
          this.img = echappement
          return;
        }

        if (img === echappement) {
          this.img = freinage
          return;
        }

        this.img = avantFace

        return;
      },

      down() {
        const { img } = this;
        if (img === avantFace) {
          this.img = freinage
          return;
        }
        if (img === freinage) {
          this.img = echappement
          return;
        }

        if (img === echappement) {
          this.img = arriere
          return;
        }

        if (img === arriere) {
          this.img = vitrage
          return;
        }

        this.img = avantFace

      },

      allerList() {
        window.setTimeout(() => this.$router.push('/economiser-list'), 750)
      }
    }
  }
</script>
<style>
  #page-econimiser {

  }
</style>
