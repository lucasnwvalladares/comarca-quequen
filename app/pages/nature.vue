<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <h2 class="text-4xl md:text-5xl font-serif font-bold mb-16 text-stone-800 text-center italic border-b-2 border-stone-200 pb-6">Naturaleza y Paisajes</h2>

      <!-- Map Section (Moved to Top as it's the main guide now) -->
      <section class="bg-stone-100 rounded-[3rem] p-8 md:p-16 flex flex-col items-center shadow-inner mb-24">
        <h3 class="text-3xl font-serif font-bold mb-8 text-stone-800 italic">Mapa de la Comarca</h3>
        <div class="cursor-pointer group relative max-w-4xl" @click="openLightbox('/images/map-regional.png', 'Mapa Detallado de la Comarca del Quequén Salado')">
          <img src="/images/map-regional.png" alt="Mapa del Río Quequén Salado" class="rounded-2xl shadow-2xl max-w-full border-8 border-white mb-10 transition-transform group-hover:scale-[1.01]" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="bg-stone-800/80 text-white px-6 py-3 rounded-full font-bold backdrop-blur-sm shadow-xl tracking-widest text-sm">AMPLIAR MAPA 🔍</span>
          </div>
        </div>
        
        <!-- Interactive References List -->
        <div class="w-full max-w-5xl mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h4 class="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6 border-b border-stone-100 pb-2">🌉 Puentes y Cruces</h4>
            <ul class="space-y-3 text-sm text-stone-600">
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">1</span> Puente Ruta 85</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">2</span> Puente Vanoli</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">3</span> Puente Cascallares</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">5</span> Puente Ruta Nac. 3</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">6</span> Puente Nuevo (Acceso Oriente)</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">7</span> Puente Viejo (Ex Usina)</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h4 class="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6 border-b border-stone-100 pb-2">🏭 Molinos y Ruinas</h4>
            <ul class="space-y-3 text-sm text-stone-600">
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">4</span> Molino de las Rosas</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">7</span> Usina Hidroeléctrica Oriente</li>
              <li class="flex items-center gap-3"><span class="bg-yellow-400 text-stone-900 w-6 h-6 flex items-center justify-center rounded-full font-bold text-[10px]">8</span> Cueva del Tigre</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h4 class="text-stone-800 font-bold uppercase tracking-widest text-xs mb-6 border-b border-stone-100 pb-2">🛡️ Fortines Históricos</h4>
            <ul class="space-y-3 text-sm text-stone-600">
              <li class="flex items-center gap-3"><span class="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-md font-bold text-[10px]">A</span> Fortín Marco Paz</li>
              <li class="flex items-center gap-3"><span class="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-md font-bold text-[10px]">B</span> Fortín Buenos Aires</li>
              <li class="flex items-center gap-3"><span class="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-md font-bold text-[10px]">C</span> Fortín Argentino</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Cascada Cifuentes -->
      <section class="mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div 
          class="relative group cursor-pointer"
          @click="openLightbox('/images/cascada-cifuentes.jpg', 'Cascada Cifuentes: El salto mais alto da Província de Buenos Aires.')"
        >
          <div class="absolute -inset-2 bg-stone-200 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform shadow-lg"></div>
          <img src="/images/cascada-cifuentes.jpg" alt="Cascada Cifuentes" class="relative rounded-xl shadow-2xl w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
          <p class="mt-4 text-sm text-stone-500 italic text-center">Click para ampliar la imagen</p>
        </div>
        <div>
          <div class="flex justify-between items-start mb-6">
            <h3 class="text-3xl font-serif font-bold text-stone-700 underline decoration-stone-300 decoration-4">Cascada Cifuentes</h3>
            <a href="https://maps.app.goo.gl/Xv2mrLgvQUyvV57dA" target="_blank" class="bg-stone-800 text-white p-2 rounded-full hover:bg-stone-600 transition-colors shadow-lg">📍</a>
          </div>
          <p class="mb-4 text-lg text-stone-700 leading-relaxed">
            También conocida como <strong>Cascada de Aldaya</strong>, es una de las joyas de la Comarca. Su entorno agreste invita a la contemplación y a la fotografía de naturaleza.
          </p>
          <div class="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-6 shadow-sm">
            <h4 class="font-bold mb-2 text-stone-900 uppercase tracking-wider text-xs">Ubicación Estratégica:</h4>
            <p class="text-stone-700 text-sm italic">Localizada entre el Molino de las Rosas y el Puente Nuevo. El acceso por la Ruta 3 es el más recomendado para visitantes.</p>
          </div>
        </div>
      </section>

      <!-- Rio Quequén Salado Section -->
      <section class="mb-24">
        <div class="bg-stone-900 text-white rounded-[3rem] overflow-hidden shadow-2xl">
          <div class="relative h-[450px] cursor-pointer group" @click="openLightbox('/images/rio-quequen.jpg', 'El imponente Río Quequén Salado')">
            <img src="/images/rio-quequen.jpg" alt="El Río Quequén Salado" class="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 class="text-5xl md:text-7xl font-serif font-bold italic mb-6 drop-shadow-2xl">El Río Quequén Salado</h3>
              <p class="max-w-3xl text-xl md:text-2xl leading-relaxed opacity-90 drop-shadow-md">
                Eje articulador de la Comarca, uniendo historia y aventura.
              </p>
            </div>
          </div>
          <div class="p-12 md:p-20">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <span class="text-4xl block mb-4">🛶</span>
                <h4 class="text-xl font-bold mb-2">Aventura</h4>
                <p class="text-stone-300">Navegación por tramos de aguas blancas y tranquilas.</p>
              </div>
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <span class="text-4xl block mb-4">🛡️</span>
                <h4 class="text-xl font-bold mb-2">Historia</h4>
                <p class="text-stone-300">Ruta de antiguos fortines y fronteras históricas.</p>
              </div>
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <span class="text-4xl block mb-4">🌿</span>
                <h4 class="text-xl font-bold mb-2">Ecosistema</h4>
                <p class="text-stone-300">Reserva natural de flora y fauna bonaerense.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Patrimonio Section -->
      <section class="mb-24 grid md:grid-cols-2 gap-12">
        <div 
          class="bg-white p-2 rounded-2xl shadow-xl transform rotate-1 cursor-pointer group"
          @click="openLightbox('/images/puente-viejo.jpg', 'Ruinas del Puente Viejo y la Usina.')"
        >
          <img src="/images/puente-viejo.jpg" alt="Puente Viejo Oriente" class="rounded-xl w-full h-[350px] object-cover" />
          <div class="p-6 flex justify-between items-center">
            <h4 class="text-xl font-bold text-stone-800">Puente Viejo & Usina</h4>
            <a href="https://maps.app.goo.gl/qExQZHZg5Yy2F2yo9" target="_blank" class="bg-stone-100 p-2 rounded-full hover:bg-stone-200">📍</a>
          </div>
        </div>
        <div 
          class="bg-white p-2 rounded-2xl shadow-xl transform -rotate-1 cursor-pointer group"
          @click="openLightbox('/images/ruinas-usina.jpg', 'Detalle de las ruinas de la Hidroeléctrica.')"
        >
          <img src="/images/ruinas-usina.jpg" alt="Ruinas Usina" class="rounded-xl w-full h-[350px] object-cover" />
          <div class="p-6 flex justify-between items-center">
            <h4 class="text-xl font-bold text-stone-800">Mística Industrial</h4>
            <a href="https://maps.app.goo.gl/5w6p5mjXYRWs8nZW9" target="_blank" class="bg-stone-100 p-2 rounded-full hover:bg-stone-200">📍</a>
          </div>
        </div>
      </section>

      <div class="mt-20 text-center">
        <NuxtLink to="/legends" class="text-2xl font-serif font-bold text-stone-800 hover:text-stone-600 transition-all flex items-center justify-center gap-4 group">
           Historias de Matreros y Fortines <span class="group-hover:translate-x-3 transition-transform text-3xl">→</span>
        </NuxtLink>
      </div>

      <!-- Lightbox -->
      <ImageLightbox 
        :is-open="isLightboxOpen" 
        :src="lightboxSrc" 
        :alt="lightboxAlt" 
        @close="isLightboxOpen = false" 
      />
    </main>
  </div>
</template>

<script setup>
const isLightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')

const openLightbox = (src, alt) => {
  lightboxSrc.value = src
  lightboxAlt.value = alt
  isLightboxOpen.value = true
}

useHead({
  title: 'Naturaleza y Mapa - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Guía detallada con mapa regional, puentes, fortines y cascadas del Quequén Salado.' }
  ]
})
</script>
