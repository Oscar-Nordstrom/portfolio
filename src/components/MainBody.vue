<script setup lang="ts">

import ImageBig from "./ImageBig.vue";
import ButtonDefault from "./ButtonDefault.vue";
</script>

<template>
  <dvi class="flex justify-center w-[100vw] h-[90vh]">
    <div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-32 text-center">
      <div class="flex flex-col items-center gap-10 lg:gap-32">
        <h1 class="text-[10vw] md:text-[7vw] lg:text-[5vw]">Hello I'm <span class="text-cust-blue-2">Oscar</span> <br> Game and Fullstack <br> Developer</h1>
        <ButtonDefault text="Contact"></ButtonDefault>
      </div>
      <ImageBig></ImageBig>
    </div>
  </dvi>

</template>

<style scoped>

</style>