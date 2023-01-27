<template>
  <main>
    <div>
      <h1></h1>
      <MilkdownEditor v-model="content" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MilkdownEditor from "@/components/MilkdownEditor.vue";

const content = ref<string>("# Vue3 +  Milkdown");
</script>

<style>
@import "@/assets/font.css";
@import "@/assets/mdi.css";
</style>
