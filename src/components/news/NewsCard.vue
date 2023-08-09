<template>
  <div class="newsCard">
    <div v-if="news.image" class="newsCard__img-wrap">
      <img :src="news.image" class="newsCard__img" alt="news-card-img" />
    </div>

    <div class="newsCard__content">
      <div class="newsCard__date">
        <news-card-date :timestamp="news.date" />
      </div>

      <a :href="news.link" class="newsCard__title _link">{{ news.name }}</a>

      <p class="newsCard__description">
        {{ news.previewText }}
      </p>

      <div class="newsCard__tags">
        <span class="newsCard__tag">
          {{ news.type.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import NewsCardDate from "./NewsCardDate.vue";
import type { INews } from "../../types/news.type";

interface NewsCardProps {
  news: INews;
}

const props = defineProps<NewsCardProps>();
const { news } = toRefs(props);
</script>

<style scoped>
.newsCard {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid var(--color-brend-primary);
  position: relative;
}

.newsCard__img-wrap {
  padding-bottom: 250px;
}

.newsCard__img {
  width: calc(100% + 2px);
  height: 250px;
  border-radius: 1rem 1rem 0px 0px;
  position: absolute;
  top: -2px;
  left: -1px;
}

.newsCard__content {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 2rem;
}

.newsCard__title {
  display: inline-block;
  font-size: 22px;
  line-height: 120%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.newsCard__description {
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.2px;
  margin-bottom: 2.5rem;
}

.newsCard__tags {
  margin-top: auto;
}

.newsCard__tag {
  font-size: 14px;
  line-height: 140%;
  background: var(--background-light);
  border-radius: 360px;
  padding: 0.25rem 1rem;
}
</style>
