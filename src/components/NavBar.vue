<template>
  <nav class="flex items-center justify-between flex-wrap bg-mainbackground text-primary p-6">
    <div class="text-md">
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
    <div>
      <div class="text-md">
        <router-link
          class="inline-block align-bottom p-2 mr-4"
          to="/documents"
        >
          {{ $t('nav.documents') }}
        </router-link>
        <router-link
          class="inline-block align-bottom p-2 mr-4"
          to="/contacts"
        >
          {{ $t('nav.contacts') }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
};
</script>
