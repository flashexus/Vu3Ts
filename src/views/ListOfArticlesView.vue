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
  <!-- Todo CardArticleコンポーネントを作成する-->
  <!-- 謎：なぜかProps渡しすると'@/assets/images/***/.jpeg で名前解決できない' -->
  <v-container>
    <CardArticle
      :article="{
        title: 'test',
        subtitle: 'test',
        discription: 'test',
        icon_path: 'src/assets/images/vite_image.jpeg',
        name: 'article1',
      }"
    ></CardArticle>
    <v-card class="mx-auto" max-width="344">
      <v-img
        v-bind:src="require('@/assets/images/vite_image.jpeg')"
        height="200px"
        width="200px"
        cover
      ></v-img>

      <v-card-title
        ><router-link :to="{ name: 'article1' }">Vite開発体験</router-link>
      </v-card-title>

      <v-card-subtitle> 〜Volarを添えて〜 </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> 概要 </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text> Vite+Volorにおける開発体験について </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>
