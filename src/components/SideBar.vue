<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
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
        <a class="flex gap-2 items-center text-sm px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <div>
            <AlbumIcon />
          </div>
          <div :class="{ 'sm:hidden': !isExpanded }">专辑</div>
        </a>
      </li>
      <li>
        <a class="flex gap-2 items-center text-sm px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <div>
            <MicIcon />
          </div>
          <div :class="{ 'sm:hidden': !isExpanded }">歌手</div>
        </a>
      </li>
      <li>
        <a class="flex gap-2 items-center text-sm px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <div>
            <MusicNoteIcon />
          </div>
          <div :class="{ 'sm:hidden': !isExpanded }">单曲</div>
        </a>
      </li>
    </ul>
  </div>
</template>
