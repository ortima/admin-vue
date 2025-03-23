<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import AvatarPlaceholder from '@/components/AvatarPlaceholder.vue'

const emit = defineEmits<{
  (event: 'toggleMenu'): void
}>()

const route = useRoute()

const { isCollapsed } = defineProps<{ isCollapsed: boolean }>()
</script>

<template>
  <header class="navbar bg-base-300 w-full px-4 shadow-md">
    <button v-if="!isCollapsed" @click="emit('toggleMenu')" class="btn btn-square btn-ghost">
      <v-icon name="fa-chevron-left" class="size-6" />
    </button>

    <ul class="breadcrumbs flex w-full justify-between">
      <RouterLink
        class="flex items-center gap-4"
        activeClass="menu-active"
        :data-tip="route.name"
        :to="route.path"
      >
        <v-icon :name="route.meta?.icon" class="size-6" />
        <span v-show="!isCollapsed">{{ route.meta?.title }}</span>
      </RouterLink>
    </ul>

    <AvatarPlaceholder />
  </header>
</template>
