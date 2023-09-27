<script setup lang="ts">


defineProps<{ text:string, linkTo: string}>()
</script>

<template>
  <router-link :to="linkTo"><button className="btn border-0 font-bold">{{ text }}</button></router-link>
</template>

<style scoped>

</style>