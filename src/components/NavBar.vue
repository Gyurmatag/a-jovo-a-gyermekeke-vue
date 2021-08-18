<template>
  <nav class="bg-mainbackground text-gray-400">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
            <router-link
              class="inline-block mr-4 p-1"
              to="/"
            >
              <img alt="A Jövő a Gyermekeké logó"
                   src="../assets/logo.png"
                   class="h-20"
              >
            </router-link>
        </div>
        <div class="flex items-center space-x-1">
          <router-link
            class="inline-block align-bottom p-2 mr-4 hover:text-primary"
            to="/news"
          >
            {{ $t('nav.news') }}
          </router-link>
          <router-link
            class="inline-block align-bottom p-2 mr-4 bg-green-600
                   text-white rounded-lg hover:bg-green-500"
            to="/donate"
          >
            {{ $t('nav.donate') }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
};
</script>
