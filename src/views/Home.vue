<template>
  <div class="home">
    <img alt="A Jövő a Gyermekeké logó" src="../assets/logo.jpg">
    <Main/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Main,
  },
};
</script>
