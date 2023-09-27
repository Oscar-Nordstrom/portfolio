<script setup lang="ts">
import Header from "./components/Header.vue";
import MainFooter from "./components/MainFooter.vue";
import {store} from "../store.ts";

</script>

<template>
  <div :data-theme="store.darkTheme?'dark':'light'">
    <Header></Header>
      <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<style lang="css">
  .slide-enter-active,
  .slide-leave-active{
    transition: transform 0.5s;
  }
  .slide-enter-from{
    transform: translateX(-100%);
  }
  .slide-leave-to{
    transform: translateX(100%);
  }
</style>

