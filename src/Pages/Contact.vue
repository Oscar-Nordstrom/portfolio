<script setup lang="ts">
import ImageBig from "../components/ImageBig.vue";
</script>

<template>
  <div class="flex justify-center w-[100vw] h-[88vh]">
    <div class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 text-center">
      <ImageBig></ImageBig>
      <div class="flex flex-col  items-center gap-10">
        <h1 class="text-[10vw] md:text-[7vw] lg:text-[5vw]">Contact <span class="text-cust-blue-2">Me</span></h1>
        <div class="flex flex-col gap-3">
          <div class="flex gap-3">
            <v-icon name="md-drivefilerenameoutline"></v-icon>
            <h1>Oscar Nordström</h1>
          </div>
          <div class="flex gap-3 ">
            <v-icon name="fa-phone-alt"></v-icon>
            <a href="tel:0708518060" target="_blank">070-851 80 60</a>
          </div>
          <div class="flex gap-3 ">
            <v-icon name="md-alternateemail"></v-icon>
            <a href="mailto:oscar.nordstrom2000@gmail.com" target="_blank">oscar.nordstrom2000@gmail.com</a>
          </div>
          <div class="flex gap-3 ">
            <v-icon name="md-alternateemail"></v-icon>
            <a href="mailto:oscar.nordstrom@se.experis.com" target="_blank">oscar.nordstrom@se.experis.com</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>