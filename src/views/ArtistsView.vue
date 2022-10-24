<script setup lang="ts">
import ArtistCard from '@/components/ArtistCard.vue'
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'

const { title } = storeToRefs(useSidebarStore())
title.value = '歌手'
</script>

<template>
  <main class="p-8 overflow-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      <ArtistCard v-for="i in 10" :key="i" />
    </div>
  </main>
</template>
