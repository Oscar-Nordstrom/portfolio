<script setup lang="ts">
import Dropdown from "./Dropdown.vue";

</script>

<template>
  <div className="flex justify-end px-10 py-2 w-[50vw] h-10">
    <Dropdown :labels="['Home','About','skills', 'Contact']"></Dropdown>
  </div>
</template>