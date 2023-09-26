<script setup lang="ts">

import ImageBig from "../components/ImageBig.vue";
import ButtonDefault from "../components/ButtonDefault.vue";
</script>

<template>
  <div class="flex justify-center w-[100vw] h-[90vh]">
    <div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-32 text-center">
      <div class="flex flex-col items-center gap-10 lg:gap-32">
        <h1 class="text-[10vw] md:text-[7vw] lg:text-[5vw]">Hello I'm <span class="text-cust-blue-2">Oscar</span> <br> Game and Fullstack <br> Developer</h1>
        <router-link to="/contact"><ButtonDefault text="Contact"></ButtonDefault></router-link>
      </div>
      <ImageBig></ImageBig>
    </div>
  </div>
</template>

<style scoped>

</style>