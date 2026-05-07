<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <article class="max-w-4xl mx-auto">
        <!-- Portal Image Header -->
        <div 
          class="relative h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
          @click="openLightbox('/images/cascallares-portal.png', 'Portal de Entrada Micaela Cascallares')"
        >
          <img src="/images/cascallares-portal.png" alt="Portal de Entrada Micaela Cascallares" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-10">
            <h2 class="text-4xl md:text-6xl font-serif font-bold text-white italic drop-shadow-lg">Micaela Cascallares</h2>
          </div>
          <div class="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-white text-xl">🔍</span>
          </div>
        </div>
        
        <div class="prose prose-stone lg:prose-xl max-w-none">
          <div class="flex justify-between items-center mb-8 flex-wrap gap-4">
            <p class="text-xl italic text-stone-600 m-0">
              Un rincón de paz en el partido de Tres Arroyos.
            </p>
            <a href="https://maps.app.goo.gl/AQkj21ByT2ZAoYUR8" target="_blank" class="bg-stone-100 text-stone-800 px-4 py-2 rounded-full text-sm font-bold hover:bg-stone-200 transition-colors flex items-center gap-2 no-underline">
              📍 Ver ubicación del pueblo
            </a>
          </div>

          <section class="mb-12">
            <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">📜 Historia y Origen</h3>
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p class="mb-4 text-stone-700">
                  Fundada el <strong>23 de julio de 1889</strong>, Micaela Cascallares nació del sueño de Benjamín del Castillo. El nombre rinde homenaje a Micaela Cascallares, madre del gobernador Máximo Paz.
                </p>
                <p class="text-stone-700">
                  Con la llegada del ferrocarril en 1891, el pueblo recibió a inmigrantes holandeses e belgas que marcaron sua identidad.
                </p>
              </div>
              <div 
                class="rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-pointer group relative"
                @click="openLightbox('/images/cascallares-estacion.jpg', 'Antigua Estación de Tren de Cascallares')"
              >
                <img src="/images/cascallares-estacion.jpg" alt="Estación Ferroviaria de Cascallares" class="w-full h-auto transition-transform group-hover:scale-105" />
                <p class="bg-white p-3 text-sm text-stone-500 italic text-center m-0">Antigua Estación de Tren (1891)</p>
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
            <div class="mt-4 text-right">
              <a href="https://maps.app.goo.gl/1fGK2MRPUdxtWTYT7" target="_blank" class="text-stone-500 text-sm font-bold hover:text-stone-800 underline">
                📍 Ubicación de la Estación
              </a>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">🚉 El Patrimonio Ferroviario</h3>
            <p class="text-stone-700 mb-6 leading-relaxed">
              La estación de tren es el corazón histórico de la localidad. Sus galpones y andenes son hoy un tesoro para el turismo cultural y fotográfico, conservando la esencia de la época dorada del ferrocarril en Argentina.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">🌿 Turismo Rural</h3>
            <p class="mb-6 text-stone-700">
              Cascallares invita a la "desconexión" con su ritmo pausado y calles arboladas.
            </p>
            <ul class="grid md:grid-cols-2 gap-4 list-none p-0">
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Biblioteca Luz y Cultura</li>
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Balneario Municipal</li>
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Gastronomía Regional</li>
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Fiestas Tradicionales</li>
            </ul>
          </section>
        </div>

        <div class="mt-16 text-center border-t border-stone-200 pt-12">
          <NuxtLink to="/" class="inline-block bg-stone-800 text-white px-10 py-4 rounded-full hover:bg-stone-700 transition-all shadow-lg hover:-translate-y-1">
            Volver al Inicio
          </NuxtLink>
        </div>
      </article>

      <!-- Lightbox Component -->
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
  title: 'Micaela Cascallares - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Conoce la historia, el portal y la estación ferroviaria de Micaela Cascallares.' }
  ]
})
</script>
