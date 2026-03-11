<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface Chapter {
  id: string
  title: string
  description: string
  slideCount: number
}

const router = useRouter()
const chapters = ref<Chapter[]>([])

onMounted(async () => {
  const modules = import.meta.glob('/src/chapters/*/meta.json', { eager: true })
  
  for (const path in modules) {
    const match = path.match(/\/chapters\/([^/]+)\/meta\.json/)
    if (match && match[1]) {
      const meta = modules[path] as { title: string; description: string; slides: string[] }
      chapters.value.push({
        id: match[1],
        title: meta.title,
        description: meta.description,
        slideCount: meta.slides?.length || 0
      })
    }
  }
})

function openChapter(chapterId: string) {
  router.push(`/chapter/${chapterId}`)
}
</script>

<template>
  <div class="slide bg-white">
    <div class="flex flex-col items-center justify-center h-full p-8">
      <h1 class="text-6xl font-bold mb-4">Math Lectures</h1>
      <p class="text-xl text-gray-600 mb-8">Interactive presentations for learning mathematics</p>
      
      <div v-if="chapters.length === 0" class="text-gray-500">
        No chapters found. Create chapters in src/chapters/
      </div>
      
      <div v-else class="grid gap-4 w-full max-w-2xl mt-8">
        <button
          v-for="chapter in chapters"
          :key="chapter.id"
          @click="openChapter(chapter.id)"
          class="p-6 text-left bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 hover:border-blue-300"
        >
          <h2 class="text-2xl font-semibold mb-2">{{ chapter.title }}</h2>
          <p class="text-gray-600">{{ chapter.description }}</p>
          <p class="text-sm text-gray-400 mt-2">{{ chapter.slideCount }} slides</p>
        </button>
      </div>
    </div>
  </div>
</template>
