<template>
  <header>
    <navbar />
  </header>
  <main class="flex-grow">
    <router-view />
  </main>
  <footer>
    <footer-bar />
  </footer>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    FooterBar,
  },
};
</script>
