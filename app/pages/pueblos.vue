<template>
  <NuxtPage v-if="hasTownSlug" />
  <div v-else>
    <main class="container mx-auto px-6 py-12">
      <div class="mx-auto mb-16 max-w-6xl text-center">
        <h2 class="mb-6 font-serif text-4xl font-bold uppercase italic tracking-tight text-stone-800 md:text-6xl">
          Pueblos de la Comarca
        </h2>
        <p class="mx-auto max-w-3xl text-xl leading-relaxed text-stone-600">
          Descubre la calidez rural, la memoria ferroviaria y los paisajes que conectan a cada localidad con el Río Quequén Salado.
        </p>
      </div>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="town in towns"
          :key="town.slug"
          :to="`/pueblos/${town.slug}`"
          class="group flex flex-col overflow-hidden rounded-lg border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="town.image"
              :alt="town.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-stone-900/10 transition-colors group-hover:bg-transparent"></div>
          </div>
          <div class="flex flex-grow flex-col p-8">
            <p class="mb-3 text-xs font-bold uppercase tracking-widest text-stone-400">{{ town.area }}</p>
            <h3 class="mb-3 font-serif text-3xl font-bold italic text-stone-800 transition-colors group-hover:text-stone-600">
              {{ town.title }}
            </h3>
            <p class="mb-6 text-sm leading-relaxed text-stone-500">{{ town.description }}</p>
            <div class="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 transition-colors group-hover:text-stone-800">
              <span>Ver guía</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </NuxtLink>

        <div class="rounded-lg border-2 border-dashed border-stone-200 bg-stone-100 p-10 lg:col-span-2">
          <h3 class="mb-4 font-serif text-2xl font-bold italic text-stone-500">Otras localidades de referencia</h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="town in otherTowns"
              :key="town"
              class="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-bold text-stone-400"
            >
              {{ town }}
            </span>
          </div>
          <p class="mt-6 text-sm italic text-stone-400">
            La comarca también se lee a través de sus parajes, accesos rurales y pueblos vecinos.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const route = useRoute()

const hasTownSlug = computed(() => Boolean(route.params.slug))

const towns = [
  {
    title: 'Micaela Cascallares',
    slug: 'micaela-cascallares',
    area: 'Partido de Tres Arroyos',
    image: '/images/cascallares-portal.png',
    description: 'Portal rural sobre la RN3, con memoria ferroviaria, vida comunitaria y acceso cercano al Quequén Salado.'
  },
  {
    title: 'Indio Rico',
    slug: 'indio-rico',
    area: 'Partido de Coronel Pringles',
    image: '/images/map-regional.png',
    description: 'Pueblo turístico de tradición rural, estación ferroviaria, parroquia singular y vínculo directo con el río.'
  },
  {
    title: 'Balneario Marisol',
    slug: 'balneario-marisol',
    area: 'Partido de Coronel Dorrego',
    image: '/images/rio-quequen.jpg',
    description: 'Villa balnearia agreste donde el río, los médanos y el Atlántico forman un paisaje de ecoturismo.'
  }
]

const otherTowns = ['Oriente', 'Copetonas', 'Reta', 'Gonzales Chaves', 'El Perdido', 'Aparicio', 'Irene', 'De La Garma']

useHead({
  title: 'Pueblos - Comarca Río Quequén Salado',
  meta: [
    { name: 'description', content: 'Guía de pueblos y localidades vinculadas a la Comarca Río Quequén Salado.' }
  ]
})
</script>
