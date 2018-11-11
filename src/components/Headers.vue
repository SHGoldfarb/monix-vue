<template>
  <div class="headersRow">
    <div class="leftHeader column">
      <select v-bind:value="leftRate" v-on:change="onLeftRateChange">
        <option 
          v-for="rate in rates" 
          v-bind:value="rate"
          v-bind:key="rate"
        >
          {{rate}}
        </option>
      </select>
    </div>
    <div class="swapButton" v-on:click="swap">&lt;--&gt;</div>
    <div class="rightHeader column">
      <select v-bind:value="rightRate" v-on:change="onRightRateChange">
        <option 
          v-for="rate in rates" 
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
  computed: {
    leftRate() {
      console.log("computing left", this.$store.state.leftRate);
      return this.$store.state.leftRate;
    },
    rightRate() {
      console.log("computing right", this.$store.state.rightRate);
      return this.$store.state.rightRate;
    },
    rates() {
      return Object.keys(this.$store.state.rates);
    }
  },
  components: {},
  watch: {
    leftRate(newRate) {
      this.$store.commit("changeLeftRate", newRate);
    },
    rightRate(newRate) {
      this.$store.commit("changeRightRate", newRate);
    }
  },
  methods: {
    swap() {
      this.$store.commit("swapRates");
    },
    onLeftRateChange(event) {
      this.$store.commit("changeLeftRate", event.target.value);
    },
    onRightRateChange(event) {
      this.$store.commit("changeRightRate", event.target.value);
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
