<script setup lang="ts">
import AlbumCard from '@/components/AlbumCard.vue'
</script>

<template>
  <main class="p-8 overflow-auto mb-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      <AlbumCard v-for="_i in 10" />
    </div>
  </main>
</template>
