<script lang="ts" setup>
import CardArticle from "../components/CardArticle.vue";
import type { PropsArticleParam } from "../components/CardArticle.vue";

const articles: Array<PropsArticleParam> = [
  {
    title: "Vite開発体験",
    subtitle: "〜Volarを添えて〜",
    discription: "test",
    icon_path: "src/assets/images/vite_image.jpeg",
    name: "article1",
  },
];
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
    <CardArticle :article="articles[0]"></CardArticle>
    <CardArticle :article="articles[0]"></CardArticle>
    <CardArticle :article="articles[0]"></CardArticle>
    <CardArticle :article="articles[0]"></CardArticle>
    <CardArticle :article="articles[0]"></CardArticle>
    <CardArticle :article="articles[0]"></CardArticle>
  </v-container>
</template>
