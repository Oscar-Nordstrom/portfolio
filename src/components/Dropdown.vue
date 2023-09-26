<script setup lang="ts">

import ButtonDefault from "./ButtonDefault.vue";

defineProps<{ labels: string[] }>()


</script>

<template>
  <div class="dropdown dropdown-hover dropdown-end">
    <label tabindex="0" class="btn bg-transparent border-0"><v-icon name="bi-list" scale="1.5"/></label>
    <div tabindex="0" class="dropdown-content menu flex gap-2">
      <ButtonDefault v-for="label in labels" :text=label></ButtonDefault>
    </div>
  </div>
</template>

<style scoped>

</style>