<template>
  <div class="headersRow">
    <div class="leftHeader column">
      <select v-model="leftRate">
        <option 
          v-for="rate in rates.filter(rate => rate !== rightRate)" 
          v-bind:value="rate"
          v-bind:key="rate"
        >
          {{rate}}
        </option>
      </select>
    </div>
    <div class="rightHeader column">
      <select v-model="rightRate">
        <option 
          v-for="rate in rates.filter(rate => rate !== leftRate)" 
          v-bind:value="rate"
          v-bind:key="rate"
        >
          {{rate}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headers",
  data() {
    return {
      leftRate: this.$store.state.leftRate,
      rightRate: this.$store.state.rightRate,
      rates: Object.keys(this.$store.state.rates)
    };
  },
  components: {},
  watch: {
    leftRate(newRate) {
      this.$store.commit("changeLeftRate", newRate);
    },
    rightRate(newRate) {
      this.$store.commit("changeRightRate", newRate);
    }
  }
};
</script>


<style scoped>
.headersRow {
  display: flex;
  flex: 1;
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
