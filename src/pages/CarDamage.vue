<template>
  <q-page class="flex flex-center">
    <q-card bordered class=" my-card">
      <q-card-section>
        <div class="text-h6">Prenez une photo de votre véhicule</div>
        <div class="text-subtitle2"><u>Powered by Fotonowere</u></div>
      </q-card-section>

      <q-separator inset/>
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
      />
      <div class="row justify-end">
        <q-btn color="primary" label="Envoyer" icon="cloud"
               v-if="hasFile"
               :disable="sent"
               @click="$refs.uploader.upload()"
        />
      </div>
      <q-separator inset v-if="sent"/>
      <div v-if="sent">
        {{score}}
      </div>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'CarDamage',
    data: function () {
      return {
        hasFile: false,
        sent: false,
        score: ''
      }
    },
    methods: {
      added() {
        this.hasFile = true;
      },
      removed() {
        this.hasFile = false;
      },
      uploaded(info) {
        this.sent = true;
        this.score = info;
      }
    }
  }
</script>
