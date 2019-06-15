<template>
  <div>
    <div style="display: flex;justify-content: center">
      <h6>Economiser sur mes réparations</h6>
    </div>
    <q-card class="my-card">
      <q-img src="https://i.ebayimg.com/images/g/-9wAAOSwk-danqQy/s-l1600.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Armature avant Peugeot 3008</div>
          <div class="text-h5">90 &euro;</div>
        </div>
      </q-img>
      <q-card-section>
        <p>Armature avant pour Peugeot 3008
          </p>
        <p>
          MOTEUR ESSENCE 2.0 16V / DIESEL 2.0 HDI
        </p>
      </q-card-section>
      <q-card-actions>
        <q-btn type="a"
               href="https://www.ebay.fr/i/323121875661?chn=ps&norover=1&mkevt=1&mkrid=709-134431-41854-0&mkcid=2&itemid=323121875661&targetid=492523716158&device=c&adtype=pla&googleloc=9056126&poi=&campaignid=1669940630&adgroupid=64137313149&rlsatarget=pla-492523716158&abcId=1139516&merchantid=116448310&norover=1&mkevt=1&mkrid=709-134431-41854-0&mkcid=2&itemid=323121875661&targetid=492523716158&device=c&adtype=pla&googleloc=9056126&poi=&campaignid=1669940630&adgroupid=64137313149&rlsatarget=pla-492523716158&abcId=1139516&merchantid=116448310&gclid=Cj0KCQjwrpLoBRD_ARIsAJd0BIVlJLj_dhPsblx0zv-qEojZmOhJrSiFrBsL5DoqXhLc0pEJUwvJvBAaAjMnEALw_wcB"
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
