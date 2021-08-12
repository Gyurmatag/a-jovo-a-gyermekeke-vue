<template>
  <header>
    <navbar />
  </header>
  <main class="flex-grow bg-gray-900">
    <router-view />
  </main>
</template>

<script>
import Navbar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
