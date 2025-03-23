<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router/routes'

const { isCollapsed = false } = defineProps<{ isCollapsed?: boolean }>()
const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="drawer-side bg-base-300">
    <div v-show="isCollapsed" class="flex items-center justify-center p-4">
      <button @click="emit('toggle')" class="btn btn-ghost">
        <v-icon name="fa-chevron-right" class="size-6" />
      </button>
    </div>

    <ul
      class="menu text-base-content flex w-full flex-col gap-2 p-4 transition-all"
      :class="isCollapsed ? 'w-20' : 'w-64'"
    >
      <p
        class="p-4 text-center text-2xl font-bold transition-all duration-300 ease-in-out"
        v-show="!isCollapsed"
      >
        <span class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Vue Admin 💚
        </span>
      </p>

      <li class="tooltip tooltip-right tooltip-primary" v-for="route in routes" :key="route.path">
        <RouterLink
          class="flex items-center gap-4"
          activeClass="menu-active"
          :data-tip="route.name"
          :to="route.path"
        >
          <v-icon :name="route.meta?.icon" class="size-6" />
          <span v-show="!isCollapsed">{{ route.meta?.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.tooltip::after {
  z-index: 999 !important;
}
</style>
