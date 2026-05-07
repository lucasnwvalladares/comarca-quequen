<template>
  <div>
    <main>
      <section class="relative h-[70vh] flex items-center justify-center bg-stone-800 overflow-hidden">
        <img src="/images/rio-quequen.jpg" alt="Río Quequén Salado" class="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent z-10"></div>
        <div class="z-20 text-center text-white px-4">
          <h2 class="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-2xl">Descubre la Belleza del Quequén Salado</h2>
          <p class="text-xl md:text-3xl max-w-3xl mx-auto drop-shadow-lg font-light">Ecoturismo, aventura y paz en el coração de la provincia de Buenos Aires.</p>
        </div>
      </section>

      <section class="container mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 class="text-4xl font-serif font-bold mb-8 text-stone-800">Bienvenidos a la Comarca</h3>
          <p class="mb-6 leading-relaxed text-xl text-stone-700">
            La Comarca del Quequén Salado es una joya emergente del sudoeste bonaerense. El río Quequén Salado, con sus barrancas y cascadas, es el protagonista de paisajes que desafían la monotonía de la llanura.
          </p>
          <p class="mb-10 leading-relaxed text-xl text-stone-700">
            Desde la histórica Micaela Cascallares hasta la desembocadura en el mar, cada rincón guarda una historia e uma aventura esperando ser descoberta.
          </p>
          <NuxtLink to="/nature" class="inline-block bg-stone-800 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-stone-700 transition-all shadow-xl hover:-translate-y-1">
            Explorar Atractivos
          </NuxtLink>
        </div>
        <div class="relative group">
          <div class="absolute -inset-4 bg-stone-200 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
          <img src="/images/rio-quequen.jpg" alt="Vista del Río Quequén Salado" class="relative rounded-xl shadow-2xl w-full h-[450px] object-cover" />
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
