import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isExpanded = ref(false)
  const title = ref('')
  return { isExpanded, title }
})
