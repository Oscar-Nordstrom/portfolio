<script setup lang="ts">
import Header from "./components/Header.vue";
import MainBody from "./components/MainBody.vue";
import MainFooter from "./components/MainFooter.vue";

</script>

<template>
    <img src="../public/Rectangle.svg" className="w-[50vw] absolute">
  <div className="flex justify-end bg-cust-blue-1">
    <Header></Header>
  </div>
  <MainBody></MainBody>
  <MainFooter></MainFooter>
</template>

