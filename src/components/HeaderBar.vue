<script setup lang="ts">
import MenuIcon from './assets/MenuIcon.vue'
</script>

<template>
  <nav class="py-2 bg-gray-100 shadow-lg flex items-center justify-between px-4">
    <div class="flex items-center">
      <button class="rounded-full p-2" type="button" data-mdb-ripple="true" data-mdb-ripple-color="dark"
        data-mdb-ripple-centered="true">
        <MenuIcon />
      </button>
      <div class="text-gray-900 ml-2">专辑</div>
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
  </nav>
</template>
