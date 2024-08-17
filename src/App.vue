<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body class=" bg-zinc-900 w-screen h-screen text-white">
    <header class="w-screen">
      <div class="wrapper pl-4 lg:pl-16 m-0">
        <nav class="flex w-screen lg:pl-32 p-4 m-0 font-semibold gap-4 cursor-pointer ">
          <RouterLink to="/" class="hover:underline m-0">Home</RouterLink>
          <RouterLink to="/todo" class="hover:underline m-0">ToDo</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </body>

</template>

