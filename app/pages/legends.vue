<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-serif font-bold mb-16 text-stone-800 text-center italic border-b-2 border-stone-200 pb-8">Historias y Leyendas</h2>

        <section class="bg-white p-8 md:p-20 rounded-[3rem] shadow-xl border border-stone-100 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-stone-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
          
          <div class="flex justify-between items-start mb-10 flex-wrap gap-4">
            <h3 class="text-4xl font-serif font-bold text-stone-800 underline decoration-stone-300 decoration-8 underline-offset-8">El Tigre del Quequén</h3>
            <a href="https://maps.app.goo.gl/TdTvaUGAnTQwP9FHA" target="_blank" class="bg-stone-800 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-stone-700 transition-all flex items-center gap-2">
              📍 Ver Cueva en el Mapa
            </a>
          </div>
          
          <div class="prose prose-stone lg:prose-xl max-w-none">
            <p class="text-xl mb-8 leading-relaxed text-stone-600 italic">
              La leyenda más famosa de la región gira en torno a <strong>Felipe Pascual Pacheco</strong>, un gaucho apodado "El Tigre del Quequén". 
            </p>

            <div class="bg-stone-50 border-l-8 border-stone-800 p-8 my-12 shadow-inner rounded-r-2xl">
              <p class="text-2xl font-serif italic text-stone-700 leading-snug">
                "Para la justicia, un criminal fugitivo. Para el pueblo, un Robin Hood de las Pampas."
              </p>
            </div>

            <p class="mb-8 text-stone-700">
              Nacido en 1828, Pacheco se convirtió en uno de los "matreros" más conocidos del sur bonaerense. Su historia es una mezcla de crónicas policiales de la época y el mito popular que lo recuerda como un hombre que desafiaba a la autoridad.
            </p>

            <div class="grid md:grid-cols-2 gap-12 my-16 items-center">
              <div>
                <h4 class="text-2xl font-bold mb-4 text-stone-800">El Refugio en las Barrancas</h4>
                <p class="text-stone-700 mb-6">
                  Pacheco utilizaba las cavernas naturales esculpidas por el río Quequén Salado como su refugio estratégico. Conocedor profundo de la geografía local, lograba evadir a la justicia por años, moviéndose silenciosamente entre las barrancas y los pajonales.
                </p>
                <p class="text-sm text-stone-500 italic">
                  La cueva se encuentra en una zona agreste de gran belleza, ideal para quienes buscan conectar con la historia viva de la pampa.
                </p>
              </div>
              <div class="bg-stone-200 aspect-[4/5] rounded-3xl flex flex-col items-center justify-center text-stone-400 p-10 text-center border-2 border-dashed border-stone-300 group hover:border-stone-400 transition-colors">
                <span class="text-5xl mb-4 opacity-30 group-hover:scale-110 transition-transform duration-500">📷</span>
                <p class="font-serif italic text-stone-500">Próximamente:<br/>Foto de la Cueva del Tigre</p>
              </div>
            </div>

            <h4 class="text-2xl font-bold mb-4 text-stone-800">La Captura</h4>
            <p class="mb-8 text-stone-700 leading-relaxed">
              Dicho refugio, que hoy lleva su nombre, era su escondite principal. Cuenta la leyenda que era imbatible en el duelo criollo y poseía una astucia casi animal para desaparecer en la naturaleza cuando era perseguido. Su captura definitiva ocurrió en 1875, tras una larga búsqueda liderada por el comisario Luis Aldaz.
            </p>
          </div>
        </section>

        <div class="mt-20 flex flex-col items-center">
          <p class="text-stone-400 uppercase tracking-widest text-sm mb-6">¿Quieres ver el entorno natural?</p>
          <NuxtLink to="/nature" class="bg-stone-800 text-white px-12 py-5 rounded-full font-bold hover:bg-stone-700 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-4">
            <span>←</span> Volver a Naturaleza
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Leyendas - Comarca del Quequén Salado',
  meta: [
    { name: 'description', content: 'Descubre la fascinante historia del Tigre del Quequén y las leyendas que habitan en las cuevas del río.' }
  ]
})
</script>
