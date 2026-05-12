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
              v-if="town.image"
              :src="resolveAssetPath(town.image)"
              :alt="town.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div v-else class="absolute inset-0 flex items-center justify-center bg-stone-100 text-center">
              <div class="mx-6 rounded-lg border border-dashed border-stone-300 bg-white/80 px-5 py-4 text-stone-500">
                <p class="text-[11px] font-bold uppercase tracking-widest">Imagen pendiente</p>
                <p class="mt-2 text-xs leading-5">Falta sumar una foto específica de esta localidad.</p>
              </div>
            </div>
            <div
              :class="[
                'absolute inset-0 transition-colors',
                town.image ? 'bg-stone-900/10 group-hover:bg-transparent' : 'bg-stone-900/0'
              ]"
            ></div>
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

        <div class="rounded-lg border border-emerald-100 bg-emerald-50 p-8 lg:col-span-3">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Lectura comarcal</p>
          <p class="mt-3 max-w-5xl text-sm leading-7 text-stone-700">
            Estas guías funcionan como bases de recorrido: algunas localidades tienen servicios y vida urbana;
            otras son pequeñas referencias rurales para entender caminos, estaciones, arroyos, parajes y accesos al Río Quequén Salado.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const hasTownSlug = computed(() => Boolean(route.params.slug))

const resolveAssetPath = (src) => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src

  const base = config.app.baseURL.replace(/\/$/, '')
  if (src.startsWith('/') && !src.startsWith(base)) {
    return `${base}${src}`
  }

  return src
}

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
    image: '',
    description: 'Pueblo turístico de tradición rural, estación ferroviaria, parroquia singular y vínculo directo con el río.'
  },
  {
    title: 'Balneario Marisol',
    slug: 'balneario-marisol',
    area: 'Partido de Coronel Dorrego',
    image: '/images/marisol-1.png',
    description: 'Villa balnearia agreste donde el río, los médanos y el Atlántico forman un paisaje de ecoturismo.'
  },
  {
    title: 'Oriente',
    slug: 'oriente',
    area: 'Partido de Coronel Dorrego',
    image: '/images/oriente-1.png',
    description: 'Pueblo rural y productivo cerca de Marisol, con vida institucional activa, feria local y acceso al tramo inferior del río.'
  },
  {
    title: 'Copetonas',
    slug: 'copetonas',
    area: 'Partido de Tres Arroyos',
    image: '',
    description: 'Pueblo turístico rural con identidad ferroviaria, museo local, fiestas populares y cercanía al Quequén Salado.'
  },
  {
    title: 'Reta',
    slug: 'reta',
    area: 'Partido de Tres Arroyos',
    image: '/images/reta-1.png',
    description: 'Balneario agreste con playa, albufera, túnel submedanal, barco hundido y una escala tranquila sobre la costa bonaerense.'
  },
  {
    title: 'Gonzales Chaves',
    slug: 'gonzales-chaves',
    area: 'Partido de Adolfo Gonzales Chaves',
    image: '',
    description: 'Ciudad cabecera sobre la RN3, nacida alrededor del ferrocarril y útil como base de servicios para la cuenca alta.'
  },
  {
    title: 'El Perdido',
    slug: 'el-perdido',
    area: 'Partido de Coronel Dorrego',
    image: '',
    description: 'Localidad ferroviaria y rural con propuestas de turismo de campo, museo, casonas antiguas y productos regionales.'
  },
  {
    title: 'Aparicio',
    slug: 'aparicio',
    area: 'Partido de Coronel Dorrego',
    image: '',
    description: 'Pequeña localidad rural nacida junto a la estación, con cooperativa agrícola, instituciones y memoria ferroviaria.'
  },
  {
    title: 'Irene',
    slug: 'irene',
    area: 'Partido de Coronel Dorrego',
    image: '',
    description: 'Paraje rural y ferroviario cercano a Cascada La Escondida, clave para leer el tramo de barrancas del Quequén Salado.'
  },
  {
    title: 'De La Garma',
    slug: 'de-la-garma',
    area: 'Partido de Adolfo Gonzales Chaves',
    image: '',
    description: 'Localidad agrícola-ganadera sobre el antiguo ramal ferroviario, con estación histórica, parroquia, teatro y vida comunitaria.'
  }
]

useHead({
  title: 'Pueblos - Comarca Río Quequén Salado',
  meta: [
    { name: 'description', content: 'Guía de pueblos y localidades vinculadas a la Comarca Río Quequén Salado.' }
  ]
})
</script>
