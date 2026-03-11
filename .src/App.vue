<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SlideNav from './components/SlideNav.vue'

const route = useRoute()
const transitionName = ref('slide-left')

watch(() => route.path, (newPath, oldPath) => {
  const newDepth = newPath.split('/').filter(Boolean).length
  const oldDepth = oldPath.split('/').filter(Boolean).length
  
  if (newDepth > oldDepth) {
    transitionName.value = 'slide-left'
  } else if (newDepth < oldDepth) {
    transitionName.value = 'slide-right'
  }
})
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <SlideNav />
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
