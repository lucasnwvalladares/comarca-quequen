<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <article class="max-w-4xl mx-auto">
        <!-- Portal Image Header -->
        <div class="relative h-[400px] mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/cascallares-portal.png" alt="Portal de Entrada Micaela Cascallares" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-10">
            <h2 class="text-4xl md:text-6xl font-serif font-bold text-white italic drop-shadow-lg">Micaela Cascallares</h2>
          </div>
        </div>
        
        <div class="prose prose-stone lg:prose-xl max-w-none">
          <p class="text-xl leading-relaxed mb-8 italic text-stone-600">
            Un rincón de paz en el partido de Tres Arroyos, donde la historia rural y la calidez de su gente se fusionan con el paisaje pampeano.
          </p>

          <section class="mb-12">
            <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">📜 Historia y Origen</h3>
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p class="mb-4 text-stone-700">
                  Fundada el <strong>23 de julio de 1889</strong>, Micaela Cascallares nació del sueño de Benjamín del Castillo, quien buscaba establecer un centro agrícola modelo en estas tierras. El trazado del pueblo fue aprobado por el entonces gobernador Máximo Paz, quien nombró la localidad en honor a su madre, Micaela Cascallares.
                </p>
                <p class="text-stone-700">
                  Con la llegada del ferrocarril en 1891, el pueblo se convirtió en um polo de atracción para inmigrantes holandeses y belgas, cuyas huellas aún se perciben en la arquitectura y la cultura del lugar.
                </p>
              </div>
              <div class="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src="/images/cascallares-estacion.jpg" alt="Estación Ferroviaria de Cascallares" class="w-full h-auto" />
                <p class="bg-white p-3 text-sm text-stone-500 italic text-center">Antigua Estación de Tren (1891)</p>
              </div>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">🚉 El Patrimonio Ferroviario</h3>
            <p class="text-stone-700 mb-6">
              La estación de tren no es solo un edificio de ladrillos a la vista; es el corazón histórico que dividió al pueblo en dos y permitió su conexión con el mundo. Hoy, sus galpones y andenes son paradas obligatorias para los amantes de la fotografía histórica y el patrimonio industrial.
            </p>
          </section>

          <section class="mb-12">
            <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">🌿 Turismo Rural</h3>
            <p class="mb-6 text-stone-700">
              Cascallares invita a la "desconexión". Sus calles arboladas y su ritmo pausado son ideales para caminatas o cicloturismo.
            </p>
            <ul class="grid md:grid-cols-2 gap-4 list-none p-0">
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Biblioteca Luz y Cultura</li>
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Balneario Municipal sobre el Río</li>
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Gastronomía Regional</li>
              <li class="bg-stone-100 p-4 rounded-xl border-l-4 border-stone-400 text-stone-700 font-medium">✨ Fiestas Tradicionales de Julio</li>
            </ul>
          </section>
        </div>

        <div class="mt-16 text-center border-t border-stone-200 pt-12">
          <NuxtLink to="/" class="inline-block bg-stone-800 text-white px-10 py-4 rounded-full hover:bg-stone-700 transition-all shadow-lg hover:-translate-y-1">
            Volver al Inicio
          </NuxtLink>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Micaela Cascallares - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Conoce la historia, el portal y la estación ferroviaria de Micaela Cascallares.' }
  ]
})
</script>
