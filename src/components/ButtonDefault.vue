<script setup lang="ts">


defineProps<{ text:string, linkTo: string}>()
</script>

<template>
  <router-link :to="linkTo"><Button className="btn border-0 font-bold">{{ text }}</Button></router-link>
</template>

<style scoped>

</style>