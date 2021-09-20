<template>
  <div class="flex justify-center">
    <home-first />
  </div>
  <div class="flex justify-center">
    <home-second />
  </div>
</template>

<script>
import HomeFirst from '@/components/home/HomeFirst.vue';
import HomeSecond from '@/components/home/HomeSecond.vue';

export default {
  name: 'Home',
  components: {
    HomeSecond,
    HomeFirst,
  },
};
</script>
