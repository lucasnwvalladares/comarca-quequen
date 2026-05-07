<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <h2 class="text-4xl md:text-5xl font-serif font-bold mb-16 text-stone-800 text-center italic border-b-2 border-stone-200 pb-6">Naturaleza y Paisajes</h2>

      <!-- Cascada Cifuentes -->
      <section class="mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div 
          class="relative group cursor-pointer"
          @click="openLightbox('/images/cascada-cifuentes.jpg', 'Cascada Cifuentes: El salto más alto de la Provincia de Buenos Aires.')"
        >
          <div class="absolute -inset-2 bg-stone-200 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform shadow-lg"></div>
          <img src="/images/cascada-cifuentes.jpg" alt="Cascada Cifuentes" class="relative rounded-xl shadow-2xl w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
          <p class="mt-4 text-sm text-stone-500 italic text-center">Click para ampliar la imagen</p>
        </div>
        <div>
          <div class="flex justify-between items-start mb-6">
            <h3 class="text-3xl font-serif font-bold text-stone-700 underline decoration-stone-300 decoration-4">Cascada Cifuentes</h3>
            <a href="https://maps.app.goo.gl/Xv2mrLgvQUyvV57dA" target="_blank" class="text-stone-400 hover:text-stone-800 transition-colors" title="Ver en Google Maps">
              <span class="text-2xl">📍</span>
            </a>
          </div>
          <p class="mb-4 text-lg text-stone-700 leading-relaxed">
            Conocida también como <strong>Cascada de Aldaya</strong>, esta maravilla natural ofrece un salto de agua que oscila entre los 5 y 8 metros de altura, rodeado de barrancas rocosas y una biodiversidad única.
          </p>
          <div class="bg-stone-100 p-6 rounded-2xl border-l-8 border-stone-800 mb-6 shadow-sm group">
            <h4 class="font-bold mb-2 text-stone-900 uppercase tracking-wider text-sm">📍 Acceso:</h4>
            <p class="text-stone-700 italic mb-3">Ruta Nacional N° 3, kilómetro 532. Se transita por un camino rural de ripio de 4 km.</p>
            <a href="https://maps.app.goo.gl/Xv2mrLgvQUyvV57dA" target="_blank" class="inline-block text-xs font-bold bg-white px-3 py-1 rounded-full border border-stone-200 hover:bg-stone-800 hover:text-white transition-all">
              ABRIR MAPA →
            </a>
          </div>
        </div>
      </section>

      <!-- Rio Quequén Salado Section -->
      <section class="mb-24">
        <div class="bg-stone-900 text-white rounded-[3rem] overflow-hidden shadow-2xl">
          <div 
            class="relative h-[450px] cursor-pointer group"
            @click="openLightbox('/images/rio-quequen.jpg', 'El imponente Río Quequén Salado')"
          >
            <img src="/images/rio-quequen.jpg" alt="El Río Quequén Salado" class="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 class="text-5xl md:text-7xl font-serif font-bold italic mb-6 drop-shadow-2xl">El Río Quequén Salado</h3>
              <p class="max-w-3xl text-xl md:text-2xl leading-relaxed opacity-90 drop-shadow-md">
                Límite natural entre Coronel Dorrego y Tres Arroyos.
              </p>
            </div>
            <div class="absolute bottom-6 right-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              <span>Zoom</span> 🔍
            </div>
          </div>
          <div class="p-12 md:p-20">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-center">
                <span class="text-4xl block mb-4">🛶</span>
                <h4 class="text-xl font-bold mb-2">Aventura</h4>
                <p class="text-stone-300">Kayak y canotaje en sus saltos naturales.</p>
              </div>
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-center">
                <span class="text-4xl block mb-4">🥾</span>
                <h4 class="text-xl font-bold mb-2">Trekking</h4>
                <p class="text-stone-300">Caminatas por las cornisas de las barrancas.</p>
              </div>
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-center">
                <span class="text-4xl block mb-4">🎣</span>
                <h4 class="text-xl font-bold mb-2">Pesca</h4>
                <p class="text-stone-300">Sustentable de pejerrey en aguas cristalinas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Patrimonio e Historia Section -->
      <section class="mb-24">
        <h3 class="text-3xl font-serif font-bold mb-12 text-stone-800 text-center uppercase tracking-tighter">Patrimonio Hidroeléctrico</h3>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div 
              class="bg-white p-2 rounded-2xl shadow-xl transform rotate-1 cursor-pointer group"
              @click="openLightbox('/images/puente-viejo.jpg', 'Puente Viejo: Testigo de la historia energética de la región.')"
            >
              <img src="/images/puente-viejo.jpg" alt="Puente Viejo Oriente" class="rounded-xl w-full h-[300px] object-cover" />
              <div class="p-6 flex justify-between items-center">
                <div>
                  <h4 class="text-xl font-bold text-stone-800">Puente Viejo</h4>
                  <p class="text-stone-500 text-xs italic">Clic para ampliar</p>
                </div>
                <a href="https://maps.app.goo.gl/qExQZHZg5Yy2F2yo9" target="_blank" class="bg-stone-800 text-white p-3 rounded-full hover:bg-stone-600 transition-colors shadow-lg">
                  📍
                </a>
              </div>
            </div>
            <div class="bg-stone-50 p-8 rounded-2xl border border-stone-200">
              <p class="text-stone-700 leading-relaxed italic">
                "La Usina de Oriente (Hidroeléctrica del Sud) representa una época de oro de la industria regional."
              </p>
            </div>
          </div>
          <div class="space-y-8 pt-12 md:pt-24">
             <div 
              class="bg-white p-2 rounded-2xl shadow-xl transform -rotate-1 cursor-pointer group"
              @click="openLightbox('/images/ruinas-usina.jpg', 'Ruinas de la Usina de Oriente: Mística industrial a orillas del río.')"
             >
              <img src="/images/ruinas-usina.jpg" alt="Ruinas Usina de Oriente" class="rounded-xl w-full h-[400px] object-cover" />
              <div class="p-6 flex justify-between items-center">
                <div>
                  <h4 class="text-xl font-bold text-stone-800">Ruinas de la Usina</h4>
                  <p class="text-stone-500 text-xs italic">Mística industrial</p>
                </div>
                <a href="https://maps.app.goo.gl/5w6p5mjXYRWs8nZW9" target="_blank" class="bg-stone-800 text-white p-3 rounded-full hover:bg-stone-600 transition-colors shadow-lg">
                  📍
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="bg-stone-200 rounded-[3rem] p-12 md:p-20 flex flex-col items-center shadow-inner">
        <h3 class="text-3xl font-serif font-bold mb-8 text-stone-800 italic">Guía de la Región</h3>
        <div class="cursor-pointer group relative" @click="openLightbox('/images/map-quequen.jpg', 'Mapa Turístico de la Comarca del Quequén Salado')">
          <img src="/images/map-quequen.jpg" alt="Mapa del Río Quequén Salado" class="rounded-2xl shadow-2xl max-w-full border-8 border-white mb-10 transition-transform group-hover:scale-[1.01]" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="bg-stone-800/80 text-white px-6 py-3 rounded-full font-bold backdrop-blur-sm shadow-xl">AMPLIAR MAPA 🔍</span>
          </div>
        </div>
        <div class="text-center max-w-2xl">
          <p class="text-stone-600 leading-relaxed font-medium">
            Utiliza este mapa para localizar los principales puntos de interés: desde el Molino de la Rosa hasta la desembocadura.
          </p>
        </div>
      </section>

      <div class="mt-20 text-center">
        <NuxtLink to="/legends" class="text-2xl font-serif font-bold text-stone-800 hover:text-stone-600 transition-all flex items-center justify-center gap-4 group">
           Próxima parada: Las Leyendas del Tigre <span class="group-hover:translate-x-3 transition-transform text-3xl">→</span>
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
  title: 'Naturaleza y Patrimonio - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Explora la Cascada Cifuentes, las ruinas de la Usina de Oriente y el mapa completo del río.' }
  ]
})
</script>
