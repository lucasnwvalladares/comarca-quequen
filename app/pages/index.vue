<template>
  <div>
    <main>
      <!-- Hero Section -->
      <section class="relative h-[85vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <img src="/images/rio-quequen.jpg" alt="Río Quequén Salado" class="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/20 to-stone-900 z-10"></div>
        <div class="z-20 text-center text-white px-4 max-w-5xl">
          <span class="uppercase tracking-[0.3em] text-sm mb-4 block opacity-80">Bienvenidos al Sudoeste Bonaerense</span>
          <h2 class="text-6xl md:text-8xl font-serif font-bold mb-8 drop-shadow-2xl italic">Quequén Salado</h2>
          <p class="text-xl md:text-3xl max-w-3xl mx-auto drop-shadow-lg font-light leading-relaxed">
            Naturaleza virgen, historias de gauchos y el rugir de las cascadas más altas de la provincia.
          </p>
          <div class="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <NuxtLink to="/nature" class="bg-white text-stone-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-stone-200 transition-all shadow-xl">
              Explorar Paisajes
            </NuxtLink>
            <NuxtLink to="/cascallares" class="border-2 border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
              Descubrir Pueblos
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Welcome Section -->
      <section class="container mx-auto py-24 px-6 grid md:grid-cols-2 gap-20 items-center">
        <div class="relative group">
          <div class="absolute -inset-4 bg-stone-100 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform border border-stone-200 shadow-sm"></div>
          <img src="/images/rio-quequen.jpg" alt="Vista del Río Quequén Salado" class="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
          <div class="absolute -bottom-6 -right-6 bg-stone-800 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
            <p class="italic font-serif">"Un paisaje que desafía la monotonía de la llanura pampeana."</p>
          </div>
        </div>
        <div class="space-y-8">
          <h3 class="text-4xl md:text-5xl font-serif font-bold text-stone-800 leading-tight">La magia de la Comarca</h3>
          <div class="prose prose-stone lg:prose-xl">
            <p class="leading-relaxed text-stone-600">
              La Comarca del Quequén Salado es una joya emergente en el sudoeste bonaerense. El río, con sus barrancas de piedra y saltos naturales, es el protagonista de una geografía única.
            </p>
            <p class="leading-relaxed text-stone-600">
              Desde el legado ferroviario en <strong>Micaela Cascallares</strong> hasta la mística de la <strong>Cueva del Tigre</strong>, cada rincón invita a la aventura y al descanso en contacto directo con el patrimonio natural.
            </p>
          </div>
          <div class="pt-4">
            <NuxtLink to="/nature" class="group text-stone-800 font-bold text-lg flex items-center gap-3 hover:gap-5 transition-all">
              Ver todos los atractivos <span class="text-2xl transition-transform group-hover:translate-x-2">→</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Featured Cards -->
      <section class="bg-stone-100 py-24 border-y border-stone-200">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h3 class="text-4xl font-serif font-bold mb-6 text-stone-800 italic">Destacados de la Región</h3>
            <p class="text-stone-500 text-lg">Descubre los puntos más emblemáticos que hacen de esta zona un destino inigualable.</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-10">
            <!-- Cascada Cifuentes -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-200 group">
              <div class="h-64 overflow-hidden">
                <img src="/images/cascada-cifuentes.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cascada Cifuentes" />
              </div>
              <div class="p-8">
                <h4 class="text-2xl font-serif font-bold mb-4 text-stone-800">Cascada Cifuentes</h4>
                <p class="text-stone-600 mb-6 leading-relaxed">El salto de agua más alto de la provincia de Buenos Aires. Una maravilla natural a pocos kilómetros de la RN3.</p>
                <NuxtLink to="/nature" class="text-stone-400 font-bold uppercase tracking-widest text-xs hover:text-stone-800 transition-colors">Saber más</NuxtLink>
              </div>
            </div>

            <!-- Micaela Cascallares -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-200 group">
              <div class="h-64 overflow-hidden">
                <img src="/images/cascallares-portal.png" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Micaela Cascallares" />
              </div>
              <div class="p-8">
                <h4 class="text-2xl font-serif font-bold mb-4 text-stone-800">Micaela Cascallares</h4>
                <p class="text-stone-600 mb-6 leading-relaxed">Un pueblo con alma rural, herencia ferroviaria y una tranquilidad absoluta para desconectarse.</p>
                <NuxtLink to="/cascallares" class="text-stone-400 font-bold uppercase tracking-widest text-xs hover:text-stone-800 transition-colors">Saber más</NuxtLink>
              </div>
            </div>

            <!-- Cueva del Tigre -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-200 group">
              <div class="h-64 bg-stone-300 flex items-center justify-center italic text-stone-500 font-serif">
                Próximamente: Foto de la Cueva
              </div>
              <div class="p-8">
                <h4 class="text-2xl font-serif font-bold mb-4 text-stone-800">Cueva del Tigre</h4>
                <p class="text-stone-600 mb-6 leading-relaxed">Naturaleza y leyendas se encuentran en este refugio histórico de gauchos matreros a orillas del río.</p>
                <NuxtLink to="/legends" class="text-stone-400 font-bold uppercase tracking-widest text-xs hover:text-stone-800 transition-colors">Saber más</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Comarca del Quequén Salado - Ecoturismo Público',
  meta: [
    { name: 'description', content: 'Sitio oficial de ecoturismo de la Comarca del Quequén Salado. Naturaleza, cascadas e historia en Buenos Aires.' }
  ]
})
</script>
