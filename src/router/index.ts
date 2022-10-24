import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/album'
    },
    {
      path: '/album',
      component: () => import('@/views/AlbumsView.vue')
    },
    {
      path: '/artist',
      component: () => import('@/views/ArtistsView.vue')
    }
  ]
})

export default router
