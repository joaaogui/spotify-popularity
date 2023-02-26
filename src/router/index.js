import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  base: import.meta.env.BASE_URL,
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: "/:artist",
      name: "Songs",
      component: () => import("@/views/Songs.vue")
    }
  ]
})
