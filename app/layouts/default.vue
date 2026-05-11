<template>
  <div class="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col">
    <header class="bg-stone-800 text-white p-4 md:p-6 shadow-lg sticky top-0 z-50 border-b border-stone-700">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-4 group" @click="isMenuOpen = false">
          <img src="/images/logo-comarca.png" alt="Logo Comarca Río Quequén Salado" class="h-12 md:h-16 w-auto bg-white rounded-lg p-1 transition-transform group-hover:scale-105" />
          <div class="hidden sm:block">
            <h1 class="text-xl md:text-2xl font-serif font-bold italic leading-tight">Comarca Río Quequén Salado</h1>
            <p class="text-[10px] uppercase tracking-[0.2em] opacity-60">Ecoturismo Público Sustentable</p>
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-semibold">
          <NuxtLink to="/" class="hover:text-stone-300 transition-colors">Inicio</NuxtLink>
          <NuxtLink to="/pueblos" class="hover:text-stone-300 transition-colors border-b-2 border-transparent hover:border-stone-400">Pueblos</NuxtLink>
          <NuxtLink to="/atracciones" class="hover:text-stone-300 transition-colors border-b-2 border-transparent hover:border-stone-400">Atracciones</NuxtLink>
          <NuxtLink to="/leyendas" class="hover:text-stone-300 transition-colors border-b-2 border-transparent hover:border-stone-400">Leyendas</NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 focus:outline-none z-50" 
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span 
              :class="['w-full h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"
            ></span>
            <span 
              :class="['w-full h-0.5 bg-white transition-opacity duration-300', isMenuOpen ? 'opacity-0' : '']"
            ></span>
            <span 
              :class="['w-full h-0.5 bg-white transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation Overlay -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav 
          v-if="isMenuOpen" 
          class="absolute top-full left-0 w-full bg-stone-800 border-t border-stone-700 md:hidden flex flex-col p-6 space-y-6 shadow-2xl"
        >
          <NuxtLink 
            to="/" 
            class="text-xl font-serif italic border-b border-stone-700 pb-2" 
            @click="isMenuOpen = false"
          >
            Inicio
          </NuxtLink>
          <NuxtLink 
            to="/pueblos" 
            class="text-xl font-serif italic border-b border-stone-700 pb-2" 
            @click="isMenuOpen = false"
          >
            Pueblos
          </NuxtLink>
          <NuxtLink 
            to="/atracciones" 
            class="text-xl font-serif italic border-b border-stone-700 pb-2" 
            @click="isMenuOpen = false"
          >
            Atracciones
          </NuxtLink>
          <NuxtLink 
            to="/leyendas" 
            class="text-xl font-serif italic border-b border-stone-700 pb-2" 
            @click="isMenuOpen = false"
          >
            Leyendas
          </NuxtLink>
        </nav>
      </Transition>
    </header>

    <div class="flex-grow">
      <slot />
    </div>

    <footer class="bg-stone-900 text-stone-400 py-12 px-6">
      <div class="container mx-auto text-center">
        <p class="mb-4 font-serif italic text-white/80">&copy; 2026 Comarca Río Quequén Salado</p>
        <p class="text-sm tracking-widest uppercase opacity-50">Ecoturismo Público y Sostenible</p>
        <div class="mt-8 border-t border-stone-800 pt-8">
          <p class="text-xs italic text-stone-600 max-w-md mx-auto leading-relaxed">
            Preservando el patrimonio natural y cultural del sudoeste bonaerense para las futuras generaciones.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

// Close menu when resizing to desktop
if (process.client) {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      isMenuOpen.value = false
    }
  })
}
</script>

<style>
/* Ensure the body doesn't scroll when mobile menu is open */
.menu-open {
  overflow: hidden;
}
</style>
