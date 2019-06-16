<template>
  <q-layout view="hHr lpr fFf" class="no-shadow">
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/" flat class="self-stretch q-hoverable q-btn--no-uppercase no-border-radius">
          <q-avatar>
            <img src="../statics/icons/imassister_logo_white_42.png"/>
          </q-avatar>
          <q-toolbar-title>
            IMA'ssister
          </q-toolbar-title>
        </q-btn>
        <q-space/>

        <q-btn
          flat
          dense
          round
          @click="right = !right"
          aria-label="Menu"
        >
          <q-icon name="menu"/>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="right"
      side="right"
      bordered
      content-class="bg-primary-lighten text-white"
    >
      <q-list>
        <q-item clickable tag="a" to="/car-damage" exact>
          <q-item-section avatar>
            <q-icon name="mdi-car-limousine"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Estimer les dégats</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/search-car">
          <q-item-section avatar>
            <q-icon name="directions_car"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Changer votre voiture</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/mobility" exact>
          <q-item-section avatar>
            <q-icon name="directions_bike"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Comment me déplacer en attendant</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/economiser">
          <q-item-section avatar>
            <q-icon name="star"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Economiser sur mes réparations</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/contact">
          <q-item-section avatar>
            <q-icon name="phone"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Contacter mon assureur</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/cassebrique">
          <q-item-section avatar>
            <q-icon name="games"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Se détendre en attendant ?</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
      <div class="c-depanneur"></div>
      <q-linear-progress style="height: 15px" :value="progress" class="q-mt-md c-progress-depanner"/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import {openURL} from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        right: this.$q.platform.is.desktop,
        progress: 0,
        timeToDepanne: 180,
        interval: null
      }
    },
    mounted() {
      let depanneurTruck = document.querySelector('.c-depanneur');
      this.interval = setInterval(() => {
        depanneurTruck.style.transform = "translateX("+ this.progress * 100 +"%)";
        this.progress += 1 / this.timeToDepanne;
        if(this.progress >= 1) {
          clearInterval(this.interval);
        }
      }, 1000);



    },
    methods: {
      openURL
    }
  }
</script>

<style scoped lang="stylus">
  .c-depanneur
    z-index 1000
    position fixed
    bottom -6px
    left -20px
    height 45px
    color #FFF
    width 100%
    transition transform .3s linear
    &::after
      display block
      content ''
      width 45px
      height 45px
      background-image url("../assets/tow-truck.png")
      background-size 45px
</style>
