<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
import MenuIcon from './assets/MenuIcon.vue'
import SearchIcon from './SearchIcon.vue'

const { isExpanded, title } = storeToRefs(useSidebarStore())
</script>

<template>
  <header class="py-2 bg-gray-100 shadow-lg flex items-center justify-between px-4 fixed-top">
    <div class="flex items-center gap-2">
      <button class="rounded-full p-2" type="button" data-mdb-ripple="true" data-mdb-ripple-color="dark"
        data-mdb-ripple-centered="true" @click="isExpanded = !isExpanded">
        <MenuIcon />
      </button>
      <div class="text-gray-900">{{ title }}</div>
    </div>

    
    <div>
        <label for="Price" class="block text-sm font-medium text-gray-800"></label>
        <div class="relative mt-1 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">
              <SearchIcon />
            </span>
          </div>
          <input type="text" name="Price" id="Price"
            class="block w-full rounded-md border-gray-800 pl-10 pr-20 focus:border-indigo-800 focus:ring-indigo-800 sm:text-sm"
            placeholder="七海---杨紫怡" />
        </div>
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
