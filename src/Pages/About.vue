<script setup lang="ts">

import ImageBig from "../components/ImageBig.vue";
import LinkButton from "../components/LinkButton.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center w-[100wv] h-[88vh]">
    <div class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 text-center max-w-[90vw]">
      <ImageBig></ImageBig>
      <div class="flex flex-col  items-center gap-5">
        <h1 class="text-[10vw] md:text-[7vw] lg:text-[5vw]">About <span class="text-cust-blue-2">Me</span></h1>
        <div class="flex flex-col items-start w-[100%]">
          <div class="flex flex-col gap-2 items-start">
            <h2 class="text-2xl font-bold">Experience</h2>
            <div class="flex items-center gap-2">
              <img src="../assets/Roxtec.png" class="w-[7vw] sm:w-[5vw] lg:w-[2vw]" alt="Roxtec logo"/>
              <div class="flex flex-col lg:flex-row lg:gap-2">
                <h1 class="font-bold">Software Developer - Roxtec</h1>
                <h1>Oct 2024 - Now</h1>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <img src="../assets/experis.jpg" class="w-[7vw] sm:w-[5vw] lg:w-[2vw]" alt="Roxtec logo"/>
              <div class="flex flex-col lg:flex-row lg:gap-2">
                <h1 class="font-bold">Fullstack Developer - Experis</h1>
                <h1>Jul 2023 - Oct 2024</h1>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2 items-start">
            <h2 class="text-2xl font-bold">Education</h2>
            <div class="flex items-center gap-2">
              <img src="../assets/noroff.jpg" class="w-[7vw] sm:w-[5vw] lg:w-[2vw]" alt="Noroff logo"/>
              <div class="flex flex-col lg:flex-row lg:gap-2">
                <h1 class="font-bold">.NET Fullstack Developer - Noroff</h1>
                <h1>Jul 2023 - Sep 2023</h1>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <img src="../assets/bth.jpg" class="w-[7vw] sm:w-[5vw] lg:w-[2vw]" alt="BTH logo"/>
              <div class="flex flex-col lg:flex-row lg:gap-2">
                <h1 class="font-bold">Game Programming - BTH</h1>
                <h1>Aug 2020 - Jun 2023</h1>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <img src="../assets/bth.jpg" class="w-[7vw] sm:w-[5vw] lg:w-[2vw]" alt="BTH logo"/>
              <div class="flex flex-col lg:flex-row lg:gap-2">
                <h1 class="font-bold">Technical Preparatory - BTH</h1>
                <h1>Aug 2019 - Jun 2020</h1>
              </div>
            </div>
          </div>
        </div>
        <LinkButton  text="More" link-to="https://www.linkedin.com/in/oscar-nordstrom2000/"></LinkButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>