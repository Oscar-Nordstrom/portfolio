<script setup lang="ts">

import ImageBig from "./ImageBig.vue";
</script>

<template>
  <dvi class="flex flex-col justify-center items-center gap-60 w-[100vw] h-[90vh] bg-cust-blue-1">
    <div class="flex items-center justify-center gap-36 text-center">
      <div class="flex flex-col items-center gap-32">
        <h1 class="text-8xl">Hello I'm <span class="text-cust-blue-2">Oscar</span> <br> Game and Fullstack <br> Developer</h1>
        <button class="btn w-[10vw]">Contact</button>
      </div>
      <ImageBig></ImageBig>
    </div>
  </dvi>

</template>

<style scoped>

</style>