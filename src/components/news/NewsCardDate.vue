<template>
  <div class="newsDate">
    <div class="newsDate__left">
      <span class="newsDate__day">{{ date.day }}</span>
    </div>

    <div class="newsDate__right">
      <p class="newsDate__month">{{ date.month }}</p>
      <p class="newsDate__year">{{ date.year }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import moment from "moment";
import type { NewsDate } from "../../types/news.type";

interface NewsCardDateProps {
  timestamp: number;
}

const props = defineProps<NewsCardDateProps>();
const { timestamp } = toRefs(props);

const date = computed<NewsDate>(() => {
  const dateObj = moment.unix(timestamp.value).toObject();

  return {
    day: dateObj.date,
    month: moment(dateObj.months).format("MMMM"),
    year: dateObj.years,
  };
});
</script>

<style scoped>
.newsDate {
  display: flex;
  gap: 0.25rem;
  color: var(--color-text-grey);
}

.newsDate__day {
  font-size: 36px;
}

.newsDate__right {
  font-size: 15px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.15px;
}
</style>
