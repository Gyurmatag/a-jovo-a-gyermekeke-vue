<template>
  <div class="scrolling-component" ref="scrollComponent">
    <div v-if="isInitialRequestLoading" class="flex flex-col mt-6 items-center">
      <list-loading-animation></list-loading-animation>
    </div>
    <div class="flex flex-col space-y-10 my-8"
         v-for="newsItem in news"
         :key="newsItem.id">
      <news-card
        :created-at="newsItem.createdAt"
        :title="newsItem.title"
        :image-url="newsItem.imageUrl"
        :news-text="newsItem.newsText"
        :hashtags="newsItem.hashtags">
      </news-card>
    </div>
  </div>
  <div v-if="isLoading" class="flex flex-col my-6 items-center">
    <list-loading-animation></list-loading-animation>
  </div>
</template>

<script>
import {
  ref, computed, onBeforeMount, onUnmounted, onMounted,
} from 'vue';

import api from '@/service/api';
import NewsCard from '@/components/news/NewsCard.vue';
import ListLoadingAnimation from '@/components/common/ListLoadingAnimation.vue';

export default {
  name: 'NewsList',

  components: {
    NewsCard,
    ListLoadingAnimation,
  },

  setup() {
    const news = ref([]);
    const scrollComponent = ref(null);
    const currentPage = ref(0);
    const totalPages = ref();
    const limit = 5;
    const isInitialRequestLoading = ref(true);
    const isLoading = ref(false);
    const hasFetchedAllData = computed(() => currentPage.value
      === totalPages.value && !isLoading.value);

    const fetchNews = async () => {
      currentPage.value += 1;
      try {
        const response = await api().get(`/feed/news?limit=${limit}&page=${currentPage.value}`);
        news.value = [
          ...news.value,
          ...response.data.news,
        ];
        totalPages.value = Math.ceil(response.data.totalItems / limit);
      } catch (err) {
        // TODO: error kezelés
      }
    };

    const handleScroll = async () => {
      const element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        if (hasFetchedAllData.value || isLoading.value) {
          return;
        }
        isLoading.value = true;
        await fetchNews();
        isLoading.value = false;
      }
    };

    onBeforeMount(async () => {
      await fetchNews();
      isInitialRequestLoading.value = false;
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      news,
      scrollComponent,
      isInitialRequestLoading,
      isLoading,
      hasFetchedAllData,
    };
  },
};
</script>
