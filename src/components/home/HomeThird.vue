<template>
  <div class="my-8 px-4 w-full">
    <div class="text-3xl">
      {{ $t('homeThird.yearInNumbers') }}
    </div>
    <div class="flex flex-col md:flex-row pt-6
                space-y-12 md:space-y-0 space-x-0 md:space-x-44
                justify-center items-center bg-white text-center whitespace-nowrap">
      <div class="flex flex-col py-6 px-2 text-center md:text-left w-full
                  border-t-2 border-b-0 border-mainbackground
                  cursor-pointer hover:bg-gray-200"
           :class="[activeDataPoint === 0 ? 'bg-primary hover:bg-primary' : '']"
           @click="dataPointClick(0)">
      <div class="text-2xl lg:text-3xl font-bold">3,28 m HUF</div>
        <div class="mb-3">{{ $t('homeThird.incomeSum') }}</div>
      </div>
      <div class="flex flex-col py-6 px-2 text-center md:text-left w-full
                  border-t-2 border-b-0 border-mainbackground
                  cursor-pointer hover:bg-gray-200"
           :class="[activeDataPoint === 1 ? 'bg-primary hover:bg-primary' : '']"
           @click="dataPointClick(1)">
      <div class="text-2xl lg:text-3xl font-bold">3,38 m HUF</div>
        <div class="mb-3">{{ $t('homeThird.expenditures') }}</div>
      </div>
      <div class="flex flex-col py-6 px-2 text-center md:text-left w-full
                  border-t-2 border-b-0 border-mainbackground
                  cursor-pointer hover:bg-gray-200"
           :class="[activeDataPoint === 2 ? 'bg-primary hover:bg-primary' : '']"
           @click="dataPointClick(2)">
        <div class="text-2xl lg:text-3xl font-bold">11 + 10 db</div>
        <div class="mb-3">{{ $t('homeThird.courseAndCampCount') }}</div>
        <transition-expand>
          <div v-if="windowWidth <= mdWidth && activeDataPoint === 2"
               class="flex text-left whitespace-normal">
            <course-and-camp-count-card></course-and-camp-count-card>
          </div>
        </transition-expand>
      </div>
    </div>
    <transition-expand>
      <div class="bg-primary rounded-b-xl p-6" v-if="windowWidth > 768">
        <transition-expand>
          <div v-if="activeDataPoint === 1">
            <expenditures-card></expenditures-card>
          </div>
        </transition-expand>
        <transition-expand>
          <div v-if="activeDataPoint === 2" class="flex space-x-12 md:space-x-20">
            <course-and-camp-count-card></course-and-camp-count-card>
          </div>
        </transition-expand>
      </div>
    </transition-expand>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useWindowSize } from 'vue-window-size';
import TransitionExpand from '@/components/common/TransitionExpand.vue';
import ExpendituresCard from '@/components/home/expenses/ExpendituresCard.vue';
import CourseAndCampCountCard from '@/components/home/expenses/CourseAndCampCountCard.vue';

export default {
  name: 'HomeThird',

  components: {
    TransitionExpand,
    ExpendituresCard,
    CourseAndCampCountCard,
  },

  setup() {
    const activeDataPoint = ref(0);
    const { width } = useWindowSize();
    const mdWidth = ref(768);

    const dataPointClick = (dataPointNumber) => {
      activeDataPoint.value = dataPointNumber;
    };

    return {
      activeDataPoint,
      dataPointClick,
      windowWidth: width,
      mdWidth,
    };
  },
};
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}
</style>
