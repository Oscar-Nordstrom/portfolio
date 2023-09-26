<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <Button className="btn border-0 font-bold">{{ text }}</Button>
</template>

<style scoped>

</style>