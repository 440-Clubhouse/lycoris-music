<script setup lang="ts">
import { ref } from 'vue'
import AllInclusiveIcon from './assets/AllInclusiveIcon.vue'
import MenuOpenIcon from './assets/MenuOpenIcon.vue'
import PlayCircleIcon from './assets/PlayCircleIcon.vue'
import SkipNextIcon from './assets/SkipNextIcon.vue'
import SkipPreviousIcon from './assets/SkipPreviousIcon.vue'
import VolumeUpIcon from './assets/VolumeUpIcon.vue'

const progressValue = ref(50)

function printValue() {
  console.log(progressValue.value)
}
</script>

<template>
  <input class="fixed bottom-16 w-full z-[1031] range cursor-pointer" type="range" v-model="progressValue"
    @change="printValue" />
  <div class="bg-[rgb(2,117,255)] h-1 fixed bottom-16 z-[1032] cursor-pointer" :style="{ width: `${progressValue}%` }">
  </div>
  <div class="flex bg-gray-100 fixed-bottom justify-center items-center px-6 py-2">
    <div class="basis-1/4 flex items-center gap-3">
      <img class="w-12 h-12 rounded-md" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" />
      <div>
        <div class="w-max">
          <span class="text-gray-900 text-lg">歌曲</span>
          <span class="text-gray-500"> - 歌手</span>
        </div>
        <div class="text-sm text-gray-500 w-max">01:00 / 02:00</div>
      </div>
    </div>
    <div class="basis-1/2 flex gap-3 justify-center items-center">
      <SkipPreviousIcon />
      <PlayCircleIcon />
      <SkipNextIcon />
    </div>
    <div class="basis-1/4 flex gap-3 justify-end items-center">
      <AllInclusiveIcon />
      <MenuOpenIcon />
      <VolumeUpIcon />
    </div>
  </div>
</template>

<style scoped>
.range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.375rem;
}

.range::-webkit-slider-runnable-track {
  height: 0.25rem;
  background-color: rgb(243 244 246);
}
</style>
