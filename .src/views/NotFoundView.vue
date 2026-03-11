<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="slide bg-white">
    <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-8">Page not found</p>
      <button
        @click="router.push('/')"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go Home
      </button>
    </div>
  </div>
</template>
