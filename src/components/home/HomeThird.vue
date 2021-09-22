<template>
  <div class="flex flex-col md:flex-row max-w-6xl py-6 space-y-12 md:space-x-80 md:space-y-0
              my-8 px-4 justify-center items-center bg-white text-center">
    <div class="flex flex-col py-6 text-center md:text-left
                border-t-2 border-b-2 border-mainbackground">
      <div class="text-4xl font-bold">8M HUF</div>
      {{ $t('homeThird.investmentSum') }}
    </div>
    <div class="flex flex-col py-6 text-center md:text-left
                border-t-2 border-b-2 border-mainbackground">
      <div class="text-4xl font-bold">3M HUF</div>
      {{ $t('homeThird.annualBudget') }}
    </div>
    <div class="flex flex-col py-6 text-center md:text-left
                border-t-2 border-b-2 border-mainbackground">
      <div class="text-4xl font-bold">5</div>
      {{ $t('homeThird.allProjectCount') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeThird',
};
</script>
