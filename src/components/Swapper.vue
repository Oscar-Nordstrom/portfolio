<script setup lang="ts">

defineProps<{ iconOn:string, iconOff:string, storeBool: boolean}>()

</script>

<template>
    <label class="swap swap-rotate z-0">

      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" :checked="!storeBool" @change="$emit('changed')"/>

      <!-- volume on icon -->
      <v-icon class="swap-on fill-current" :name="iconOn" scale="1.5"/>
      <!-- volume off icon -->
      <v-icon class="swap-off fill-current" :name="iconOff" scale="1.5"/>

    </label>

</template>

<style scoped>

</style>