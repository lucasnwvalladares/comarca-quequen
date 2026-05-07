<template>
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
          class="absolute top-6 right-6 text-white text-4xl hover:text-stone-400 transition-colors z-[110]"
          @click.stop="close"
        >
          &times;
        </button>
        <img 
          :src="src" 
          :alt="alt" 
          class="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in duration-300"
          @click.stop
        />
        <div v-if="alt" class="absolute bottom-10 left-0 right-0 text-center text-white/70 font-serif italic text-lg px-6">
          {{ alt }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// Close on ESC key
if (process.client) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && props.isOpen) close()
  })
}
</script>
