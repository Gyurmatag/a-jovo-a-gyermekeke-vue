<template>
  <div id="donateForms">
    <div class="flex flex-col space-y-3 items-center w-full justify-center">
      <div class="text-center text-3xl text-gray-800 font-bold pt-12">
        {{ $t('donate.title') }}
      </div>
      <div class="flex justify-center space-x-4 rounded-lg text-lg p-8" role="group">
        <button class="p-4 border border-primary rounded-lg
                       hover:bg-mainbackground hover:text-primary">
          {{ $t('donate.types.withWire') }}
        </button>
        <button class="p-4 border border-primary rounded-lg
                       hover:bg-mainbackground hover:text-primary">
          {{ $t('donate.types.withOnePercent') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonateForms',
};
</script>
