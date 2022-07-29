import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeV',
      component: () => import('../views/HomeV')
    },
    {
      path: '/user',
      name: 'UsersV',
      component: () => import('../views/UsersV'),
      beforeEnter() {
        alert('이 페이지를 볼 권한이 없습니다')
        // block navigation
        return false
      }
    }
  ]
})

export default router