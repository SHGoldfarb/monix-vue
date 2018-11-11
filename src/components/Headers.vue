<template>
  <div class="headersRow">
    <div class="leftHeader column">{{leftRate}}</div>
    <div class="rightHeader column">{{rightRate}}</div>
  </div>
</template>

<script>
export default {
  name: "Headers",
  data() {
    return {
      leftRate: this.$store.state.leftRate,
      rightRate: this.$store.state.rightRate
    };
  },
  components: {}
};
</script>


<style scoped>
.headersRow {
  display: flex;
  height: 10%;
}
.column {
  flex: 1;
  padding: 0px 5px;
}

.leftHeader {
  text-align: right;
}

.rightHeader {
  text-align: left;
}
</style>
