<template>
  <q-page class="column justify-start items-center q-pa-md">
    <h1 class="text-secondary text-center">Estimer les dégats <br /> sur votre véhicule</h1>
    <q-card bordered class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Prenez une photo de votre véhicule</div>
        <div class="text-subtitle2"><u>Powered by Fotonowere</u></div>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <q-uploader
          ref="uploader"
          @added="added"
          @removed="removed"
          @uploaded="uploaded"
          accept="image/*"
          :disable="sent"
          :hide-upload-btn="true"
          url="/api/societaires/1/cars/damages/pictures"
          style="width: 100%;"
          color="tertiary"
          class="no-box-shadow"
        />
        <div class="row justify-end">
          <q-btn color="primary"
                 label="Envoyer"
                 icon="cloud_upload"
                 v-if="hasFile"
                 :disable="sent"
                 @click="$refs.uploader.upload()"
                 class="c-btn-upload"
                 unelevated
          />
        </div>
      </q-card-section>
      <q-separator inset v-if="sent"/>
      <q-card-section v-if="score !== '' && score <= 50">
        A première vue, votre voiture devrait être réparable.
      </q-card-section>
      <q-separator inset v-if="score"/>
      <q-card-section v-if="score !== '' && score > 50">
        Uh Oh, il y à {{score}}% de chances que votre véhicule ne soit pas réparable
      </q-card-section>

      <q-separator inset v-if="score !== ''"/>

      <q-actions v-if="score !== ''" align="between">
        <q-btn flat class="white" @click="go('/')">Retour à l'accueil</q-btn>
        <q-btn class="bg-primary text-white" v-if="score <= 50" @click="go('/mobility')">Comment se déplacer en attendant ?
        </q-btn>
        <q-btn class="bg-primary text-white" v-if="score > 50" @click="go('/search-car')">Changer de véhicule</q-btn>
      </q-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    name: 'CarDamage',
    data: function () {
      return {
        hasFile: false,
        sent: false,
        score: '',
      }
    },
    methods: {
      go(route) {
        this.$router.push(route);
      },
      added(file) {
        this.hasFile = true;
      },
      removed() {
        this.hasFile = false;
      },
      uploaded(info) {
        this.sent = true;
        axios.get('/api/societaires/1/cars/damages/scores/latest')
          .then((score) => {
            this.score = (Object.keys(score.data) || {"80": null})[0].replace('\.png', '');
          });
      }
    }
  }
</script>
