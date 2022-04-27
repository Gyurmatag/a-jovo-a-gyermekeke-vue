<template>
  <div class="overflow-hidden shadow-lg rounded-lg h-auto m-auto p-4
              w-5/6 sm:w-3/5 lg:w-1/2 2xl:w-1/4
              bg-mainbackground hover:shadow-2xl">
    <img alt="application photo" :src="imageUrls[0]" class="max-h-80 w-full object-cover"/>
    <div class="w-full">
      <div class="flex items-center mt-4 mb-4 text-sm text-gray-400">
        <svg class="opacity-75 mr-3" id="Capa_1" fill="currentColor"
             x="0px" y="0px" width="14" height="13" viewBox="0 0 97.16 97.16">
          <!-- eslint-disable-next-line max-len -->
          <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"/>
          <!-- eslint-disable-next-line max-len -->
          <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"/>
        </svg>
        <p class="leading-none">
          {{ implementationStart.substring(0,10) }}  - {{ implementationEnd.substring(0,10) }}
        </p>
      </div>
      <div class="flex items-center mt-4 mb-4 text-sm text-gray-400">
        <img alt="Money ikon"
             src="../../assets/svgs/money.svg"
             class="h-4 mr-3"
        >
        <p class="leading-none">
          {{ Intl.NumberFormat().format(supportAmount) }} HUF
        </p>
      </div>
      <p class="text-gray-200 text-xl font-medium mb-2">
        {{ title }}
      </p>
      <p class="text-gray-400 font-light text-md whitespace-pre-line" v-html="description">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    supportAmount: {
      type: Number,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    implementationStart: {
      type: String,
      required: true,
    },
    implementationEnd: {
      type: String,
      required: true,
    },
  },
};
</script>
