<template>
  <div class="flex flex-col md:flex-row max-w-6xl my-8 px-4
              justify-center items-center bg-white text-center">
    <div class="w-full md:w-1/2 p-4 text-xl text-left font-bold uppercase">
      <div class="rounded-lg p-1 text-mainbackground bg-primary">
        {{ $t('title.long') }}
      </div>
      <div>
        {{ $t('homeFirst.firstRowText') }}
        <span class="text-ekecolor">
           {{ $t('homeFirst.secondRowText') }}
        </span>
        {{ $t('homeFirst.thirdRowText') }}
      </div>
    </div>
    <img alt="main photo"
         src="https://res.cloudinary.com/gyurmatag/image/upload/v1634059360/A%20J%C3%B6v%C5%91%20a%20Gyermekek%C3%A9/tabla_gyerek.jpg"
         class="w-full md:w-1/2 rounded-lg"/>
  </div>
</template>

<script>
export default {
  name: 'HomeFirst',
};
</script>
