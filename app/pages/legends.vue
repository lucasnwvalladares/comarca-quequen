<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-serif font-bold mb-12 text-stone-800 text-center italic">Historias y Leyendas</h2>

        <section class="bg-stone-100 p-8 md:p-16 rounded-3xl shadow-sm border border-stone-200">
          <h3 class="text-3xl font-serif font-bold mb-8 text-stone-700 underline decoration-stone-400 decoration-4">El Tigre del Quequén</h3>
          
          <div class="prose prose-stone lg:prose-xl max-w-none">
            <p class="text-lg mb-6 leading-relaxed">
              La leyenda más famosa de la região gira em torno de **Felipe Pascual Pacheco**, um gaúcho apelidado de "El Tigre del Quequén". Nascido em 1828, Pacheco se tornou um dos "matreros" mais conhecidos do sul bonaerense.
            </p>

            <blockquote class="border-l-4 border-stone-800 pl-6 italic my-8 text-stone-600">
              "Para a justiça, um criminoso fugitivo. Para o povo, um Robin Hood das Pampas."
            </blockquote>

            <p class="mb-6">
              Pacheco utilizava as cavernas naturais esculpidas pelo rio Quequén Salado como seu refúgio estratégico. Conhecedor profundo da geografia local, ele conseguia evadir a justiça por anos, movendo-se silenciosamente pelas barrancas e pastagens.
            </p>

            <h4 class="text-2xl font-bold mb-4 text-stone-700">A Cueva del Tigre</h4>
            <p class="mb-6">
              A cueva (caverna) que hoje leva seu nome era seu esconderijo principal. Diz a lenda que ele era imbatível no duelo criollo e possuía uma astúcia animal para desaparecer em meio à natureza quando perseguido. Sua captura definitiva ocorreu em 1875, após anos de busca pelo comissário Luis Aldaz.
            </p>

            <div class="bg-stone-200 aspect-video rounded-xl flex items-center justify-center text-stone-500 italic mb-8 shadow-inner">
              [Ilustración o Foto de la Cueva]
            </div>

            <p>
              Hoje, a Cueva del Tigre não é apenas um monumento geológico, mas um portal para imaginar a vida épica e solitária dos gaúchos que desafiaram a autoridade na imensidão da pampa do século XIX.
            </p>
          </div>
        </section>

        <div class="mt-12 text-center">
          <NuxtLink to="/nature" class="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 font-medium">
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
    { name: 'description', content: 'Descubre la fascinante historia del Tigre del Quequén y las leyendas de la región.' }
  ]
})
</script>
