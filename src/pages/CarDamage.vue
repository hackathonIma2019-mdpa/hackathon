<template>
  <q-page class="flex flex-center">
    <q-card  bordered class=" my-card">
      <q-card-section>
        <div class="text-h6">Prenez une photo de votre véhicule</div>
        <div class="text-subtitle2">by Fotonowere</div>
      </q-card-section>

      <q-separator inset />
        <q-uploader
          url="/api/car-damages/upload"
        />
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'CarDamage'
  }
</script>
