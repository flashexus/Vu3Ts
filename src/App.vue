<script lang="ts">
import { RouterView } from "vue-router";

export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Home",
        value: "foo",
      },
      {
        title: "About",
        value: "bar",
      },
      {
        title: "Wiki",
        value: "fizz",
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
    <v-card color="grey-darken-4">
      <v-layout full-height>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>Vue3旅日記</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            href="https://vuetifyjs.com/en/"
            icon="mdi-vuetify"
            color="light-blue"
          ></v-btn>

          <v-btn
            variant="text"
            href="https://ja.vuejs.org/api/composition-api-setup.html"
            icon="mdi-vuejs"
            color="teal"
          ></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="bottom" temporary>
          <v-list :items="items"></v-list>
          <!-- <v-list>
              <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
              >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list> -->
        </v-navigation-drawer>
      </v-layout>
      <RouterView />
    </v-card>
  </v-container>
</template>
