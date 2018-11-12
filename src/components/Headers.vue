<template>
  <div class="headersRow">
    <div class="leftHeader column">
      <select v-bind:value="leftRate" v-on:change="onLeftRateChange">
        <option 
          v-for="rate in rates" 
          v-bind:value="rate"
          v-bind:key="rate"
          v-bind:disabled="rate === rightRate"
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
          v-bind:disabled="rate === leftRate"
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
      return this.$store.state.leftRate;
    },
    rightRate() {
      return this.$store.state.rightRate;
    },
    rates() {
      const ret = Object.keys(this.$store.state.rates).sort(
        (a, b) => (a > b ? 1 : 0)
      );
      return ret;
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
@import "../variables.css";
.headersRow {
  display: flex;
  flex: 1;
}
.column {
  flex: 4;
  padding: 0px 5px;
  margin: auto 0px;
}

.leftHeader {
  text-align: right;
}

.rightHeader {
  text-align: left;
}

select {
  border: 0px;
  background-color: transparent;
  font: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 0px;
  color: var(--main-font-color);
}

.swapButton {
  cursor: pointer;
  flex: 1;
  margin: auto 0px;
}
</style>
