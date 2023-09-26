<script setup lang="ts">

import ButtonDefault from "./ButtonDefault.vue";

interface prop{
  label: string,
  route: string,
}

defineProps<{ props: prop[]}>()


</script>

<template>
  <div class="dropdown dropdown-hover dropdown-end">
    <label tabindex="0" class="btn bg-transparent border-0"><v-icon name="bi-list" scale="1.5"/></label>
    <div tabindex="0" class="dropdown-content menu flex gap-2">
      <router-link  v-for="prop in props" v-bind:to="prop.route"><ButtonDefault :text=prop.label></ButtonDefault></router-link>
    </div>
  </div>
</template>

<style scoped>

</style>