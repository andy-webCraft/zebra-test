<template>
  <section class="hero" :style="{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }">
    <div class="_container">
      <div class="hero__wrapper">
        <h2 v-if="title" class="hero__title">{{ title }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface PageHeroProps {
  title?: string;
  bgImage?: string;
}

const props = defineProps<PageHeroProps>();
const { title, bgImage } = toRefs(props);
</script>

<style scoped>
.hero {
  width: 100%;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero__wrapper {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
}

.hero__title {
  color: #17171a;
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.4px;
}
</style>
