<template>
  <div class="news">
    <ul class="news__list">
      <li v-for="news of newsData" class="news__item" :key="news.code">
        <news-card :news="news" />
      </li>
    </ul>

    <button v-if="!isLastPage" class="news__more-btn" @click="changePageHandler">
      Загрузить ещё
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from "vue";
import { newsApi } from "../../api/news.api";
import NewsCard from "./NewsCard.vue";
import type { INews } from "../../types/news.type";
import type { NewsResponse } from "../../types/responses.type";

const newsData = ref<INews[]>([]);
const currentPage = ref<number>(1);
const totalPages = ref<number | null>(null);

const isLastPage = computed<boolean>(() => currentPage.value === totalPages.value);

const fetchNewsHandler = async (page?: number) => {
  try {
    const response = await newsApi.getNews(page);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data: NewsResponse = await response.json();
    newsData.value.push(...data.items);
    totalPages.value = data.nav.total;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Some error");
    }
  }
};

const changePageHandler = () => {
  currentPage.value++;
};

onBeforeMount(() => {
  fetchNewsHandler();
});

watch(currentPage, () => {
  fetchNewsHandler(currentPage.value);
});
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
}

.news__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;
}

.news__item > div {
  height: 100%;
}

.news__item:last-child {
  grid-column-start: 2;
}

.news__more-btn {
  font-size: 20px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.2px;
  color: #002dbf;
  border-radius: 0.5rem;
  border: 1px solid #002dbf;
  padding: 1rem 2rem;
  margin: 4.5rem auto 0;
}
</style>
