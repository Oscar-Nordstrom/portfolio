<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import ThemeSwap from "./ThemeSwap.vue";

</script>

<template>
  <div className="flex justify-end items-center gap-4 w-[100vw] h-[7vh] px-4">
    <ThemeSwap></ThemeSwap>
    <Dropdown :props="[{label:'Home',route:'/'},{label:'About',route:'/about'},{label:'Skills',route:'/skills'},{label:'Contact',route:'/contact'}]"></Dropdown>
  </div>
</template>