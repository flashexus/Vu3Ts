<template>
  <main>
    <div>
      <h1>Vite + Volorの開発体験について</h1>

      <video
        width="750"
        height="300"
        controls
        src="@/assets/video/vite_volor_demo.mp4"
      ></video>
      <MilkdownEditor v-model="content" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MilkdownEditor from "@/components/MilkdownEditor.vue";

const content = ref<string>(
  "文字で書いても分かりづらいと思ったので動画参照(´∀｀*)"
);
</script>

<style>
@import "@/assets/font.css";
@import "@/assets/mdi.css";
</style>
