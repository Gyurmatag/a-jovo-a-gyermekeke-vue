<template>
  <div class="flex space-y-12 flex-col">
    <div class="flex justify-center">
      <home-first />
    </div>
    <div class="flex justify-center bg-primary">
      <home-second />
    </div>
    <div class="container max-w-6xl mx-auto">
      <home-third />
    </div>
  </div>
</template>

<script>
import HomeFirst from '@/components/home/HomeFirst.vue';
import HomeSecond from '@/components/home/HomeSecond.vue';
import HomeThird from '@/components/home/HomeThird.vue';

export default {
  name: 'Home',
  components: {
    HomeThird,
    HomeSecond,
    HomeFirst,
  },
};
</script>
