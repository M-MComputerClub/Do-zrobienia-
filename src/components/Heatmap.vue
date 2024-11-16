<template>
  <div class="flex flex-col items-center p-4">
    <div>
      <button @click="addDoneHabbit()">addddd</button>
      <br />
      <button @click="nextday()">d111111</button>
      <!-- <button @click="console.log(rows)">d2222222</button> -->
      <!-- days[-1].value += 10 -->
    </div>
    <div class="flex flex-col items-center p-4">
      <div class="flex">
        <div v-for="row in rows" :key="row[0]">
          <div
            v-for="cell in row"
            :key="cell"
            class="w-6 h-6 m-1 rounded-sm"
            :style="{ backgroundColor: getColor(cell.value) }"
          >
            <!-- {{ cell.value }} -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: this.generateHeatmapData(), // Replace with your data source
    };
  },
  methods: {
    generateHeatmapData() {
      return Array.from({ length: 49 }, (_, j) => ({
        value: Math.random() * 100,
      }));
    },
    getColor(value) {
      if (value > 75) return "#00FF00";
      if (value > 50) return "#006500";
      if (value > 25) return "#002C00";
      // if (value < 25) return "#001C00";
      return "#001000";
    },
    nextday() {
      // this.days[0].shift();
      this.days.shift();
      this.days.push({ value: 0 });
      // this.rows = rows();
      // this.rows[0].shift();
      console.log(this.rows);
      console.log(this.days);
      // this.tooltip = `Value: ${week.value.toFixed(2)}`;
    },
    addDoneHabbit() {
      this.days[this.days.length - 1].value += 33;
    },
  },
  computed: {
    rows() {
      let rows_t = [];
      let lista = this.days;
      // for (let index = 1; index <= 35; index++) {
      //   lista.push(index);
      // }
      // console.log(lista);
      // let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < lista.length; i += 7) {
        rows_t.push(lista.slice(i, i + 7));
      }
      // console.log(rows_t);
      return rows_t;
    },
  },
};
</script>

<style scoped>
.tooltip {
  pointer-events: none;
}
</style>
