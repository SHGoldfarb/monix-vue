<template>
  <div id="app">
    <Container></Container>
  </div>
</template>

<script>
import Container from "./components/Container.vue";

export default {
  name: "app",
  components: {
    Container
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
