<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <Button className="btn bg-transparent hover:bg-transparent border-0 text-cust-blue-5 hover:text-cust-blue-2 font-bold">{{ text }}</Button>
</template>

<style scoped>

</style>