<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <h2 class="text-4xl font-serif font-bold mb-12 text-stone-800 text-center italic">Naturaleza y Paisajes</h2>

      <!-- Cascada Cifuentes -->
      <section class="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div class="bg-stone-200 aspect-video rounded-lg flex items-center justify-center text-stone-500 italic shadow-md">
          [Imagen Cascada Cifuentes]
        </div>
        <div>
          <h3 class="text-3xl font-serif font-bold mb-6 text-stone-700 underline decoration-stone-300">Cascada Cifuentes</h3>
          <p class="mb-4 text-lg text-stone-700 leading-relaxed">
            También conocida como Cascada de Aldaya, es el salto de agua más alto de la provincia de Buenos Aires, con una altura de entre 5 y 8 metros.
          </p>
          <div class="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-400 mb-6">
            <h4 class="font-bold mb-2 text-stone-800">📍 Cómo llegar:</h4>
            <p class="text-stone-600 italic">Ruta Nacional N° 3, kilómetro 532. Se accede por un camino rural de aproximadamente 4 km.</p>
          </div>
          <p class="text-stone-700">
            Es un lugar ideal para el avistaje de aves (cisnes de cuello negro, loros barranqueros) y la práctica de actividades acuáticas como el kayak.
          </p>
        </div>
      </section>

      <!-- Rio Quequén Salado -->
      <section class="mb-20 overflow-hidden rounded-3xl shadow-2xl">
        <div class="relative h-[400px]">
          <img src="/images/rio-quequen.jpg" alt="El Río Quequén Salado" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-stone-900/40 flex items-center justify-center">
            <h3 class="text-5xl font-serif font-bold text-white italic drop-shadow-lg">El Río Quequén Salado</h3>
          </div>
        </div>
        <div class="bg-stone-800 text-white p-12">
          <div class="max-w-4xl mx-auto text-center">
            <p class="text-xl leading-relaxed mb-8 opacity-90">
              Este curso de água é o limite natural entre os partidos de Coronel Dorrego e Tres Arroyos. Suas barrancas de pedra e seus saltos naturais o convertem em um destino único para o ecoturismo aventura.
            </p>
            <div class="grid md:grid-cols-3 gap-6 text-stone-300">
              <div class="p-6 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                <span class="text-3xl block mb-3">🛶</span>
                <span class="font-bold">Kayak y Canotaje</span>
              </div>
              <div class="p-6 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                <span class="text-3xl block mb-3">🥾</span>
                <span class="font-bold">Trekking por Barrancas</span>
              </div>
              <div class="p-6 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                <span class="text-3xl block mb-3">🎣</span>
                <span class="font-bold">Pesca Deportiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Cueva del Tigre Preview (Link to Legends) -->
      <section class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-3xl font-serif font-bold mb-6 text-stone-700">Cueva del Tigre</h3>
          <p class="mb-6 text-lg text-stone-700">
            Un paraje donde la geografía caprichosa del río ha tallado cuevas naturales en las barrancas. Un sitio cargado de mística y belleza agreste.
          </p>
          <NuxtLink to="/legends" class="text-stone-800 font-bold hover:underline flex items-center gap-2">
            Descubrir la Leyenda del Tigre <span class="text-xl">→</span>
          </NuxtLink>
        </div>
        <div class="bg-stone-200 aspect-video rounded-lg flex items-center justify-center text-stone-500 italic shadow-md">
          [Imagen Cueva del Tigre]
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Naturaleza - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Explora la Cascada Cifuentes, el Río Quequén Salado y la Cueva del Tigre.' }
  ]
})
</script>
