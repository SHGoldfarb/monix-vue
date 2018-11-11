<template>
  <div class="container">
    <Headers></Headers>
    <Table></Table>
  </div>
</template>

<script>
import Headers from "./Headers.vue";
import Table from "./Table.vue";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    Headers,
    Table
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
