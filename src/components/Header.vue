<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import ThemeSwap from "./ThemeSwap.vue";

</script>

<template>
  <div className="flex justify-end items-center gap-4 w-[100vw] h-[5vh] p-2">
    <ThemeSwap></ThemeSwap>
    <Dropdown :labels="['Home','About','skills', 'Contact']"></Dropdown>
  </div>
</template>