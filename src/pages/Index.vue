<template>
  <q-page class="home column justify-start items-center q-pa-md">
    <h1 class="text-secondary text-center">Bienvenue sur IMA'ssister !</h1>
    <h2 class="text-center">Votre dépanneur arrive. <br />Profitez utilement de votre attente ci-dessous.</h2>
    <div class="row justify-around">
      <q-btn to="/car-damage" unelevated  color="primary" class="q-btn--no-uppercase">
        <q-icon size="3em" name="mdi-car-limousine"/>
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
      <q-btn to="/contact" unelevated color="six" class="q-btn--no-uppercase">
        <q-icon size="3em" name="phone"/>
        <div>Contacter mon assureur</div>
      </q-btn>
      <q-btn to="/cassebrique" unelevated color="fifth" class="q-btn--no-uppercase">
        <q-icon size="3em" name="games"/>
        <div>Se détendre en attendant ?</div>
      </q-btn>
    </div>
    <button @click="test">test</button>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageIndex',
    methods: {
      test() {
        // Voyons si le navigateur supporte les notifications
        if (!('Notification' in window)) {
          alert('Ce navigateur ne supporte pas les notifications desktop');
        }

        // Voyons si l'utilisateur est OK pour recevoir des notifications
        else if (Notification.permission === 'granted') {
          // Si c'est ok, créons une notification
          var notification = new Notification('Salut toi !');
        }

        // Sinon, nous avons besoin de la permission de l'utilisateur
        // Note : Chrome n'implémente pas la propriété statique permission
        // Donc, nous devons vérifier s'il n'y a pas 'denied' à la place de 'default'
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {

            // Quelque soit la réponse de l'utilisateur, nous nous assurons de stocker cette information
            if (!('permission' in Notification)) {
              Notification.permission = permission;
            }

            // Si l'utilisateur est OK, on crée une notification
            if (permission === 'granted') {
              var notification = new Notification('Salut toi !');
            }
          });
        }
      }
    }

  }
</script>
