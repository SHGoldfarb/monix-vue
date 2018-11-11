<template>
  <div class="tableContainer">
    <Row 
      v-if="!openedIndex"
      v-for="index in indexes" 
      v-bind:key="index" 
      v-bind:index="index"
      v-on:click.native="() => open(index)" 
      class="primaryRow"
    ></Row>
    <Row 
      v-if="openedIndex"
      v-bind:key="openedIndex" 
      v-bind:index="openedIndex"
      v-on:click.native="close" 
      class="primaryRow"
    ></Row>
    <Row 
      v-if="openedIndex"
      v-for="index in indexes.slice(0, -1)" 
      v-bind:key="openedIndex + index / 10" 
      v-bind:index="openedIndex + index / 10"
      v-on:click.native="close" 
      class="secondaryRow"
    ></Row>
    <Row 
      v-if="openedIndex"
      v-bind:key="openedIndex + 1" 
      v-bind:index="openedIndex + 1"
      v-on:click.native="close" 
      class="primaryRow"
    ></Row>
  </div>
</template>

<script>
import Row from "./Row.vue";
export default {
  name: "Table",
  data() {
    return { indexes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], openedIndex: null };
  },
  components: { Row },
  methods: {
    open(index) {
      this.openedIndex = index;
    },
    close() {
      this.openedIndex = null;
    }
  }
};
</script>


<style scoped>
.tableContainer {
  flex: 10;
  display: flex;
  flex-direction: column;
}

.primaryRow {
  flex: 4;
}

.secondaryRow {
  flex: 3;
}
</style>
