<template>
  <infinite-scroll
    apiUrl="/feed/news"
    collectionName="news"
    v-slot="{ item }">
      <news-card
        :created-at="item.createdAt"
        :title="item.title"
        :image-url="item.imageUrl"
        :news-text="item.newsText"
        :hashtags="item.hashtags">
      </news-card>
  </infinite-scroll>
</template>

<script>
import NewsCard from '@/components/news/NewsCard.vue';
import InfiniteScroll from '@/components/common/InfiniteScroll.vue';

export default {
  name: 'NewsList',

  components: {
    InfiniteScroll,
    NewsCard,
  },
};
</script>
