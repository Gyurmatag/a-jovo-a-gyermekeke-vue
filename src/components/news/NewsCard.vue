<template>
  <div class="overflow-hidden shadow-lg rounded-lg h-auto m-auto p-4
              w-5/6 sm:w-3/5 lg:w-1/2 2xl:w-1/4
              bg-mainbackground hover:shadow-2xl">
      <img alt="news photo" :src="imageUrl" class="max-h-80 w-full object-cover"/>
      <div class="w-full">
        <div class="flex items-center mt-4 mb-4 text-sm text-gray-400">
          <svg class="opacity-75 mr-2" id="Capa_1" fill="currentColor"
               x="0px" y="0px" width="12" height="12" viewBox="0 0 97.16 97.16">
            <!-- eslint-disable-next-line max-len -->
            <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"/>
            <!-- eslint-disable-next-line max-len -->
            <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"/>
          </svg>
          <p class="leading-none">{{ createdAt.substring(0,10) }}  </p>
        </div>
        <p class="text-gray-200 text-xl font-medium mb-2">
          {{ title }}
        </p>
        <p v-if="!readMoreActivated" class="text-gray-400 font-light text-md whitespace-pre-line">
          {{ newsText.slice(0, 200) }} ...
          <span v-if="!readMoreActivated"
                @click="toggleReadMore"
                class="cursor-pointer text-primary">
            {{ $t('news.newsCard.more') }}
          </span>
        </p>
        <p v-if="readMoreActivated" class="text-gray-400 font-light text-md whitespace-pre-line">
          {{ newsText }}
          <span v-if="readMoreActivated"
                @click="toggleReadMore"
                class="cursor-pointer text-primary">
            {{ $t('news.newsCard.less') }}
          </span>
        </p>
        <div class="flex flex-wrap justify-starts items-center mt-4
        border-t-2 border-gray-500 pt-5">
          <div v-for="hashtag in hashtags"
               :key="hashtag"
               class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-primary rounded-2xl">
              #{{ hashtag }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import { ref } from 'vue';

export default {
  name: 'NewsCard',

  props: {
    createdAt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    newsText: {
      type: String,
      required: true,
    },
    hashtags: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const readMoreActivated = ref(false);

    const toggleReadMore = () => {
      readMoreActivated.value = !readMoreActivated.value;
    };

    return {
      readMoreActivated,
      toggleReadMore,
    };
  },
};
</script>
