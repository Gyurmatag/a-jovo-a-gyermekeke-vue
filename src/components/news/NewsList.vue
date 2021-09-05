<template>
  <div class="flex flex-col space-y-10 my-8">
    <news-card></news-card>
    <news-card></news-card>
    <news-card></news-card>
  </div>
</template>

<script>
import NewsCard from '@/components/news/NewsCard.vue';

export default {
  name: 'NewsList',

  components: {
    NewsCard,
  },
};
</script>
