<script lang="ts" setup>
import { RouterLink } from "vue-router";
import CardArticle from "../components/CardArticle.vue";
</script>
<script lang="ts">
export default {
  data: () => ({
    show: false,
  }),
};
</script>
<template>
  <!-- Todo CardArticleコンポーネントを並べてリストを形成する-->
  <!-- 謎：なぜかProps渡しすると'@/assets/images/***/.jpeg で名前解決できない' -->
  <v-container>
    <CardArticle
      :article="{
        title: 'Vite開発体験',
        subtitle: '〜Volarを添えて〜',
        discription: 'test',
        icon_path: 'src/assets/images/vite_image.jpeg',
        name: 'article1',
      }"
    ></CardArticle>
  </v-container>
</template>
