<script setup lang="ts">

defineProps<{ onChange: Function}>()

function update(event: any, fnChange: Function){
  fnChange(event.target.value);
}
function clear(){
  let input = (<HTMLInputElement>document.getElementById("searchInput"));
  input.value = "";
}
</script>

<template>
    <div class="flex justify-end items-center w-[70vw] lg:w-[30vw] h-[5vh] border-4 rounded-full">
      <div class="px-5 ">
        <v-icon class="cursor-pointer" @click="clear" name="bi-x-lg"></v-icon>
      </div>
      <input @input="update($event, onChange)" type="text" id="searchInput" class="w-full h-full border-0 bg-transparent focus:border-0 focus:outline-0 focus:outline-none"/>
      <div class="px-5">
        <v-icon name="io-search-sharp"></v-icon>
      </div>
    </div>
</template>

<style scoped>

</style>