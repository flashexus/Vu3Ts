<script lang="ts">
import { RouterView } from "vue-router";

export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<template>
  <v-container>
    <v-card>
      <v-layout color="black">
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar color="grey-darken-4" prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>Vue3旅日記</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn variant="text" icon="mdi-magnify"></v-btn>

          <v-btn variant="text" icon="mdi-filter"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="bottom" temporary>
          <v-list :items="items"></v-list>
        </v-navigation-drawer>
      </v-layout>
      <RouterView />
    </v-card>
  </v-container>
</template>
