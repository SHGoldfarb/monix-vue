<template>
  <div class="tableContainer">
    <div v-for="index in indexes" v-bind:key="index" class="row">{{index}}</div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return { indexes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  },
  components: {}
};
</script>


<style scoped>
.tableContainer {
  height: 90%;
  display: flex;
  flex-direction: column;
}

.row {
  flex: 1;
}
</style>
