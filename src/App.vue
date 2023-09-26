<script setup lang="ts">
import Header from "./components/Header.vue";
import MainBody from "./components/MainBody.vue";
import MainFooter from "./components/MainFooter.vue";
import {store} from "../store.ts";

</script>

<template>
  <div :data-theme="store.darkTheme?'dark':'light'">
    <Header></Header>
    <MainBody></MainBody>
    <MainFooter></MainFooter>
  </div>
</template>

