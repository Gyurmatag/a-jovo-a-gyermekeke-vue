<template>
  <div id="donateForms">
    <div class="flex flex-col space-y-3 items-center w-full justify-center">
      <div class="text-center text-3xl text-gray-800 font-bold pt-12">
        {{ $t('donate.title') }}
      </div>
      <div class="flex justify-center space-x-4 rounded-lg text-lg p-6" role="group">
        <button @click="switchDonateType('withWire')"
                class="p-4 border border-primary rounded-lg
                       hover:bg-mainbackground hover:text-primary"
                :class="[donateType === 'withWire' ? 'bg-mainbackground text-primary' : '']">
          {{ $t('donate.types.withWire') }}
        </button>
        <button @click="switchDonateType('withOnePercent')"
                class="p-4 border border-primary rounded-lg
                       hover:bg-mainbackground hover:text-primary"
                :class="[donateType === 'withOnePercent' ? 'bg-mainbackground text-primary' : '']">
          {{ $t('donate.types.withOnePercent') }}
        </button>
      </div>
      <div class="flex flex-col space-y-2 text-lg pb-8 h-80 md:h-60 donate-types-wrapper">
        <transition name="mode-fade" mode="out-in">
          <div v-if="donateType === 'withWire'" key="withWire" class="donate-type-wrapper">
            <donate-with-wire></donate-with-wire>
          </div>
          <div v-else key="withOnePercent" class="donate-type-wrapper">
            <donate-with-one-percent ></donate-with-one-percent>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DonateWithWire from '@/components/donate/DonateWithWire.vue';
import DonateWithOnePercent from '@/components/donate/DonateWithOnePercent.vue';

export default {
  name: 'DonateForms',

  components: {
    DonateWithWire,
    DonateWithOnePercent,
  },

  setup() {
    const donateType = ref('withWire');

    const switchDonateType = (type) => {
      donateType.value = type;
    };

    return {
      donateType,
      switchDonateType,
    };
  },
};
</script>

<style>
  .mode-fade-enter-active, .mode-fade-leave-active {
    transition: opacity .3s ease
  }

  .mode-fade-enter-from, .mode-fade-leave-to {
    opacity: 0
  }
</style>
