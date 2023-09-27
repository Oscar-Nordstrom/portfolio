<script setup lang="ts">


defineProps<{ text:string, linkTo: string}>()
</script>

<template>
  <a :href="linkTo" target="_blank"><button className="btn border-0 font-bold">{{ text }}</button></a>
</template>

<style scoped>

</style>