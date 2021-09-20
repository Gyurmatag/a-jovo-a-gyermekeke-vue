<template>
  <div class="flex flex-col md:flex-row max-w-6xl my-8 px-4
              justify-center items-center bg-white text-center">
    <div class="w-full pb-4 md:w-1/2 text-2xl text-left uppercase font-bold">
      {{ $t('homeSecond.firstRowText') }}
    </div>
    <div class="w-full md:w-3/4 text-left text-xl">
      {{ $t('homeSecond.secondRowText') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSecond',
};
</script>
