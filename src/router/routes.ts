import HomeView from '@/views/HomeView.vue'
import IngredientsView from '@/views/IngredientsView.vue'
import type { RouteRecordRaw } from 'vue-router'

export type AppRoute = RouteRecordRaw & {
  meta?: {
    icon?: string
    title?: string
  }
}

export const routes: AppRoute[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      icon: 'fa-home',
      title: 'Home',
    },
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientsView,
    meta: {
      icon: 'fa-cheese',
      title: 'Ingredients',
    },
  },
]
