<template>
  <div>
    <main>
      <section class="relative h-[60vh] flex items-center justify-center bg-stone-400 overflow-hidden">
        <div class="absolute inset-0 bg-black/40 z-10"></div>
        <div class="z-20 text-center text-white px-4">
          <h2 class="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">Descubre la Belleza del Quequén Salado</h2>
          <p class="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">Ecoturismo, aventura y paz en el corazón de la provincia de Buenos Aires.</p>
        </div>
      </section>

      <section class="container mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-3xl font-serif font-bold mb-6 text-stone-800">Bienvenidos a la Comarca</h3>
          <p class="mb-4 leading-relaxed text-lg text-stone-700">
            La Comarca del Quequén Salado es una joya emergente del sudoeste bonaerense. El río Quequén Salado, con sus barrancas y cascadas, es el protagonista de paisajes que desafían la monotonía de la llanura.
          </p>
          <p class="mb-6 leading-relaxed text-lg text-stone-700">
            Desde la histórica Micaela Cascallares hasta la desembocadura en el mar, cada rincón guarda una historia y una aventura esperando ser descubierta.
          </p>
          <NuxtLink to="/cascallares" class="inline-block bg-stone-800 text-white px-8 py-3 rounded-md hover:bg-stone-700 transition-colors shadow-md">
            Explorar Atractivos
          </NuxtLink>
        </div>
        <div class="bg-stone-200 h-80 rounded-lg shadow-inner flex items-center justify-center text-stone-500 italic">
          [Imagen del Río Quequén Salado]
        </div>
      </section>

      <section class="bg-stone-100 py-16">
        <div class="container mx-auto px-6">
          <h3 class="text-3xl font-serif font-bold mb-12 text-center text-stone-800">Destaques Regionales</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <h4 class="text-xl font-bold mb-4">Cascada Cifuentes</h4>
              <p class="text-stone-600">El salto de agua más alto de la provincia de Buenos Aires. Una maravilla natural a pocos kilómetros de la RN3.</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <h4 class="text-xl font-bold mb-4">Micaela Cascallares</h4>
              <p class="text-stone-600">Un pueblo con alma rural, herencia ferroviaria y una tranquilidad inigualable.</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <h4 class="text-xl font-bold mb-4">Cueva del Tigre</h4>
              <p class="text-stone-600">Naturaleza y leyendas se encuentran en este refugio histórico a orillas del río.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Comarca del Quequén Salado - Ecoturismo',
  meta: [
    { name: 'description', content: 'Sitio oficial de ecoturismo de la Comarca del Quequén Salado.' }
  ]
})
</script>
