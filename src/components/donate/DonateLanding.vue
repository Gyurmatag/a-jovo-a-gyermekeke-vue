<template>
    <div class="donate-landing flex flex-col w-full h-screen content-center justify-center">
      <div class="m-auto">
        <div class="text-center text-3xl text-white mb-6">
          {{ $t('donate.donateHeader') }}
        </div>
        <div
          class="m-auto w-2/4 p-3 text-center bg-yellow-300 text-l
                 text-gray-900 rounded-lg hover:bg-yellow-400 cursor-pointer"
          @click="goTo('donateForms')"
        >
          {{ $t('donate.donateAction') }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DonateLanding',

  setup() {
    const goTo = (id) => {
      const el = document.getElementById(id);

      // TODO: ezt később lehetne State használatával
      // majd módosítani úgy, hogy ref-fel hivatkozzon ne ID-val
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      goTo,
    };
  },
};
</script>

<style scoped>
  .donate-landing {
    background: linear-gradient(
      0deg, var(--color-main-background), rgba(1, 26, 52, 0.8)),url('https://res.cloudinary.com/gyurmatag/image/upload/v1629735455/A%20J%C3%B6v%C5%91%20a%20Gyermekek%C3%A9/donate_picture.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.8;
  }
</style>
