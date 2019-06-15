<template>
  <q-layout view="hHr lpr fFf" class="no-shadow">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat class="self-stretch q-hoverable q-btn--no-uppercase no-border-radius">
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
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
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
