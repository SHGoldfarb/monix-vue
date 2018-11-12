<template>
  <div id="app">
    <Container></Container>
  </div>
</template>

<script>
import Container from "./components/Container.vue";

const key = "rates";

export default {
  name: "app",
  components: {
    Container
  },
  created: async function() {
    const saved = localStorage.getItem(key);
    let rates;
    if (saved) {
      rates = JSON.parse(saved);
      this.$store.commit("setRates", rates);
    }
    const response = await fetch("https://api.exchangeratesapi.io/latest");
    if (response.status === 200) {
      const json = await response.json();
      rates = json.rates;
      localStorage.setItem(key, JSON.stringify(rates));
      this.$store.commit("setRates", rates);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}
</style>
