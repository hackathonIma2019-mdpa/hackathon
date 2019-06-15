<template>
  <q-page class="home column justify-start items-center q-pa-md">
    <h1 class="text-secondary text-center">Bienvenue sur IMA'ssister !</h1>
    <h2 class="text-center">Votre dépanneur arrive. <br />Profitez utilement de votre attente ci-dessous.</h2>
    <div class="row justify-around">
      <q-btn to="/car-damage" unelevated  color="primary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="monetization_on"/>
        <div>Estimer les dégats sur mon véhicule</div>
      </q-btn>
      <q-btn to="/search-car" unelevated color="secondary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="directions_car"/>
        <div>Changer votre voiture</div>
      </q-btn>
      <q-btn to="/mobility" unelevated color="tertiary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="directions_bike"/>
        <div>Comment me déplacer en attendant</div>
      </q-btn>
      <q-btn to="/economiser" unelevated color="fourth" class="q-btn--no-uppercase">
        <q-icon size="3em" name="star"/>
        <div>Economiser sur mes réparations</div>
      </q-btn>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageIndex'
  }
</script>
