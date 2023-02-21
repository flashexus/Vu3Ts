<template>
  <v-container bg-color="grey-darken-4">
    <div>
      <h1>Vite + Volarの開発体験について</h1>

      <video
        width="750"
        height="300"
        controls
        src="@/assets/video/vite_volor_demo.mp4"
      ></video>
      <MilkdownEditor v-model="content" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MilkdownEditor from "@/components/MilkdownEditor.vue";

//const test = "## 文字で書いても分かりづらいと思ったので動画参照してください(´∀｀*) \n ";
//const test2 = "## test \n";
//const test3 = "## すごい \n";
// const content = ref<string>(test + test2 + test3);

const content = ref<string>(
  "## 文字で書いても分かりづらいと思ったので動画参照してください(´∀｀*)"
);
</script>

<style>
@import "@/assets/font.css";
@import "@/assets/mdi.css";
</style>
