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
            <q-item-label>Changer ma voiture</q-item-label>
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

    <q-page-container :class="{'c-timer-closed': depanneurArrived}">
      <router-view/>
      <div v-if="!depanneurArrived" class="c-depanneur">
      </div>
      <div v-if="!depanneurArrived" class="c-depanneur-time">
        {{ myTime(timeToDisplay) }}
      </div>
      <q-linear-progress v-if="!depanneurArrived" style="height: 15px" :value="progress" class="q-mt-md c-progress-depanner"/>
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
        timeToDisplay: 180,
        interval: null,
        depanneurArrived: false
      }
    },
    mounted() {
      let depanneurTruck = document.querySelector('.c-depanneur');
      this.interval = setInterval(() => {
        depanneurTruck.style.transform = "translateX("+ this.progress * 100 +"%)";
        this.timeToDisplay--;
        this.progress += 1 / this.timeToDepanne;
        if(this.progress >= 1) {
          this.depanneurArrived = true;
          this.$q.notify('Votre déppaneur est arrivé Victor');
          clearInterval(this.interval);
        }
      }, 1000);



    },
    methods: {
      openURL,
      myTime() {
        let time = this.timeToDisplay;
        let hr = ~~(time / 3600);
        let min = ~~((time % 3600) / 60);
        let sec = time % 60;
        let sec_min = "";
        if (hr > 0) {
          sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
        }
        sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
        sec_min += "" + sec;
        return sec_min+ " min";
      }
    }
  }
</script>

<style scoped lang="stylus">
  .c-timer-closed
    transition all .3s linear
    padding-top 10px !important
  .c-progress-depanner
    position fixed
    top 55px

  .c-depanneur
    z-index 1000
    position fixed
    top 50px
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

  .c-depanneur-time
    display flex
    justify-content center
    align-items center
    z-index 1001
    position fixed
    top 58px
    width 45px
    margin-left 45%
    height 45px
    border-radius 50%
    background-color #fff
    border 3px solid $primary
    color $primary
    line-height 15px
    text-align center
</style>
