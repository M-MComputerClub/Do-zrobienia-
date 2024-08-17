<script>
import TheWelcome from '../components/TheWelcome.vue'
import heatmap from '../components/Heatmap.vue'

export default {
  components: {
    heatmap,
  },
};
</script>

<template>
  <header>
    <h1 class=" text-7xl pl-32">Dzień dobry</h1>
    <heatmap />
  </header>
  <main>

  </main>
  <footer class="flex justify-around fixed bottom-5 left-0 right-0 items-center">
      <div class="size-10 bg-zinc-500 items-center flex justify-center rounded-full">h</div>
      <button class="size-12 bg-zinc-500 rounded-full text-2xl" @click="">+</button>
      <div class="size-10 bg-zinc-500 items-center flex justify-center rounded-full">j</div>
    </footer>
</template>
