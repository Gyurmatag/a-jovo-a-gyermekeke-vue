<template>
  <infinite-scroll
    apiUrl="/application/applications"
    collectionName="applications"
    v-slot="{ item }">
    <application-card
      :title="item.title"
      :description="item.description"
      :support-amount="item.supportAmount"
      :image-urls="item.imageUrls"
      :implementation-start="item.implementationStart"
      :implementation-end="item.implementationEnd">
    </application-card>
  </infinite-scroll>
</template>

<script>
import InfiniteScroll from '@/components/common/InfiniteScroll.vue';
import ApplicationCard from '@/components/applications/ApplicationCard.vue';

export default {
  name: 'ApplicationList',

  components: {
    InfiniteScroll,
    ApplicationCard,
  },
};
</script>
