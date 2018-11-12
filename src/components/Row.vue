<template>
  <div class="row">
    <div class="column left">
        {{leftNumber}}
    </div>
    <div class="column right">
        {{rightNumber}}
    </div>
  </div>
</template>

<script>
const toMoneyString = number => {
  const roundedNumber = Math.round(number * 1000) / 1000;
  return "$" + roundedNumber.toLocaleString("es-CL");
};

export default {
  name: "Row",
  props: ["index"],
  computed: {
    leftNumber() {
      const leftBase = this.$store.state.currentMultiplier;
      return toMoneyString(leftBase * this.index);
    },
    rightNumber() {
      const { currentMultiplier, leftRate, rightRate } = this.$store.state;
      const leftRateNumber = this.$store.state.rates[leftRate];
      const rightRateNumber = this.$store.state.rates[rightRate];
      const rightBase = currentMultiplier * rightRateNumber / leftRateNumber;
      return toMoneyString(rightBase * this.index);
    }
  },
  components: {}
};
</script>


<style scoped>
@import "../variables.css";

.row {
  display: flex;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
}

.column {
  flex: 1;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  border-style: dotted;
  font-size: larger;
}

.left {
  flex-flow: row-reverse;
  border-width: 0px 0px 0px 0px;
}

.right {
  flex-flow: row;
  border-width: 0px 0px 0px 0px;
}

.textContainer {
  margin: auto 0px;
}
</style>
