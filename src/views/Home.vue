<template>
  <header>
    <h1 class="md:text-7xl text-3xl pl-4 md:pl-32">{{ greeting }}</h1>
    <h2 class="md:text-4xl text-1xl pl-4 md:pl-32 text-zinc-300">
      {{ dateMessage }}
    </h2>
  </header>
  <main>
    <heatmap />
  </main>
  <footer>
    <NavBar />
  </footer>
</template>

<script setup>
import Heatmap from "../components/Heatmap.vue";
import NavBar from "../components/NavBar.vue";
import { computed } from "vue";

const getCurrentGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {
    return "Dzień dobry";
  } else if (hour >= 18 && hour < 24) {
    return "Dobry wieczór";
  } else {
    return "Dobranoc";
  }
};

const getDateMessage = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDate();
  const month = now.toLocaleString("pl-PL", { month: "long" });

  if (hour >= 6 && hour < 24) {
    return `Dziś jest ${day} ${month}`;
  } else {
    const tomorrow = new Date(now);
    tomorrow.setDate(day + 1);
    const nextDay = tomorrow.getDate();
    const nextMonth = tomorrow.toLocaleString("pl-PL", { month: "long" });
    return `Już jest ${nextDay} ${nextMonth}, pora iść spać 🌛`;
  }
};

const rows = computed(() => {});
const greeting = computed(() => getCurrentGreeting());
const dateMessage = computed(() => getDateMessage());
</script>
