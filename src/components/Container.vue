<template>
  <div class="container">
    Hola! {{clp}}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return { clp: this.$store.state.rates.CLP };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: lightgray;
  height: 100%;
}
</style>
