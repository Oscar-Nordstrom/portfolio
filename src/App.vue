<script setup lang="ts">
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import MainFooter from "./components/MainFooter.vue";
import {store} from "../store.ts";

</script>

<template>
  <div :data-theme="store.darkTheme?'dark':'light'">
    <Header></Header>
    <router-view></router-view>
    <MainFooter></MainFooter>
  </div>
</template>

