<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <h2 class="text-4xl md:text-5xl font-serif font-bold mb-16 text-stone-800 text-center italic border-b-2 border-stone-200 pb-6">Naturaleza y Paisajes</h2>

      <!-- Cascada Cifuentes -->
      <section class="mb-24 grid md:grid-cols-2 gap-12 items-center">
        <div class="relative group">
          <div class="absolute -inset-2 bg-stone-200 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform shadow-lg"></div>
          <img src="/images/cascada-cifuentes.jpg" alt="Cascada Cifuentes" class="relative rounded-xl shadow-2xl w-full h-[400px] object-cover" />
          <p class="mt-4 text-sm text-stone-500 italic text-center">Cascada Cifuentes: El salto más alto de la Prov. de Buenos Aires.</p>
        </div>
        <div>
          <h3 class="text-3xl font-serif font-bold mb-6 text-stone-700 underline decoration-stone-300 decoration-4">Cascada Cifuentes</h3>
          <p class="mb-4 text-lg text-stone-700 leading-relaxed">
            Conocida también como <strong>Cascada de Aldaya</strong>, esta maravilla natural ofrece un salto de agua que oscila entre los 5 y 8 metros de altura, rodeado de barrancas rocosas y una biodiversidade única.
          </p>
          <div class="bg-stone-100 p-6 rounded-2xl border-l-8 border-stone-800 mb-6 shadow-sm">
            <h4 class="font-bold mb-2 text-stone-900 uppercase tracking-wider text-sm">📍 Acceso:</h4>
            <p class="text-stone-700 italic">Ruta Nacional N° 3, kilómetro 532. Se transita por un camino rural de ripio de 4 km hasta el mirador.</p>
          </div>
          <p class="text-stone-700">
            Es un punto clave para el avistaje de <em>cisnes de cuello negro</em> e <em>loros barranqueros</em>. Se recomienda visitar en días soleados para apreciar los arcoíris que se forman en el rocío de la caída.
          </p>
        </div>
      </section>

      <!-- Rio Quequén Salado Section -->
      <section class="mb-24">
        <div class="bg-stone-900 text-white rounded-[3rem] overflow-hidden shadow-2xl">
          <div class="relative h-[450px]">
            <img src="/images/rio-quequen.jpg" alt="El Río Quequén Salado" class="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 class="text-5xl md:text-7xl font-serif font-bold italic mb-6 drop-shadow-2xl">El Río Quequén Salado</h3>
              <p class="max-w-3xl text-xl md:text-2xl leading-relaxed opacity-90 drop-shadow-md">
                Límite natural entre Coronel Dorrego y Tres Arroyos. Un curso de agua que narra la historia geológica de la pampa a través de suas barrancas de piedra.
              </p>
            </div>
          </div>
          <div class="p-12 md:p-20">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <span class="text-4xl block mb-4">🛶</span>
                <h4 class="text-xl font-bold mb-2">Aventura</h4>
                <p class="text-stone-300">Kayak y canotaje aprovechando los saltos naturales y tramos tranquilos.</p>
              </div>
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <span class="text-4xl block mb-4">🥾</span>
                <h4 class="text-xl font-bold mb-2">Trekking</h4>
                <p class="text-stone-300">Caminatas por las cornisas de las barrancas con vistas panorámicas increíbles.</p>
              </div>
              <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <span class="text-4xl block mb-4">🎣</span>
                <h4 class="text-xl font-bold mb-2">Pesca</h4>
                <p class="text-stone-300">Riqueza ictícola ideal para la pesca deportiva sustentable de pejerrey.</p>
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
            <div class="bg-white p-2 rounded-2xl shadow-xl transform rotate-1">
              <img src="/images/puente-viejo.jpg" alt="Puente Viejo Oriente" class="rounded-xl w-full h-[300px] object-cover" />
              <div class="p-6">
                <h4 class="text-xl font-bold mb-2 text-stone-800">Puente Viejo</h4>
                <p class="text-stone-600 italic leading-snug text-sm">Vestigios de la infraestructura que alguna vez unió a las comunidades en torno a la energía del río.</p>
              </div>
            </div>
            <div class="bg-stone-50 p-8 rounded-2xl border border-stone-200">
              <p class="text-stone-700 leading-relaxed italic">
                "La Usina de Oriente (Hidroeléctrica del Sud) representa una época de oro de la industria regional. Sus ruinas, hoy integradas al paisaje natural, son un testimonio mudo de la potencia del Quequén Salado."
              </p>
            </div>
          </div>
          <div class="space-y-8 pt-12 md:pt-24">
             <div class="bg-white p-2 rounded-2xl shadow-xl transform -rotate-1">
              <img src="/images/ruinas-usina.jpg" alt="Ruinas Usina de Oriente" class="rounded-xl w-full h-[400px] object-cover" />
              <div class="p-6">
                <h4 class="text-xl font-bold mb-2 text-stone-800">Ruinas de la Usina</h4>
                <p class="text-stone-600 italic leading-snug text-sm">Un sitio cargado de mística industrial, ideal para fotógrafos e historiadores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="bg-stone-200 rounded-[3rem] p-12 md:p-20 flex flex-col items-center shadow-inner">
        <h3 class="text-3xl font-serif font-bold mb-8 text-stone-800 italic">Guía de la Región</h3>
        <img src="/images/map-quequen.jpg" alt="Mapa del Río Quequén Salado" class="rounded-2xl shadow-2xl max-w-full border-8 border-white mb-10" />
        <div class="text-center max-w-2xl">
          <p class="text-stone-600 leading-relaxed font-medium">
            Utiliza este mapa para localizar los principales puntos de interés: desde el Molino de la Rosa hasta la desembocadura en el Mar Argentino.
          </p>
        </div>
      </section>

      <div class="mt-20 text-center">
        <NuxtLink to="/legends" class="text-2xl font-serif font-bold text-stone-800 hover:text-stone-600 transition-all flex items-center justify-center gap-4 group">
           Próxima parada: Las Leyendas del Tigre <span class="group-hover:translate-x-3 transition-transform text-3xl">→</span>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Naturaleza y Patrimonio - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Explora la Cascada Cifuentes, las ruinas de la Usina de Oriente y el mapa completo del río.' }
  ]
})
</script>
