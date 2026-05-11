<template>
  <main class="container mx-auto px-6 py-20 text-center">
    <p class="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-stone-400">Sección actualizada</p>
    <h1 class="font-serif text-4xl font-bold italic text-stone-800 md:text-6xl">Atracciones</h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
      Esta página ahora se llama Atracciones para reunir naturaleza, patrimonio, mapas y ubicaciones en un solo recorrido.
    </p>
    <NuxtLink
      to="/atracciones"
      class="mt-10 inline-flex rounded-full bg-stone-800 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-stone-700"
    >
      Ir a Atracciones
    </NuxtLink>
  </main>
</template>

<script setup>
onMounted(() => {
  navigateTo('/atracciones', { replace: true })
})

useHead({
  title: 'Atracciones - Comarca Río Quequén Salado',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>
