<template>
  <div 
    class="tableContainer" 
    v-touch:swipe.left="swipedLeft"
    v-touch:swipe.right="swipedRight"
  >
    <Row 
      v-if="!openedIndex"
      v-for="index in indexes" 
      v-bind:key="index" 
      v-bind:index="index"
      v-on:click.native="() => open(index)" 
      class="primaryRow row"
      role="button"
    ></Row>
    <Row 
      v-if="openedIndex"
      v-bind:key="openedIndex" 
      v-bind:index="openedIndex"
      v-on:click.native="close" 
      class="primaryRow row"
      role="button"
    ></Row>
    <Row 
      v-if="openedIndex"
      v-for="index in indexes.slice(0, -1)" 
      v-bind:key="openedIndex + index / 10" 
      v-bind:index="openedIndex + index / 10"
      v-on:click.native="close" 
      class="secondaryRow row"
      role="button"
    ></Row>
    <Row 
      v-if="openedIndex"
      v-bind:key="openedIndex + 1" 
      v-bind:index="openedIndex + 1"
      v-on:click.native="close" 
      class="primaryRow row"
      role="button"
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
    },
    swipedLeft() {
      this.$store.commit("incrementMultiplier");
    },
    swipedRight() {
      this.$store.commit("decrementMultiplier");
    }
  }
};
</script>


<style scoped>
@import "../variables.css";

.tableContainer {
  flex: 10;
  display: flex;
  flex-direction: column;
}

.primaryRow {
  flex: 10;
  background-color: var(--sec-bg-color);
  color: var(--sec-font-color);
}

.secondaryRow {
  flex: 9;
}

.row {
  cursor: pointer;
}
</style>
