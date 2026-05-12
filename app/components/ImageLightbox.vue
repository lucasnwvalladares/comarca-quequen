<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10" @click="close">
          <button
            type="button"
            aria-label="Cerrar imagen ampliada"
            class="absolute right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-4xl leading-none text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            @click.stop="close"
          >
            &times;
          </button>

          <button
            v-if="showPrevious"
            type="button"
            aria-label="Imagen anterior"
            class="absolute left-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-5xl leading-none text-white transition hover:bg-white/20 md:left-8 md:h-14 md:w-14"
            @click.stop="previous"
          >
            <span aria-hidden="true">&lsaquo;</span>
          </button>

          <img
            :src="resolvedSrc"
            :alt="alt"
            class="max-h-full max-w-full object-contain shadow-2xl transition-transform duration-300"
            @click.stop
          />

          <button
            v-if="showNext"
            type="button"
            aria-label="Imagen siguiente"
            class="absolute right-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-5xl leading-none text-white transition hover:bg-white/20 md:right-8 md:h-14 md:w-14"
            @click.stop="next"
          >
            <span aria-hidden="true">&rsaquo;</span>
          </button>

          <div
            v-if="alt || counterLabel"
            class="pointer-events-none absolute inset-x-4 bottom-4 flex flex-col items-center gap-2 text-center text-white md:bottom-6"
          >
            <p v-if="counterLabel" class="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/75">
              {{ counterLabel }}
            </p>
            <p v-if="alt" class="max-w-3xl rounded-full bg-black/35 px-5 py-2 font-serif text-base italic text-white/75 md:text-lg">
              {{ alt }}
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  isOpen: Boolean,
  showPrevious: Boolean,
  showNext: Boolean,
  counterLabel: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close', 'previous', 'next'])

const close = () => {
  emit('close')
}

const previous = () => {
  emit('previous')
}

const next = () => {
  emit('next')
}

const config = useRuntimeConfig()
const resolvedSrc = computed(() => {
  if (!props.src) return ''
  // Prepend baseURL if src starts with / and it's not already prepended
  const base = config.app.baseURL.replace(/\/$/, '')
  if (props.src.startsWith('/') && !props.src.startsWith(base)) {
    return `${base}${props.src}`
  }
  return props.src
})

// Close on ESC key
if (process.client) {
  const handleKeydown = (e) => {
    if (!props.isOpen) return

    if (e.key === 'Escape') {
      close()
      return
    }

    if (e.key === 'ArrowLeft' && props.showPrevious) {
      e.preventDefault()
      previous()
      return
    }

    if (e.key === 'ArrowRight' && props.showNext) {
      e.preventDefault()
      next()
    }
  }
  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
}
</script>
