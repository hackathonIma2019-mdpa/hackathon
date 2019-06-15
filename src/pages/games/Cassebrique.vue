<template>
  <q-page >
    <q-card>
      <q-card-actions align="center">
        <q-btn v-if="!game" @click="launchGame()">Prêt ? </q-btn>
      </q-card-actions>
      <q-card-section>
        <iframe v-if="game === true" src="statics/cassebrique/index.html"></iframe>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
  iframe{
    width: 340px;
    Height: 550px;
  }

  button{

  }
</style>

<script>
export default {
  name: 'Cassebrique',
  data : function(){
    return {
      game : false
    }
  },
  methods : {
    launchGame(){
      this.game = true;
    }
  }
}
</script>
