<template>
  <div>
    <div style="display: flex;justify-content: center">
      <h6>Economiser sur mes réparations</h6>
    </div>
    <q-card class="my-card">
      <q-img src="../../assets/econimiser/armature-avant-s-5628fc31e0dad-200x200.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Armature avant SKODA OCTAVIA 2</div>
          <div class="text-h5">95 &euro;</div>
        </div>
      </q-img>
      <q-card-section>
        <p>Armature avant pour SKODA OCTAVIA 2
          Convient aux modèles :</p>
        <ul>
          <li>berline sortie d' usine de Juin 2004 jusque Janvier 2013</li>
          <li> break sortie d' usine de Janvier 2005 jusque Janvier 2013</li>
          <li>Combi Scout 4X4 de Décembre 2006 jusque Janvier 2013</li>
          <li>remplace référence oem constructeur : 1Z0805591J</li>
          <li>Convient également aux modèles RS</li>
        </ul>
      </q-card-section>
      <q-card-actions>
        <q-btn type="a"
               href="https://www.piecesautoservices.fr/pieces-carrosserie/skoda/skoda-octavia-2-de-2008-a-2013/armature-avant-skoda-octavia-2"
               flat>Acheter sur le site de notre partenaire
        </q-btn>
      </q-card-actions>
    </q-card>
    <back-button route="/economiser-list"></back-button>
  </div>
</template>
<script>
  import BackButton from '../../components/BackButton'
  export default {
    name: 'EconomiserSelectionner',
    components: { BackButton },
    methods: {
      open(){
        open('  https://www.piecesautoservices.fr/pieces-carrosserie/skoda/skoda-octavia-2-de-2008-a-2013/armature-avant-skoda-octavia-2', '_blank')
      }
    }
  }
</script>
<style>

</style>
