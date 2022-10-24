<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import AlbumIcon from './assets/AlbumIcon.vue'
import MicIcon from './assets/MicIcon.vue'
import MusicNoteIcon from './assets/MusicNoteIcon.vue'

const { isExpanded } = storeToRefs(useSidebarStore())
</script>

<template>
  <div class="sm:py-4 transition-all"
    :class="isExpanded ? 'h-[176px] sm:w-60 sm:h-full shadow-md py-2' : 'h-0 w-full sm:h-full sm:w-[72px] sm:shadow-md -translate-y-[176px] sm:transform-none'">
    <ul class="w-[inherit]">
      <li>
        <RouterLink
          class="flex gap-2 items-center text-sm px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          to="/album">
          <div>
            <AlbumIcon />
          </div>
          <div :class="{ 'sm:hidden': !isExpanded }">专辑</div>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="flex gap-2 items-center text-sm px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          to="/artist">
          <div>
            <MicIcon />
          </div>
          <div :class="{ 'sm:hidden': !isExpanded }">歌手</div>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="flex gap-2 items-center text-sm px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          to="#">
          <div>
            <MusicNoteIcon />
          </div>
          <div :class="{ 'sm:hidden': !isExpanded }">单曲</div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
