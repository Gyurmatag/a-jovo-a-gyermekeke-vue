<template>
  <div class="my-8 px-4 w-full">
    <div class="text-3xl">
      {{ $t('homeThird.yearInNumbers') }}
    </div>
    <div class="flex flex-col md:flex-row pt-6
                space-y-12 md:space-y-0 space-x-0 md:space-x-44
                justify-center items-center bg-white text-center whitespace-nowrap">
      <div class="flex flex-col py-6 px-2 text-center md:text-left md:min-h-full w-full
                  border-t-2 border-b-2 md:border-b-0 border-mainbackground
                  cursor-pointer hover:bg-gray-200"
           :class="[activeDataPoint === 0 ? 'bg-primary hover:bg-primary' : '']"
           @click="dataPointClick(0)">
        <div class="text-2xl lg:text-3xl font-bold">6,7 m HUF</div>
        {{ $t('homeThird.incomeSum') }}
      </div>
      <div class="flex flex-col py-6 px-2 text-center md:text-left md:min-h-full w-full
                  border-t-2 border-b-2 md:border-b-0 border-mainbackground
                  cursor-pointer hover:bg-gray-200"
           :class="[activeDataPoint === 1 ? 'bg-primary hover:bg-primary' : '']"
           @click="dataPointClick(1)">
        <div class="text-2xl lg:text-3xl font-bold">5,6 m HUF</div>
        {{ $t('homeThird.expenditures') }}
      </div>
      <div class="flex flex-col py-6 px-2 text-center md:text-left md:min-h-full w-full
                  border-t-2 border-b-2 md:border-b-0 border-mainbackground
                  cursor-pointer hover:bg-gray-200"
           :class="[activeDataPoint === 2 ? 'bg-primary hover:bg-primary' : '']"
           @click="dataPointClick(2)">
        <div class="text-2xl lg:text-3xl font-bold">11 + 10 db</div>
        {{ $t('homeThird.courseAndCampCount') }}
      </div>
    </div>
    <div class="bg-primary rounded-b-xl p-6">
      <transition-expand>
        <div v-if="activeDataPoint === 0">
          <p>
            <span class="font-bold">Átutalásos adományok:</span>
            <span class="font-mono">
          5 250 600 Ft (Ebből célzott adomány: 4 750 600 Ft)
        </span>
          </p>
          <p>
            <span class="font-bold">Kézpénzes adományok: </span>
            <span class="font-mono">882 200 Ft</span>
          </p>
          <p>
            <span class="font-bold">Alvállalkozóként végzett oktatási tevékenység bevétele: </span>
            <span class="font-mono">570 000 Ft</span>
          </p>
        </div>
      </transition-expand>
      <transition-expand>
        <div v-if="activeDataPoint === 1">
          <p>
            <span class="font-bold">Lénárt-gömb készlet: </span>
            <span class="font-mono">95 960 Ft</span>
          </p>
          <p>
            <span class="font-bold">Robotikai eszközök: </span>
            <span class="font-mono">51 740 Ft</span>
          </p>
          <p>
            <span class="font-bold">Dekoráció: </span>
            <span class="font-mono">18 615 Ft</span>
          </p>
          <p>
            <span class="font-bold">Jutalomkönyvek: </span>
            <span class="font-mono">404 000 Ft</span>
          </p>
          <p>
            <span class="font-bold">Közjegyzői díj (pályázatok): </span>
            <span class="font-mono">28 350 Ft</span>
          </p>
          <p>
            <span class="font-bold">Táborok költségei: </span>
            <span class="font-mono">968 557 Ft</span>
          </p>
          <p>
            <span class="font-bold">Állatok világnapja, egészséghét, versenyek kiadásai: </span>
            <span class="font-mono">55 090 Ft</span>
          </p>
          <p>
            <span class="font-bold">Írószer, nyomtató, postaköltség: </span>
            <span class="font-mono">88 490 Ft</span>
          </p>
          <p>
            <span class="font-bold">Tanterem átalakítás: </span>
            <span class="font-mono">67 141 Ft</span>
          </p>
          <p>
            <span class="font-bold">Előfizetések, szakkönyvek: </span>
            <span class="font-mono">61 491 Ft</span>
          </p>
          <p>
            <span class="font-bold">Bér: </span>
            <span class="font-mono">3 444 000 Ft</span>
          </p>
          <p>
            <span class="font-bold">Járulék: </span>
            <span class="font-mono">311 000 Ft</span>
          </p>
        </div>
      </transition-expand>
      <transition-expand>
        <div v-if="activeDataPoint === 2" class="flex space-x-12 md:space-x-20">
          <div class="flex flex-col divide-y divide-gray-800">
            <div>Kurzusok</div>
            <div>
              Kurzusok
              <p>
                <span class="font-bold">Angol: </span>
                <span class="font-mono">4 db</span>
              </p>
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
                <span class="font-mono">1 db</span>
              </p>
              <p>
                <span class="font-bold">Tenisz: </span>
                <span class="font-mono">1 db</span>
              </p>
            </div>
            <div class="mt-6">
              <router-link to="/news"
                           class="p-2 bg-mainbackground text-gray-200
                     rounded-lg text-sm hover:text-primary">
                {{ $t('homeThird.detailsInNews') }}
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
        </div>
      </transition-expand>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TransitionExpand from '@/components/common/TransitionExpand.vue';

export default {
  name: 'HomeThird',

  components: {
    TransitionExpand,
  },

  setup() {
    const activeDataPoint = ref(0);

    const dataPointClick = (dataPointNumber) => {
      activeDataPoint.value = dataPointNumber;
    };

    return {
      activeDataPoint,
      dataPointClick,
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
