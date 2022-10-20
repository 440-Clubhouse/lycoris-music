<script setup lang="ts">
import { RouterView } from 'vue-router'
import BottomPlayer from './components/BottomPlayer.vue'
import HeaderBar from './components/HeaderBar.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <HeaderBar />
  <div class="flex fixed top-14 overflow-hidden h-[calc(100vh-3.5rem)] flex-col sm:flex-row">
    <SideBar />
    <RouterView />
  </div>
  <BottomPlayer />
</template>
