<template>
  <div id="page-econimiser">
    <div style="display: flex;justify-content: center">
      <h6>Econimiser sur mes réparations</h6>
    </div>
    <div class="q-pa-md">

      <div class="row">
        <div class="col-3">
          &nbsp;
        </div>
        <div class="col" style="text-align: center">
          <q-btn flat round icon="fas fa-chevron-up"></q-btn>
        </div>
        <div class="col-3">
          &nbsp;
        </div>
      </div>

      <div style="display: flex;justify-content: start;align-items: center">
        <div class="col" style="text-align: end">
          <q-btn @click="left" flat round icon="fas fa-chevron-left"></q-btn>
        </div>
        <div>
          <img :src="img"/>
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
          <q-btn flat round icon="fas fa-chevron-down"></q-btn>
        </div>
        <div class="col-3">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import avantFace from '../assets/econimiser/avant-face.jpg';
  import faceLateraleDroite from '../assets/econimiser/face-laterale-droite.jpg';
  import faceLateraleGauche from '../assets/econimiser/face-laterale-gauche.jpg';
  import arriere from '../assets/econimiser/arriere.jpg';

  export default {
    name: 'Econimiser',
    data() {
      return {
        img: avantFace
      }
    },
    methods: {
      left() {
        const {img} = this;
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
        const {img} = this;
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
        this.img = faceLateraleDroite
      },

      down() {
        this.img = faceLateraleDroite
      },
    }
  }
</script>
<style>
  #page-econimiser {

  }
</style>
