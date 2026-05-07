<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <article class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8 text-stone-800 border-b-4 border-stone-200 pb-4 italic">Micaela Cascallares</h2>
        
        <div class="prose prose-stone lg:prose-xl max-w-none">
          <p class="text-xl leading-relaxed mb-8 italic text-stone-600">
            Un rincón de paz en el partido de Tres Arroyos, onde la historia rural y a calidez de su gente se fusionan con el paisaje pampeano.
          </p>

          <section class="mb-12">
            <h3 class="text-2xl font-bold mb-4 text-stone-700">📜 Historia y Origen</h3>
            <p class="mb-4 text-stone-700">
              Fundada el 23 de julio de 1889, Micaela Cascallares nació del sueño de Benjamín del Castillo, quien buscaba establecer un centro agrícola modelo en estas tierras. El nombre rinde homenaje a la madre del entonces gobernador Máximo Paz.
            </p>
            <p class="mb-4 text-stone-700">
              La llegada del ferrocarril en 1891 marcó un antes y un después, atrayendo a inmigrantes de diversas latitudes, destacándose las comunidades holandesas y belgas que aportaron su cultura y esfuerzo al crecimiento del pueblo.
            </p>
          </section>

          <section class="mb-12 grid md:grid-cols-2 gap-8">
            <div class="bg-stone-200 aspect-video rounded-lg flex items-center justify-center text-stone-500 italic shadow-inner">
              [Foto Histórica de la Estación]
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4 text-stone-700">🚉 El Patrimonio Ferroviario</h3>
              <p class="text-stone-700">
                La antigua estação de tren es hoy un símbolo de identidade. Seus galpones y a arquitectura característica de finales del siglo XIX invitan a un viaje en el tiempo para fotógrafos y amantes del patrimonio histórico.
              </p>
            </div>
          </section>

          <section class="mb-12">
            <h3 class="text-2xl font-bold mb-4 text-stone-700">🌿 Turismo Rural y Experiencias</h3>
            <p class="mb-6 text-stone-700">
              Cascallares oferece a oportunidade de desconectarse do ruído urbano. Suas ruas tranquilas, o Balneário Municipal sobre o rio e a possibilidade de realizar cicloturismo o convertem em um destino ideal para o fim de semana.
            </p>
            <ul class="list-disc pl-6 space-y-2 text-stone-700">
              <li>Visitas à Biblioteca Luz e Cultura.</li>
              <li>Gastronomia criolla em ambientes campestres.</li>
              <li>Eventos tradicionais e desfiles gaúchos.</li>
            </ul>
          </section>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="/" class="inline-block bg-stone-800 text-white px-8 py-3 rounded-md hover:bg-stone-700 transition-colors shadow-md">
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
    { name: 'description', content: 'Conoce la historia y los atractivos de Micaela Cascallares, un pueblo con alma rural.' }
  ]
})
</script>
