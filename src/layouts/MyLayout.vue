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
        <q-space />

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
            <q-icon name="monetization_on"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Estimer les dégats</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/mobility">
          <q-item-section avatar>
            <q-icon name="directions_car"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Changer votre voiture</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/Mobility" exact>
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
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import {openURL} from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        right: this.$q.platform.is.desktop
      }
    },
    methods: {
      openURL
    }
  }
</script>

<style>
</style>
