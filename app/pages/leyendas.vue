<template>
  <main class="bg-stone-50">
    <section class="relative isolate overflow-hidden bg-stone-950 text-white">
      <img
        src="/images/rio-quequen.jpg"
        alt="Río Quequén Salado y sus barrancas"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/35"></div>
      <div class="container mx-auto px-6 py-20 md:py-28">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-emerald-200">Memoria oral</p>
        <h1 class="max-w-4xl font-serif text-5xl font-bold italic leading-none md:text-7xl">
          Historias y Leyendas
        </h1>
        <p class="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
          Relatos de vados, cuevas, fortines y caminos rurales que ayudan a leer la comarca más allá del mapa.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-6 py-12 md:py-16">
      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <article class="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-xl">
          <div class="relative min-h-80">
            <img
              src="/images/rio-quequen.jpg"
              alt="Barrancas del Río Quequén Salado"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 max-w-2xl p-8 text-white">
              <p class="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">Relato principal</p>
              <h2 class="font-serif text-4xl font-bold italic leading-tight md:text-5xl">El Tigre del Quequén</h2>
            </div>
          </div>

          <div class="p-7 md:p-10">
            <p class="text-lg leading-8 text-stone-600">
              La historia de Pacheco vive mejor en la guía de la Cueva del Tigre, porque el relato nace del propio lugar:
              el vado natural, las cuevas, las cascadas cercanas y el camino rural hacia Marisol.
            </p>
            <div class="mt-7 grid gap-4 md:grid-cols-3">
              <div class="rounded-lg bg-stone-50 p-4">
                <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">Lugar</p>
                <p class="mt-2 font-semibold text-stone-800">Cueva del Tigre</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-4">
                <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">Tema</p>
                <p class="mt-2 font-semibold text-stone-800">Gaucho matrero y memoria oral</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-4">
                <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">Circuito</p>
                <p class="mt-2 font-semibold text-stone-800">Oriente, Marisol y río</p>
              </div>
            </div>
            <NuxtLink
              to="/atracciones/cueva-del-tigre"
              class="mt-8 inline-flex rounded-full bg-stone-800 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-stone-700"
            >
              Ver Cueva del Tigre
            </NuxtLink>
          </div>
        </article>

        <aside class="rounded-lg border border-emerald-900/20 bg-emerald-950 p-7 text-white shadow-xl md:p-10">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">Archivo vivo</p>
          <h2 class="mt-4 font-serif text-4xl font-bold italic leading-tight">Una sección para reunir relatos</h2>
          <p class="mt-6 text-base leading-8 text-emerald-50/80">
            Esta página puede crecer como colección cultural de la comarca: historias de frontera, nombres antiguos,
            memorias ferroviarias, relatos de puentes y cuentos nacidos alrededor del río.
          </p>
          <ul class="mt-8 space-y-4 text-sm leading-6 text-emerald-50/90">
            <li class="border-t border-white/10 pt-4">Relatos vinculados a puntos visitables deben conectar con su guía.</li>
            <li class="border-t border-white/10 pt-4">Historias más generales pueden vivir aquí como archivo cultural.</li>
            <li class="border-t border-white/10 pt-4">Las fuentes y versiones se pueden comparar cuando existan diferencias.</li>
          </ul>
        </aside>
      </div>

      <section class="mt-12 grid gap-5 md:grid-cols-3">
        <NuxtLink
          to="/atracciones/cueva-del-tigre"
          class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p class="text-[11px] font-bold uppercase tracking-widest text-emerald-800">Vados y cuevas</p>
          <h3 class="mt-3 font-serif text-2xl font-bold italic text-stone-800">El paso del Tigre</h3>
          <p class="mt-4 text-sm leading-7 text-stone-600">
            La cueva, el vado y el relato de Pacheco forman una misma experiencia de paisaje y memoria.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/atracciones/fortin-marco-paz"
          class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p class="text-[11px] font-bold uppercase tracking-widest text-emerald-800">Frontera</p>
          <h3 class="mt-3 font-serif text-2xl font-bold italic text-stone-800">Fortines y caminos</h3>
          <p class="mt-4 text-sm leading-7 text-stone-600">
            Los fortines ayudan a entender cómo se ocupó, defendió y atravesó el territorio rural.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/atracciones/puente-viejo"
          class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p class="text-[11px] font-bold uppercase tracking-widest text-emerald-800">Memoria del río</p>
          <h3 class="mt-3 font-serif text-2xl font-bold italic text-stone-800">Puentes, ruinas y trabajo</h3>
          <p class="mt-4 text-sm leading-7 text-stone-600">
            El río también conserva memoria productiva: cruces, usinas, molinos y viejos pasos.
          </p>
        </NuxtLink>
      </section>

      <section class="mt-16 border-t border-stone-200 pt-8">
        <h2 class="mb-4 text-xs font-bold uppercase tracking-widest text-stone-500">Fuentes consultadas</h2>
        <ul class="space-y-2 text-sm text-stone-500">
          <li>
            <a
              href="https://dorrego.gob.ar/mun/direcciones/turismo/menu-iconos/turismo-360/puntos/cuevadeltigre.php"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-stone-300 underline-offset-4 hover:text-stone-800"
            >
              Municipalidad de Coronel Dorrego - Cueva del Tigre
            </a>
          </li>
          <li>
            <a
              href="https://www.infocielo.com/historias-bonaerenses/la-cueva-del-tigre-el-lugar-que-guarda-la-leyenda-del-gaucho-el-tigre-del-quequen-n762647"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-stone-300 underline-offset-4 hover:text-stone-800"
            >
              Infocielo - La Cueva del Tigre y la leyenda del Tigre del Quequén
            </a>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'Leyendas - Comarca Río Quequén Salado',
  meta: [
    {
      name: 'description',
      content: 'Historias, leyendas y memoria oral de la Comarca Río Quequén Salado.'
    }
  ]
})
</script>
