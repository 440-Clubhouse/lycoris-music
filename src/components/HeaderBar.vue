<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
import MenuIcon from './assets/MenuIcon.vue'

const { isExpanded } = storeToRefs(useSidebarStore())
</script>

<template>
  <header class="py-2 bg-gray-100 shadow-lg flex items-center justify-between px-4 fixed-top">
    <div class="flex items-center gap-2">
      <button class="rounded-full p-2" type="button" data-mdb-ripple="true" data-mdb-ripple-color="dark"
        data-mdb-ripple-centered="true" @click="isExpanded = !isExpanded">
        <MenuIcon />
      </button>
      <div class="text-gray-900">专辑</div>
    </div>
    <div class="flex items-center">
      <button class="mr-2" type="button" data-bs-toggle="dropdown">
        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full h-7 w-7" loading="lazy" />
      </button>
      <ul class="dropdown-menu hidden bg-white py-2 rounded-lg shadow-lg">
        <li>
          <a class="text-sm py-2 px-4 block text-gray-700 hover:bg-gray-100" href="#">Action</a>
        </li>
      </ul>
    </div>
  </header>
</template>
