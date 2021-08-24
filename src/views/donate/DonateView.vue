<template>
  <donate-landing />
  <donate-forms />
</template>

<script>
import DonateLanding from '@/components/donate/DonateLanding.vue';
import DonateForms from '@/components/donate/DonateForms.vue';

export default {
  name: 'DonateView',

  components: { DonateForms, DonateLanding },
};
</script>
