<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const router = useRouter()

const slideContent = ref<any>(null)
const htmlContent = ref('')
const markdownContent = ref('')
const isLoading = ref(true)
const error = ref('')

const chapterId = computed(() => route.params.chapterId as string)
const slideIndex = computed(() => {
  const idx = parseInt(route.params.slideIndex as string)
  return idx > 0 ? idx - 1 : 0
})

const chapterMeta = ref<{ title: string; slides: string[] } | null>(null)
const totalSlides = computed(() => chapterMeta.value?.slides?.length || 0)

async function loadSlide() {
  isLoading.value = true
  error.value = ''
  
  try {
    const meta = await import(`../../chapters/${chapterId.value}/meta.json`)
    chapterMeta.value = meta.default || meta
    
    const slides = chapterMeta.value?.slides
    if (!slides || slideIndex.value >= slides.length) {
      error.value = 'Slide not found'
      isLoading.value = false
      return
    }
    
    const slideFile = slides[slideIndex.value]
    if (!slideFile) {
      error.value = 'Slide not found'
      isLoading.value = false
      return
    }
    
    const ext = slideFile.split('.').pop()?.toLowerCase()
    
    if (ext === 'vue') {
      const module = await import(`../../chapters/${chapterId.value}/${slideFile}`)
      slideContent.value = module.default
      htmlContent.value = ''
      markdownContent.value = ''
    } else if (ext === 'md') {
      const md = new MarkdownIt()
      const content = await import(`../../chapters/${chapterId.value}/${slideFile}?raw`)
      markdownContent.value = md.render(content.default || content)
      htmlContent.value = ''
      slideContent.value = null
    } else if (ext === 'html') {
      const content = await import(`../../chapters/${chapterId.value}/${slideFile}?raw`)
      htmlContent.value = content.default || content
      slideContent.value = null
      markdownContent.value = ''
    }
  } catch (e) {
    error.value = 'Failed to load slide'
    console.error(e)
  }
  
  isLoading.value = false
}

function nextSlide() {
  if (slideIndex.value < totalSlides.value - 1) {
    router.push(`/chapter/${chapterId.value}/${slideIndex.value + 2}`)
  }
}

function prevSlide() {
  if (slideIndex.value > 0) {
    router.push(`/chapter/${chapterId.value}/${slideIndex.value}`)
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    nextSlide()
  } else if (e.key === 'ArrowLeft') {
    prevSlide()
  } else if (e.key === 'Home') {
    router.push(`/chapter/${chapterId.value}/1`)
  } else if (e.key === 'End') {
    router.push(`/chapter/${chapterId.value}/${totalSlides.value}`)
  }
}

watch(() => route.path, loadSlide)
onMounted(() => {
  loadSlide()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="slide bg-white">
    <div v-if="isLoading" class="flex items-center justify-center h-full">
      <span class="text-gray-500">Loading...</span>
    </div>
    
    <div v-else-if="error" class="flex items-center justify-center h-full">
      <span class="text-red-500">{{ error }}</span>
    </div>
    
    <template v-else>
      <component v-if="slideContent" :is="slideContent" />
      
      <div v-else-if="htmlContent" v-html="htmlContent" class="w-full h-full p-8" />
      
      <div v-else-if="markdownContent" v-html="markdownContent" class="w-full h-full p-8 prose max-w-none" />
    </template>
    
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gray-400">
      <button @click="prevSlide" :disabled="slideIndex === 0" class="p-2 disabled:opacity-30">
        ←
      </button>
      <span>{{ slideIndex + 1 }} / {{ totalSlides }}</span>
      <button @click="nextSlide" :disabled="slideIndex >= totalSlides - 1" class="p-2 disabled:opacity-30">
        →
      </button>
    </div>
  </div>
</template>

<style>
.slide .prose {
  font-size: 1.25rem;
  line-height: 1.75;
}

.slide .prose h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.slide .prose h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.slide .prose p {
  margin-bottom: 1rem;
}

.slide .prose code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.slide .prose pre {
  background: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}

.slide .prose pre code {
  background: transparent;
  padding: 0;
}
</style>
