<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';
import SingerList from '../components/SingerList.vue';

const { title } = storeToRefs(useSidebarStore())
title.value = '歌手'
</script>

<template>
  <main class="w-screen m-8">
    <div>
      <SingerList/>
    </div>
  </main>
</template>


<!-- class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8" -->