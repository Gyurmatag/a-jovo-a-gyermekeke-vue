<template>
  <div class="scrolling-component" ref="scrollComponent">
    <div v-if="isInitialRequestLoading" class="flex flex-col mt-6 items-center">
      <list-loading-animation></list-loading-animation>
    </div>

    <div class="flex flex-col space-y-10 my-8"
         v-for="item in items"
         :key="item.id">
      <slot :item="item"></slot>
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
import ListLoadingAnimation from '@/components/common/ListLoadingAnimation.vue';

export default {
  name: 'InfiniteScroll',

  components: {
    ListLoadingAnimation,
  },

  props: {
    apiUrl: {
      type: String,
      required: true,
    },
    collectionName: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const items = ref([]);
    const scrollComponent = ref(null);
    const currentPage = ref(0);
    const totalPages = ref();
    const limit = 5;
    const isInitialRequestLoading = ref(true);
    const isLoading = ref(false);
    const hasFetchedAllData = computed(() => currentPage.value
      === totalPages.value && !isLoading.value);

    const fetchItems = async () => {
      currentPage.value += 1;
      try {
        const response = await api().get(`${props.apiUrl}?limit=${limit}&page=${currentPage.value}`);
        items.value = [
          ...items.value,
          ...response.data[props.collectionName],
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
        await fetchItems();
        isLoading.value = false;
      }
    };

    onBeforeMount(async () => {
      await fetchItems();
      isInitialRequestLoading.value = false;
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      items,
      scrollComponent,
      isInitialRequestLoading,
      isLoading,
      hasFetchedAllData,
    };
  },
};
</script>
