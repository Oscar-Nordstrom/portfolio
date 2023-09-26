<script setup lang="ts">
defineProps<{ icon:string, text:string}>()

function toKebab(text): string{
  return text
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
}

</script>

<template>
  <div class="flex gap-2">
    <v-icon :name="toKebab(icon)"></v-icon>
    <h3>{{text}}</h3>
  </div>
</template>

<style scoped>

</style>