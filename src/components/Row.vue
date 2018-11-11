<template>
  <div class="row">
    <div class="column left">{{leftNumber}}</div>
    <div class="column right">{{rightNumber}}</div>
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
.row {
  display: flex;
}

.column {
  flex: 1;
  padding: 0px 5px;
}

.left {
  text-align: right;
}

.right {
  text-align: left;
}
</style>
