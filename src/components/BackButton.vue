<template>
  <div class="div-back-button">
    <q-btn color="primary" icon="arrow_back" @click="goto" class="button" label="Précédent"></q-btn>
  </div>
</template>
<script>
  export default {
    name: 'BackButton',
    props: ['route'],
    methods: {
      goto() {
        this.$router.push(this.route);
      }
    }
  }
</script>
<style scoped>
  .div-back-button {
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em
  }

  .button {
    width: 100%;
  }
</style>
