<script lang="ts" setup>
defineProps<{
  article: PropsArticleParam;
}>();

type PropsArticleParam = {
  title: string;
  subtitle: string;
  discription: string;
  icon_path: string;
  name: string;
};
</script>
<script lang="ts">
export default {
  data: () => ({
    show: false,
  }),
};
</script>
<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      v-bind:src="require(article.icon_path)"
      height="200px"
      width="200px"
      cover
    ></v-img>

    <v-card-title
      ><router-link :to="{ name: article.name }">{{
        article.title
      }}</router-link>
    </v-card-title>

    <v-card-subtitle> {{ article.subtitle }} </v-card-subtitle>

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

        <v-card-text> {{ article.discription }} </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
