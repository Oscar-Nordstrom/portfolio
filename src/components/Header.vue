<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import Swapper from "./Swapper.vue";
import {store} from "../../store.ts";

</script>

<template>
  <div className="flex justify-end items-center gap-4 w-[100vw] h-[7vh] px-4">
    <Swapper icon-on="io-sunny" icon-off="io-moon" :store-bool="store.darkTheme" @changed="store.switchTheme()"></Swapper>
    <Dropdown :props="[{label:'Home',route:'/'},{label:'About',route:'/about'},{label:'Skills',route:'/skills'},{label:'Contact',route:'/contact'}]"></Dropdown>
  </div>
</template>