<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface ChapterMeta {
  title: string
  description: string
  slides: string[]
}

const chapter = ref<ChapterMeta | null>(null)
const chapterId = computed(() => route.params.chapterId as string)

onMounted(async () => {
  try {
    const meta = await import(`../chapters/${chapterId.value}/meta.json`)
    chapter.value = meta.default || meta
  } catch (e) {
    console.error('Chapter not found:', e)
  }
})

function openSlide(index: number) {
  router.push(`/chapter/${chapterId.value}/${index + 1}`)
}
</script>

<template>
  <div class="slide bg-white">
    <div class="flex flex-col items-center justify-center h-full p-8">
      <div v-if="!chapter" class="text-gray-500">
        Chapter not found
      </div>
      
      <template v-else>
        <h1 class="text-5xl font-bold mb-4">{{ chapter.title }}</h1>
        <p class="text-xl text-gray-600 mb-8">{{ chapter.description }}</p>
        
        <div class="grid gap-4 w-full max-w-2xl mt-8">
          <button
            v-for="(slide, index) in chapter.slides"
            :key="index"
            @click="openSlide(index)"
            class="p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300"
          >
            <span class="text-lg font-medium">Slide {{ index + 1 }}: {{ slide }}</span>
          </button>
        </div>
        
        <button
          v-if="chapter.slides.length > 0"
          @click="openSlide(0)"
          class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Chapter
        </button>
      </template>
    </div>
  </div>
</template>
