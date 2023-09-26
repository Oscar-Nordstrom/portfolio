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
    <div tabindex="0" class="dropdown-content menu">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-2">
        <ButtonDefault v-for="prop in props" :text="prop.label" :linkTo="prop.route"></ButtonDefault>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>