<template>
    <div class="flex flex-col items-center p-4">
      <div class="flex">
        <div v-for="(day, index) in days" :key="index" class="relative flex flex-col items-center">
          <div
            v-for="(week, weekIndex) in day"
            :key="weekIndex"
            class="w-6 h-6 m-1 rounded-sm"
            :style="{ backgroundColor: getColor(week.value) }"
            @mouseover="showTooltip(week)"
            @mouseleave="hideTooltip"
          ></div>
          <div
            v-if="tooltip"
            class="absolute bg-gray-700 text-white text-xs rounded py-1 px-2"
            :style="{ top: tooltipPosition.top + 'px', left: tooltipPosition.left + 'px' }"
          >
            {{ tooltip }}
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
        tooltip: null,
        tooltipPosition: { top: 0, left: 0 },
      };
    },
    methods: {
      generateHeatmapData() {
        // Sample data generation: an array of weeks with each week containing days
        // Replace this with actual data fetching logic
        return Array.from({ length: 7 }, (_, i) => (
          Array.from({ length: 7 }, (_, j) => ({
            value: Math.random() * 100 // Random value for demonstration
          }))
        ));
      },
      getColor(value) {
        // Simple gradient logic: adjust as needed
        if (value > 75) return '#FF4C4C'; // Red
        if (value > 50) return '#FF9F4C'; // Orange
        if (value > 25) return '#FFEC4C'; // Yellow
        return '#4CFF4C'; // Green
      },
      showTooltip(week) {
        this.tooltip = `Value: ${week.value.toFixed(2)}`;
      },
      hideTooltip() {
        this.tooltip = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .tooltip {
    pointer-events: none;
  }
  </style>
  