<template>
  <div class="min-h-screen bg-stone-50 font-sans text-stone-900">
    <header class="bg-stone-800 text-white p-6 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-serif font-bold italic">Comarca del Quequén Salado</NuxtLink>
        <nav class="hidden md:flex space-x-6 text-sm uppercase tracking-widest font-semibold">
          <NuxtLink to="/" class="hover:text-stone-300 transition-colors">Inicio</NuxtLink>
          <NuxtLink to="/cascallares" class="hover:text-stone-300 transition-colors text-stone-100 border-b-2 border-transparent hover:border-stone-400">Cascallares</NuxtLink>
          <NuxtLink to="/nature" class="hover:text-stone-300 transition-colors text-stone-100 border-b-2 border-transparent hover:border-stone-400">Naturaleza</NuxtLink>
          <NuxtLink to="/legends" class="hover:text-stone-300 transition-colors text-stone-100 border-b-2 border-transparent hover:border-stone-400">Leyendas</NuxtLink>
        </nav>
      </div>
    </header>

    <slot />

    <footer class="bg-stone-900 text-stone-400 py-12 px-6 mt-auto">
      <div class="container mx-auto text-center">
        <p class="mb-4">&copy; 2026 Comarca del Quequén Salado - Turismo Público y Sostenible</p>
        <p class="text-sm italic text-stone-500">Preservando el patrimonio natural y cultural del sudoeste bonaerense.</p>
      </div>
    </footer>
  </div>
</template>
