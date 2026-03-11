<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface Chapter {
    id: string
    title: string
    slides: string[]
}

const router = useRouter()
const route = useRoute()

const chapters = ref<Chapter[]>([])
const activeChapter = ref<string | null>(null)

const isSlidePage = computed(() => route.name === 'slide')
const currentChapterId = computed(() => route.params.chapterId as string)
const currentSlideIndex = computed(() => {
    const idx = parseInt(route.params.slideIndex as string)
    return idx > 0 ? idx - 1 : 0
})

onMounted(async () => {
    const modules = import.meta.glob('/src/chapters/*/meta.json', { eager: true })

    for (const path in modules) {
        const match = path.match(/\/chapters\/([^/]+)\/meta\.json/)
        if (match && match[1]) {
            const meta = modules[path] as { title: string; slides: string[] }
            chapters.value.push({
                id: match[1],
                title: meta.title,
                slides: meta.slides || []
            })
        }
    }
})

function goToSlide(chapterId: string, slideIndex: number) {
    router.push(`/chapter/${chapterId}/${slideIndex + 1}`)
}

function goHome() {
    router.push('/')
}
</script>

<template>
    <div class="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <nav 
            :class="[
                'bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl',
                'hover:bg-white/30 transition-all duration-300',
                'flex items-end gap-2 p-4 rounded-2xl'
            ]"
            @mouseleave="activeChapter = null"
        >
            <button
                @click="goHome"
                class="px-3 py-1.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/40 transition-colors"
                :class="{ 'bg-white/50': route.name === 'home' }"
            >
                Home
            </button>

            <div 
                v-for="chapter in chapters" 
                :key="chapter.id"
                class="relative"
                @mouseenter="activeChapter = chapter.id"
            >
                <button
                    class="px-3 py-1.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-white/40 transition-colors"
                    :class="{ 
                        'bg-white/50': currentChapterId === chapter.id,
                        'ring-2 ring-blue-400/50': currentChapterId === chapter.id && isSlidePage
                    }"
                >
                    {{ chapter.title }}
                </button>

                <Transition name="fade">
                    <div 
                        v-if="activeChapter === chapter.id && chapter.slides.length > 0"
                        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 rounded-xl min-w-48"
                        :class="[
                            'bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl',
                            'whitespace-nowrap'
                        ]"
                    >
                        <div class="text-xs text-gray-500 px-2 pb-1 mb-1 border-b border-gray-200/30">
                            {{ chapter.title }}
                        </div>
                        <div class="flex flex-col gap-1 max-h-48 overflow-y-auto">
                            <button
                                v-for="(slide, index) in chapter.slides"
                                :key="index"
                                @click="goToSlide(chapter.id, index)"
                                class="px-3 py-1.5 text-sm text-left rounded-lg text-gray-700 hover:bg-white/50 transition-colors"
                                :class="{ 'bg-blue-500/20 text-blue-700': currentChapterId === chapter.id && currentSlideIndex === index }"
                            >
                                {{ index + 1 }}. {{ slide }}
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translate-x-1/2 translateY(8px);
}
</style>
