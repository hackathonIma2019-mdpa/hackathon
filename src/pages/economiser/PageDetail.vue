<template>
  <div id="economiser-page-detail">
    <div style="display: flex;justify-content: center">
      <h6>Economiser sur mes réparations</h6>
    </div>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered padding>
        <q-item-label header>Sélectionner votre pièce</q-item-label>
        <q-item clickable v-ripple>
          <q-item-section top thumbnail class="q-ml-none">
            <img src="../../assets/econimiser/aile-avant-skoda-564b2edcdd78b-200x200.jpg">
          </q-item-section>

          <q-item-section>
            <q-item-label>AILE AVANT SKODA OCTAVIA 2</q-item-label>
            <q-item-label caption>Aile avant pour SKODA OCTAVIA de 2008 à 2013 1Z0821106C et ...</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <h5 class="text-primary">79 &euro;</h5>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/economiser-selectionner">
          <q-item-section top thumbnail class="q-ml-none">
            <img src="../../assets/econimiser/armature-avant-s-5628fc31e0dad-200x200.jpg">
          </q-item-section>

          <q-item-section>
            <q-item-label>Armature
              avant SKODA OCTAVIA 2</q-item-label>
            <q-item-label caption>Masque avant pour
              SKODA OCTAVIA 2 tous modèles
              1Z0805591J ...</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <h5 class="text-primary">95 &euro;</h5>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section top thumbnail class="q-ml-none">
            <img src="../../assets/econimiser/bouclier-avant-s-564b315b4a428-200x200.jpg">
          </q-item-section>

          <q-item-section>
            <q-item-label>Bouclier
              avant Skoda Octavia 2</q-item-label>
            <q-item-label caption> Pare chocs avant pour
              SKODA OCTAVIA 2 de 2009 à ...</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <h5 class="text-primary">119 &euro;</h5>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section top thumbnail class="q-ml-none">
            <img src="../../assets/econimiser/capot-moteur-sko-5628f2c45117d-200x200.jpg">
          </q-item-section>

          <q-item-section>
            <q-item-label>Capot
              moteur SKODA OCTAVIA 2</q-item-label>
            <q-item-label caption> Capot moteur pour SKODA OCTAVIA
              Convient à tous les ... </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <h5 class="text-primary">199 &euro;</h5>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section top thumbnail class="q-ml-none">
            <img src="../../assets/econimiser/grille-de-caland-564b353b43679-200x200.jpg">
          </q-item-section>

          <q-item-section>
            <q-item-label>Grille
              de Calandre Skoda Octavia 2</q-item-label>
            <q-item-label caption>  Calandre pour SKODA OCTAVIA de 2009
              à 2013  ... </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <h5 class="text-primary">87 &euro;</h5>
          </q-item-section>
        </q-item>
      </q-list>
      <back-button route="/economiser"></back-button>
    </div>
  </div>
</template>
<script>
  import BackButton from '../../components/BackButton'
  export default {
    name: 'EconomiserDetail',
    components:{BackButton}
  }
</script>
