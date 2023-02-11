<template>
  <div class="flex flex-col divide-y divide-gray-800">
    <div>Kurzusok</div>
    <div>
      Kurzusok
      <p>
        <span class="font-bold">Német: </span>
        <span class="font-mono">3 db</span>
      </p>
      <p>
        <span class="font-bold">Japán: </span>
        <span class="font-mono">2 db</span>
      </p>
      <p>
        <span class="font-bold">Foci: </span>
        <span class="font-mono">2 db</span>
      </p>
      <p>
        <span class="font-bold">Úszás: </span>
        <span class="font-mono">2 db</span>
      </p>
      <p>
        <span class="font-bold">Tenisz: </span>
        <span class="font-mono">1 db</span>
      </p>
      <p>
        <span class="font-bold">Szorobán: </span>
        <span class="font-mono">1 db</span>
      </p>
      <div class="h-2"></div>
      <router-link to="/news">
        <button class="rounded-md bg-mainbackground text-white hover:text-primary p-2">
          {{ $t('homeThird.detailsInNews') }}
        </button>
      </router-link>
    </div>
  </div>
  <div class="flex flex-col divide-y divide-gray-800">
    <div>Táborok</div>
    <div>
      <p>
        <span class="font-bold">Kreatív</span>
      </p>
      <p>
        <span class="font-bold">Szivacskézilabda</span>
      </p>
      <p>
        <span class="font-bold">Robotika táborok</span>
      </p>
      <p>
        <span class="font-bold">"Happy English"</span>
      </p>
      <p>
        <span class="font-bold">"Állatok világa"</span>
      </p>
      <p>
        <span class="font-bold">Túratáborok</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseAndCampCountCard',
};
</script>
