<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Vue3</template>
    主にVue3 CompsitionAPIについて取り上げていく予定です。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>ライブラリ</template>
    Vue3で使える便利なライブラリについて取り上げていく予定です。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>エコシステム</template>
    主にVue公式プロジェクトである
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
      >Vue Router</a
    >, や新テストツールであるCypress、Vitestなどを追いかけていきます。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>ツール</template>
    開発体験を向上するツール(Volor)やビルド環境(Vite)、
    Node.jsなどのバックグラウンドの情報も取り上げる予定です。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>コミュニティ</template>
    ゆくゆくはコメントとかも残せるようにしていきたい。
  </WelcomeItem>
</template>
