<script setup lang="ts">
import AppMenu from '@/components/menu/AppMenu.vue'
import NavBar from '@/layouts/header/NavBar.vue'
import { ref } from 'vue'
import Footer from '@/layouts/footer/AppFooter.vue'

const isCollapsed = ref(false)
</script>

<template>
  <div class="drawer md:drawer-open">
    <input id="sidebar-toggle" type="checkbox" class="drawer-toggle" v-model="isCollapsed" />

    <!-- Контент -->
    <div class="drawer-content flex flex-col">
      <NavBar :isCollapsed="isCollapsed" @toggleMenu="isCollapsed = !isCollapsed" />

      <!-- Контент страницы -->
      <main class="h-full p-4"><slot /></main>
    </div>

    <!-- Боковое меню -->
    <AppMenu :isCollapsed="isCollapsed" @toggle="isCollapsed = !isCollapsed" />
  </div>

  <Footer />
</template>
