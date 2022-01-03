<template>
  <div class="flex flex-col md:flex-row max-w-6xl py-6 space-y-12 md:space-x-44 md:space-y-0
              my-8 px-4 justify-center items-center bg-white text-center">
    <div class="flex flex-col py-6 text-center md:text-left
                border-t-2 border-b-2 border-mainbackground">
      <div class="text-4xl font-bold">6,7 m HUF</div>
      {{ $t('homeThird.incomeSum') }}
    </div>
    <div class="flex flex-col py-6 text-center md:text-left
                border-t-2 border-b-2 border-mainbackground">
      <div class="text-4xl font-bold">5,6 m HUF</div>
      {{ $t('homeThird.expenditures') }}
    </div>
    <div class="flex flex-col py-6 text-center md:text-left
                border-t-2 border-b-2 border-mainbackground">
      <div class="text-4xl font-bold">11 db</div>
      {{ $t('homeThird.courseCount') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeThird',
};
</script>
