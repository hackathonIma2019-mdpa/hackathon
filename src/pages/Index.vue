<template>
  <q-page class="home column justify-start items-center q-pa-sm">
    <h1 class="text-secondary text-center">Bonjour Victor !</h1>
    <h2 class="text-center">Votre dépanneur arrive. <br />Profitez utilement de votre attente ci-dessous.</h2>
    <div class="row justify-around">
      <q-btn to="/mobility" unelevated color="tertiary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="directions_bike"/>
        <div>Comment me déplacer en attendant</div>
      </q-btn>
      <q-btn to="/car-damage" unelevated  color="primary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="mdi-car-limousine"/>
        <div>Estimer les dégats sur mon véhicule</div>
      </q-btn>
      <q-btn to="/search-car" unelevated color="secondary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="directions_car"/>
        <div>Changer ma voiture</div>
      </q-btn>
      <q-btn to="/economiser" unelevated color="fourth" class="q-btn--no-uppercase">
        <q-icon size="3em" name="star"/>
        <div>Economiser sur mes réparations</div>
      </q-btn>
      <q-btn to="/contact" unelevated color="six" class="q-btn--no-uppercase">
        <q-icon size="3em" name="phone"/>
        <div>Contacter mon assureur</div>
      </q-btn>
      <q-btn to="/cassebrique" unelevated color="fifth" class="q-btn--no-uppercase">
        <q-icon size="3em" name="games"/>
        <div>Se détendre en attendant ?</div>
      </q-btn>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageIndex',
    methods: {

    }

  }
</script>

<style scoped lang="stylus">
  .q-page
    margin-top 0

  h1
    line-height 1.1em
  h2
    margin-bottom 0
</style>
