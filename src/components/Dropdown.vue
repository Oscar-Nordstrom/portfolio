<script setup lang="ts">

import ButtonDefault from "./ButtonDefault.vue";

defineProps<{ labels: string[] }>()


</script>

<template>
  <div class="dropdown dropdown-hover dropdown-end">
    <label tabindex="0" class="btn bg-transparent border-0"><v-icon name="io-menu" scale="1.5"/></label>
    <div tabindex="0" class="dropdown-content z-[1] menu flex gap-2 items-start justify-start shadow">
      <li v-for="label in labels"><ButtonDefault :text=label></ButtonDefault></li>
    </div>
  </div>
</template>

<style scoped>

</style>