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
@import "../variables.css";

.container {
  background-color: var(--main-bg-color);
  color: var(--main-font-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 600;
}
</style>
