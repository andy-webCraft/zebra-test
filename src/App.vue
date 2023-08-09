<template>
  <layout-main>
    <template #hero>
      <layout-page-hero title="Новости" :bg-image="HeroImg" />
    </template>

    <news-widget />
  </layout-main>
</template>

<script setup lang="ts">
import LayoutMain from "./components/layout/LayoutMain.vue";
import LayoutPageHero from "./components/layout/LayoutPageHero.vue";
import NewsWidget from "./components/news/NewsWidget.vue";
import HeroImg from "./assets/img/hero-background.jpg";
</script>

<style scoped></style>
