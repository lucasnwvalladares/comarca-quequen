<template>
  <NuxtPage v-if="hasAttractionSlug" />
  <main v-else class="bg-stone-50">
    <section class="relative isolate overflow-hidden bg-stone-950 text-white">
      <img
        src="/images/cascada-cifuentes.jpg"
        alt="Cascada Cifuentes en el Río Quequén Salado"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/30"></div>
      <div class="container mx-auto px-6 py-20 md:py-28">
        <div class="max-w-4xl">
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-emerald-200">Ecoturismo y patrimonio</p>
          <h1 class="font-serif text-5xl font-bold italic leading-none md:text-7xl">
            Atracciones de la Comarca
          </h1>
          <p class="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            Cascadas, cuevas, puentes, fortines y pueblos ribereños organizan un recorrido donde el Río Quequén Salado
            es paisaje, aventura e historia viva.
          </p>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-12 md:py-16">
      <div class="mb-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
        >
          <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ stat.label }}</p>
          <p class="mt-2 font-serif text-4xl font-bold italic text-stone-800">{{ stat.value }}</p>
          <p class="mt-2 text-sm leading-6 text-stone-500">{{ stat.description }}</p>
        </article>
      </div>

      <div class="sticky top-28 z-30 mx-auto mb-12 flex max-w-xl rounded-lg border border-stone-200 bg-white p-1 shadow-lg shadow-stone-900/5" role="tablist" aria-label="Tipos de atracciones">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :class="[
            'flex-1 rounded-md px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors',
            activeTab === tab.id ? 'bg-stone-800 text-white' : 'text-stone-500 hover:bg-stone-100 hover:text-stone-800'
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <section class="mt-16">
        <div class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">{{ activeMap.listEyebrow }}</p>
            <h2 class="font-serif text-4xl font-bold italic text-stone-800">{{ activeMap.listTitle }}</h2>
          </div>
          <p class="max-w-2xl text-sm leading-6 text-stone-500">
            Cada tarjeta muestra su número o letra en el mapa, una lectura turística del lugar y un acceso directo a Google Maps. El mapa completo queda al final del bloque para ubicar el circuito con más contexto.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in activeAttractions"
            :key="`${activeTab}-${item.marker}`"
            class="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <NuxtLink :to="`/atracciones/${item.slug}`" class="group relative block h-56 w-full overflow-hidden text-left">
              <img
                :src="resolveAssetPath(item.image)"
                :alt="item.imageAlt || item.name"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/10 to-transparent"></div>
              <span
                :class="[
                  'absolute left-5 top-5 inline-flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-black text-stone-950 shadow-lg',
                  activeTab === 'natural' ? 'bg-lime-200' : item.kind === 'fort' ? 'bg-rose-300' : 'bg-amber-300'
                ]"
              >
                {{ item.marker }}
              </span>
              <span class="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-700">
                {{ item.mapRef }}
              </span>
            </NuxtLink>

            <div class="p-6">
              <p class="mb-2 text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ item.area }}</p>
              <NuxtLink :to="`/atracciones/${item.slug}`" class="block">
                <h3 class="font-serif text-2xl font-bold italic leading-tight text-stone-800 transition hover:text-emerald-800">{{ item.name }}</h3>
              </NuxtLink>
              <p class="mt-4 text-sm leading-7 text-stone-600">{{ item.description }}</p>

              <dl class="mt-5 grid gap-3 border-t border-stone-100 pt-5 text-sm">
                <div>
                  <dt class="text-[11px] font-bold uppercase tracking-widest text-stone-400">Experiencia</dt>
                  <dd class="mt-1 font-semibold leading-6 text-stone-700">{{ item.experience }}</dd>
                </div>
                <div>
                  <dt class="text-[11px] font-bold uppercase tracking-widest text-stone-400">Acceso</dt>
                  <dd class="mt-1 font-semibold leading-6 text-stone-700">{{ item.access }}</dd>
                </div>
              </dl>

              <div class="mt-6 flex flex-wrap gap-3">
                <NuxtLink
                  :to="`/atracciones/${item.slug}`"
                  class="rounded-full bg-emerald-800 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-emerald-700"
                >
                  Ver guía
                </NuxtLink>
                <a
                  :href="item.mapUrl || mapSearchUrl(item.mapQuery)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="rounded-full bg-stone-800 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-stone-700"
                >
                  Ver ubicación
                </a>
                <button
                  type="button"
                  class="rounded-full border border-stone-300 px-5 py-3 text-xs font-bold uppercase tracking-widest text-stone-600 transition hover:bg-stone-100"
                  @click="openLightbox(activeMap.image, activeMap.alt)"
                >
                  Ver en mapa
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="mt-16 grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
        <button
          type="button"
          class="group relative overflow-hidden rounded-lg border-8 border-white bg-white text-left shadow-2xl"
          @click="openLightbox(activeMap.image, activeMap.alt)"
        >
          <img
            :src="resolveAssetPath(activeMap.image)"
            :alt="activeMap.alt"
            class="w-full transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <span class="absolute bottom-4 left-4 rounded-full bg-stone-950/80 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
            Ampliar mapa
          </span>
        </button>

        <div class="space-y-6">
          <div>
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">{{ activeMap.eyebrow }}</p>
            <h2 class="font-serif text-4xl font-bold italic leading-tight text-stone-800">
              {{ activeMap.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-stone-600">
              {{ activeMap.description }}
            </p>
          </div>

          <div class="rounded-lg border border-emerald-100 bg-emerald-50 p-6 text-sm leading-7 text-emerald-950">
            {{ activeMap.note }}
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <a
              :href="activeMap.mapHref"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-lg bg-stone-800 px-5 py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-stone-700"
            >
              Abrir zona en Maps
            </a>
            <NuxtLink
              to="/pueblos"
              class="rounded-lg border border-stone-300 px-5 py-4 text-center text-sm font-bold uppercase tracking-widest text-stone-700 transition hover:bg-white"
            >
              Ver pueblos base
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Base de visita</p>
          <h2 class="font-serif text-3xl font-bold italic text-stone-800">Pueblos para armar el recorrido</h2>
          <p class="mt-4 text-sm leading-7 text-stone-600">
            Las atracciones se entienden mejor como circuito: pueblos, caminos rurales, río y costa. Conviene elegir una base
            y confirmar accesos antes de salir.
          </p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <NuxtLink
            v-for="town in linkedTowns"
            :key="town.name"
            :to="town.to"
            class="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ town.area }}</p>
            <h3 class="mt-2 font-serif text-2xl font-bold italic text-stone-800">{{ town.name }}</h3>
            <p class="mt-3 text-sm leading-6 text-stone-500">{{ town.description }}</p>
          </NuxtLink>
        </div>
      </section>

      <section class="mt-16 rounded-lg border border-amber-200 bg-amber-50 p-7">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Antes de salir</p>
        <p class="mt-3 max-w-5xl text-sm leading-7 text-stone-700">
          Muchos puntos están sobre caminos rurales, riberas o campos privados. Las ubicaciones abren búsquedas orientativas en
          Google Maps; para visitar cascadas, cuevas o pasos del río, confirmá permisos, clima, estado de caminos y operadores locales.
        </p>
      </section>

      <section class="mt-16 border-t border-stone-200 pt-8">
        <h2 class="mb-4 text-xs font-bold uppercase tracking-widest text-stone-500">Fuentes consultadas</h2>
        <ul class="space-y-2 text-sm text-stone-500">
          <li v-for="source in sources" :key="source.url">
            <a :href="source.url" target="_blank" rel="noopener noreferrer" class="underline decoration-stone-300 underline-offset-4 hover:text-stone-800">
              {{ source.label }}
            </a>
          </li>
        </ul>
      </section>
    </section>

    <ImageLightbox
      :is-open="isLightboxOpen"
      :src="lightboxSrc"
      :alt="lightboxAlt"
      @close="isLightboxOpen = false"
    />
  </main>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const hasAttractionSlug = computed(() => Boolean(route.params.slug))

const resolveAssetPath = (src) => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src

  const base = config.app.baseURL.replace(/\/$/, '')
  if (src.startsWith('/') && !src.startsWith(base)) {
    return `${base}${src}`
  }

  return src
}

const tabs = [
  { id: 'natural', label: 'Naturales' },
  { id: 'historical', label: 'Históricas' }
]

const activeTab = ref('natural')
const isLightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')

const mapSearchUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

const openLightbox = (src, alt) => {
  lightboxSrc.value = resolveAssetPath(src)
  lightboxAlt.value = alt
  isLightboxOpen.value = true
}

const mapOverview = {
  natural: {
    image: '/images/map-nature.png',
    alt: 'Mapa de atracciones naturales de la Comarca Río Quequén Salado',
    eyebrow: 'Mapa natural',
    title: 'Cascadas, desembocaduras y barrancas',
    description: 'El mapa verde concentra el circuito más escénico: saltos de agua, pasos del río, cuevas, estuario y sectores de gran valor paisajístico.',
    note: 'Ideal para visitas guiadas, fotografía, caminatas de bajo impacto y lectura del paisaje. Algunos accesos requieren permiso o acompañamiento local.',
    mapHref: mapSearchUrl('Río Quequén Salado Cascada Cifuentes Cascada Mulpunleufu Balneario Marisol Buenos Aires Argentina'),
    listEyebrow: 'Atracciones naturales',
    listTitle: 'El río como experiencia'
  },
  historical: {
    image: '/images/map-regional.png',
    alt: 'Mapa regional de atracciones históricas de la Comarca Río Quequén Salado',
    eyebrow: 'Mapa regional',
    title: 'Puentes, molinos, fortines y memoria rural',
    description: 'El mapa regional muestra cómo se atravesó, defendió y trabajó el territorio: cruces del río, antiguos pasos, ruinas productivas y referencias de frontera.',
    note: 'Funciona como una ruta de interpretación histórica. Varios puntos combinan patrimonio, paisaje y caminos rurales, por eso conviene planificar por zonas.',
    mapHref: mapSearchUrl('Puente Viejo Oriente Copetonas Río Quequén Salado Buenos Aires Argentina'),
    listEyebrow: 'Atracciones históricas',
    listTitle: 'El río como memoria'
  }
}

const sharedImages = {
  waterfall: '/images/cascada-cifuentes.jpg',
  river: '/images/rio-quequen.jpg',
  natureMap: '/images/map-nature.png',
  bridge: '/images/puente-viejo.jpg',
  ruins: '/images/ruinas-usina.jpg',
  regionalMap: '/images/map-regional.png',
  quequenMap: '/images/map-quequen.jpg'
}

const naturalAttractions = [
  {
    marker: '1',
    mapRef: 'Mapa natural 1',
    name: 'Desembocadura A. Pillahuinco',
    slug: 'desembocadura-pillahuinco',
    area: 'Cuenca alta',
    image: sharedImages.river,
    imageAlt: 'Paisaje fluvial del Quequén Salado',
    description: 'Referencia del tramo alto del circuito natural, donde el sistema de arroyos ayuda a leer la cuenca antes de que el Quequén Salado gane volumen y barrancas.',
    experience: 'Lectura de cuenca, observación del paisaje rural y orientación del recorrido.',
    access: 'Referencia cartográfica; confirmar caminos rurales y permisos.',
    mapQuery: 'Arroyo Pillahuinco Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '2',
    mapRef: 'Mapa natural 2',
    name: 'Cascada Majidic',
    slug: 'cascada-majidic',
    area: 'Circuito de cascadas',
    image: sharedImages.waterfall,
    imageAlt: 'Salto de agua en el Río Quequén Salado',
    description: 'Salto indicado en el mapa natural dentro del corredor de cascadas. Es parte de los puntos que vuelven singular al Quequén Salado frente a la llanura pampeana.',
    experience: 'Fotografía, caminata corta y contemplación del salto cuando el caudal acompaña.',
    access: 'Consultar acceso local, estado de caminos y autorización previa.',
    mapUrl: 'https://maps.app.goo.gl/AUVCCe1m3LAPipJQ9',
    mapQuery: 'Cascada Majidic Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '3',
    mapRef: 'Mapa natural 3',
    name: 'Cascada Reta',
    slug: 'cascada-reta',
    area: 'Tramo inferior',
    image: sharedImages.natureMap,
    imageAlt: 'Mapa de atracciones naturales del Quequén Salado',
    description: 'Punto del mapa asociado al corredor hacia Reta y al tramo inferior del río. Es útil para planificar una lectura completa entre cascadas, pueblos y costa.',
    experience: 'Orientación de circuito, paisaje ribereño y recorridos con guía.',
    access: 'Usar como referencia de mapa; validar llegada exacta con prestadores.',
    mapQuery: 'Cascada Reta Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '4',
    mapRef: 'Mapa natural 4',
    name: 'Cascada La Escondida',
    slug: 'cascada-la-escondida',
    area: 'Cercanías de Irene',
    image: sharedImages.waterfall,
    imageAlt: 'Cascada escalonada del Quequén Salado',
    description: 'Salto cercano a la localidad de Irene. La guía turística de Coronel Dorrego la describe como una cascada escalonada de aproximadamente cuatro metros de altura.',
    experience: 'Barrancas, salto escalonado y fotografía de naturaleza.',
    access: 'Confirmar caminos rurales, caudal y permisos de ingreso.',
    mapUrl: 'https://www.google.com.ar/maps/place/Cascada+%22La+Escondida%22/@-38.544804,-60.6099966,753m/data=!3m1!1e3!4m5!3m4!1s0x959287f428cca1f1:0xf90b2974a7641be3!8m2!3d-38.5444037!4d-60.6099318',
    mapQuery: 'Cascada La Escondida Irene Coronel Dorrego Buenos Aires Argentina'
  },
  {
    marker: '5',
    mapRef: 'Mapa natural 5',
    name: 'Cascada Cifuentes',
    slug: 'cascada-cifuentes',
    area: 'RN3 km 532',
    image: sharedImages.waterfall,
    imageAlt: 'Cascada Cifuentes',
    description: 'También conocida como Cascada de Aldaya, es uno de los accidentes geográficos más imponentes del río y alcanza el salto de agua más alto de la provincia de Buenos Aires.',
    experience: 'El gran icono natural: agua, barrancas, escala y fotografía.',
    access: 'Ruta Nacional 3 km 532, camino rural y descenso caminando, según turismo municipal.',
    mapUrl: 'https://www.google.com.ar/maps/place/Cascada+Cifuentes/@-38.6271732,-60.607096,820m/data=!3m2!1e3!4b1!4m5!3m4!1s0x95928042751ec1e1:0x4bff4e74ee1333eb!8m2!3d-38.6271732!4d-60.6054509',
    mapQuery: 'Cascada Cifuentes Río Quequén Salado Coronel Dorrego Buenos Aires Argentina'
  },
  {
    marker: '6',
    mapRef: 'Mapa natural 6',
    name: 'Cascada Mulpunleufú',
    slug: 'cascada-mulpunleufu',
    area: 'Corredor de Oriente',
    image: sharedImages.waterfall,
    imageAlt: 'Cascada sobre el Río Quequén Salado',
    description: 'Su nombre indígena también se asocia al río. La referencia turística señala una altura cercana a tres metros y un ancho aproximado de 160 metros.',
    experience: 'Panorámica amplia del río, sonido de agua y lectura geológica.',
    access: 'Recomendable con operador local por caminos rurales y sectores ribereños.',
    mapQuery: 'Cascada Mulpunleufu Oriente Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '7',
    mapRef: 'Mapa natural 7',
    name: 'Cascada “V”',
    slug: 'cascada-v',
    area: 'Tramo de cascadas',
    image: sharedImages.natureMap,
    imageAlt: 'Detalle del mapa natural de la comarca',
    description: 'Referencia cartográfica dentro del tramo de saltos. Su valor está en completar el circuito de cascadas y mostrar la variedad de formas del cauce.',
    experience: 'Punto de interpretación del mapa, ideal para recorridos guiados.',
    access: 'No salir sin información local actualizada sobre ingreso y seguridad.',
    mapQuery: 'Cascada V Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '8',
    mapRef: 'Mapa natural 8',
    name: 'Cascada C. del Tigre',
    slug: 'cascada-cueva-del-tigre',
    area: 'Entorno de Cueva del Tigre',
    image: sharedImages.river,
    imageAlt: 'Barrancas del Río Quequén Salado',
    description: 'Sector próximo al paraje de la Cueva del Tigre, donde el paisaje natural se mezcla con cuevas, pasos antiguos y relatos populares del río.',
    experience: 'Agua, barrancas, leyenda y caminata interpretativa.',
    access: 'Aproximadamente en el entorno de Oriente-Marisol; confirmar desvíos y permisos.',
    mapUrl: 'https://maps.app.goo.gl/9T5pQuv6KUUXWVoR7',
    mapQuery: 'Cueva del Tigre Río Quequén Salado Coronel Dorrego Buenos Aires Argentina'
  },
  {
    marker: '9',
    mapRef: 'Mapa natural 9',
    name: 'La Boca',
    slug: 'la-boca',
    area: 'Balneario Marisol',
    image: sharedImages.river,
    imageAlt: 'Río Quequén Salado cerca de su desembocadura',
    description: 'Lugar donde el Río Quequén Salado vierte sus aguas en el Mar Argentino. Es un punto clave para entender el encuentro entre río, dunas, playa y estuario.',
    experience: 'Atardeceres, fotografía, observación del estuario y caminatas costeras.',
    access: 'Desde Balneario Marisol; revisar clima, marea y condiciones del camino.',
    mapUrl: 'https://www.google.com.ar/maps/@-38.9256067,-60.510702,2747m/data=!3m1!1e3',
    mapQuery: 'La Boca Balneario Marisol Río Quequén Salado Buenos Aires Argentina'
  }
]

const historicalAttractions = [
  {
    marker: '1',
    mapRef: 'Mapa regional 1',
    name: 'Puente Ruta 85',
    slug: 'puente-ruta-85',
    area: 'Acceso norte',
    image: sharedImages.regionalMap,
    imageAlt: 'Mapa regional del Quequén Salado',
    description: 'Cruce vial del tramo norte del mapa regional, importante para orientar recorridos entre Coronel Pringles, Indio Rico y los pasos del río.',
    experience: 'Punto de orientación para armar circuito desde Indio Rico.',
    access: 'Ruta Provincial 85 y caminos de enlace; manejar con precaución.',
    mapUrl: 'https://maps.app.goo.gl/M7z3W9iTSw9LVhWf6',
    mapQuery: 'Puente Ruta 85 Río Quequén Salado Coronel Pringles Buenos Aires Argentina'
  },
  {
    marker: '2',
    mapRef: 'Mapa regional 2',
    name: 'Puente Vanoli',
    slug: 'puente-vanoli',
    area: 'Corredor del río',
    image: sharedImages.bridge,
    imageAlt: 'Puente rural sobre el Quequén Salado',
    description: 'Puente del circuito regional mencionado como referencia para pensar senderos, conservación y actividades turístico-recreativas sobre el río.',
    experience: 'Cruce rural, lectura del cauce y conexión entre tramos del recorrido.',
    access: 'Confirmar estado del camino y circulación permitida.',
    mapQuery: 'Puente Vanoli Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '3',
    mapRef: 'Mapa regional 3',
    name: 'Puente Cascallares',
    slug: 'puente-cascallares',
    area: 'Micaela Cascallares',
    image: sharedImages.bridge,
    imageAlt: 'Puente histórico en el corredor del río',
    description: 'Referencia de cruce vinculada a Micaela Cascallares y a los caminos rurales que conectan el paisaje agropecuario con el Quequén Salado.',
    experience: 'Paisaje rural, escala tranquila y conexión con el pueblo ferroviario.',
    access: 'Tomar a Cascallares como base y consultar caminos locales.',
    mapUrl: 'https://maps.app.goo.gl/SuTeHfSTYuKqrcMQ8',
    mapQuery: 'Puente Cascallares Río Quequén Salado Micaela Cascallares Buenos Aires Argentina'
  },
  {
    marker: '4',
    mapRef: 'Mapa regional 4',
    name: 'Molino de las Rosas',
    slug: 'molino-de-las-rosas',
    area: 'Paso histórico',
    image: sharedImages.ruins,
    imageAlt: 'Ruinas productivas junto al Quequén Salado',
    description: 'Antiguo molino harinero ubicado cerca del paso natural donde se recuerda la pulpería “La Rosa del Sud”, una pieza de la memoria productiva del siglo XIX.',
    experience: 'Historia productiva, paso natural y relato de frontera.',
    access: 'Referencia patrimonial; visitar con información local actualizada.',
    mapQuery: 'Molino Las Rosas Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '5',
    mapRef: 'Mapa regional 5',
    name: 'Puente Ruta Nacional 3',
    slug: 'puente-ruta-nacional-3',
    area: 'RN3',
    image: sharedImages.bridge,
    imageAlt: 'Cruce del Río Quequén Salado',
    description: 'Cruce principal de la Ruta Nacional 3 sobre el Quequén Salado. Es clave para acceder al corredor de Cascada Cifuentes y otros puntos cercanos.',
    experience: 'Entrada práctica al circuito de cascadas y pueblos rurales.',
    access: 'Ruta Nacional 3; extremar cuidado al detenerse o tomar caminos laterales.',
    mapUrl: 'https://maps.app.goo.gl/j5VsN25ERLr6eoSH8',
    mapQuery: 'Puente Ruta Nacional 3 Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '6',
    mapRef: 'Mapa regional 6',
    name: 'Puente Nuevo',
    slug: 'puente-nuevo',
    area: 'Acceso a Oriente',
    image: sharedImages.bridge,
    imageAlt: 'Puente sobre el Río Quequén Salado',
    description: 'Construido en 1962, se reconoce por su arco y por unir la Ruta Nacional 3 con el acceso pavimentado hacia Oriente.',
    experience: 'Arquitectura vial, panorámica del río y acceso al tramo inferior.',
    access: 'Acceso pavimentado entre RN3 y Oriente.',
    mapUrl: 'https://www.google.com.ar/maps/place/Puente+Nuevo/@-38.7182993,-60.5768097,819m/data=!3m2!1e3!4b1!4m5!3m4!1s0x958d81f921337397:0xc6d4be9d362e43b5!8m2!3d-38.7182993!4d-60.5751656',
    mapQuery: 'Puente Nuevo Oriente Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '7',
    mapRef: 'Mapa regional 7',
    name: 'Puente Viejo',
    slug: 'puente-viejo',
    area: 'Oriente - Copetonas',
    image: sharedImages.bridge,
    imageAlt: 'Puente Viejo del Quequén Salado',
    description: 'Paraje entre Oriente y Copetonas, con panorámicas del río, una represa, el puente ferroviario y restos de fábrica de cal y usina hidroeléctrica.',
    experience: 'Uno de los puntos más completos: paisaje, ruinas, agua y fotografía.',
    access: 'Consultar condiciones; propicio para turismo aventura con prestadores.',
    mapUrl: 'https://www.google.com.ar/maps/place/Puente+Viejo/@-38.7350686,-60.5735274,819m/data=!3m2!1e3!4b1!4m5!3m4!1s0x958d820de823f3a1:0xaf1aebf6311a0111!8m2!3d-38.7350686!4d-60.5718829',
    mapQuery: 'Puente Viejo Oriente Copetonas Río Quequén Salado Buenos Aires Argentina'
  },
  {
    marker: '8',
    mapRef: 'Mapa regional 8',
    name: 'Cueva del Tigre',
    slug: 'cueva-del-tigre',
    area: 'Camino a Marisol',
    image: sharedImages.ruins,
    imageAlt: 'Barrancas y cuevas del Quequén Salado',
    description: 'Antiguo vado natural de carretas y viajeros. A pocos metros se observan cuevas y cascadas asociadas a la leyenda de Félix Pacheco, “El Tigre del Quequén”.',
    experience: 'Relato oral, cuevas, barrancas y memoria del Tigre del Quequén.',
    access: 'A unos 10 km de Oriente hacia Marisol, con desvío rural; confirmar permiso.',
    mapUrl: 'https://maps.app.goo.gl/9T5pQuv6KUUXWVoR7',
    mapQuery: 'Cueva del Tigre Río Quequén Salado Coronel Dorrego Buenos Aires Argentina'
  },
  {
    marker: 'A',
    mapRef: 'Mapa regional A',
    name: 'Fortín Marco Paz',
    slug: 'fortin-marco-paz',
    area: 'Frontera histórica',
    image: sharedImages.regionalMap,
    imageAlt: 'Mapa de fortines de la comarca',
    description: 'Punto de la antigua frontera señalado en el mapa regional. Ayuda a entender la ocupación territorial y la defensa de caminos rurales en el siglo XIX.',
    experience: 'Interpretación histórica y lectura territorial.',
    access: 'Referencia de mapa; visitar con guía o información municipal.',
    mapUrl: 'https://maps.app.goo.gl/m7BfAsg6iFNUpK927',
    mapQuery: 'Fortín Marco Paz Río Quequén Salado Buenos Aires Argentina',
    kind: 'fort'
  },
  {
    marker: 'B',
    mapRef: 'Mapa regional B',
    name: 'Fortín Buenos Aires',
    slug: 'fortin-buenos-aires',
    area: 'Frontera histórica',
    image: sharedImages.regionalMap,
    imageAlt: 'Mapa regional de atracciones históricas',
    description: 'Referencia histórica del corredor del Quequén Salado, ligada a la red de vigilancia, caminos y ocupación rural del sudoeste bonaerense.',
    experience: 'Contexto de frontera, caminos antiguos y memoria regional.',
    access: 'Referencia cartográfica; confirmar ubicación exacta antes de salir.',
    mapUrl: 'https://maps.app.goo.gl/cBk9GRkcDKRghEFC8',
    mapQuery: 'Fortín Buenos Aires Río Quequén Salado Buenos Aires Argentina',
    kind: 'fort'
  },
  {
    marker: 'C',
    mapRef: 'Mapa regional C',
    name: 'Fortín Argentino',
    slug: 'fortin-argentino',
    area: 'Cascallares - Molino de las Rosas',
    image: sharedImages.regionalMap,
    imageAlt: 'Mapa regional con Fortín Argentino',
    description: 'Hito de frontera indicado junto al sector de Cascallares y el Molino de las Rosas, dentro del circuito patrimonial de la comarca.',
    experience: 'Complemento histórico para recorrer Cascallares y los pasos del río.',
    access: 'Referencia de mapa; requiere planificación local.',
    mapUrl: 'https://maps.app.goo.gl/gmww2LPJBeJhMkQJ9',
    mapQuery: 'Fortín Argentino Micaela Cascallares Río Quequén Salado Buenos Aires Argentina',
    kind: 'fort'
  }
]

const stats = [
  {
    label: 'Mapa natural',
    value: naturalAttractions.length,
    description: 'puntos entre cascadas, desembocaduras, cuevas y sectores ribereños.'
  },
  {
    label: 'Mapa histórico',
    value: historicalAttractions.length,
    description: 'referencias entre puentes, ruinas, fortines y pasos antiguos.'
  },
  {
    label: 'Recorrido base',
    value: '3',
    description: 'pueblos destacados para dormir, comer o empezar una salida.'
  }
]

const linkedTowns = [
  {
    name: 'Micaela Cascallares',
    area: 'Tres Arroyos',
    description: 'Base rural para el tramo de Cascallares, puentes y memoria ferroviaria.',
    to: '/pueblos/micaela-cascallares'
  },
  {
    name: 'Indio Rico',
    area: 'Coronel Pringles',
    description: 'Puerta de entrada al norte del mapa regional y a la tradición rural.',
    to: '/pueblos/indio-rico'
  },
  {
    name: 'Balneario Marisol',
    area: 'Coronel Dorrego',
    description: 'Base costera para La Boca, la desembocadura y los recorridos hacia Oriente.',
    to: '/pueblos/balneario-marisol'
  }
]

const sources = [
  {
    label: 'Municipalidad de Coronel Dorrego - Parajes turísticos del río',
    url: 'https://dorrego.gob.ar/mun/direcciones/turismo/menu/el-rio/parajes-turisticos.php'
  },
  {
    label: 'Municipalidad de Coronel Dorrego - Actividades en Marisol',
    url: 'https://dorrego.gob.ar/mun/direcciones/turismo/menu/la-playa/actividades.php'
  },
  {
    label: 'Municipio de Coronel Pringles - Turismo rural',
    url: 'https://coronelpringles.gov.ar/turismo/rural.html'
  },
  {
    label: 'Turismo Tres Arroyos - Cascallares',
    url: 'https://turismo.tresarroyos.gov.ar/category/rural/cascallares/'
  }
]

const activeMap = computed(() => mapOverview[activeTab.value])
const activeAttractions = computed(() => (
  activeTab.value === 'natural' ? naturalAttractions : historicalAttractions
))

useHead({
  title: 'Atracciones - Comarca Río Quequén Salado',
  meta: [
    {
      name: 'description',
      content: 'Atracciones naturales e históricas de la Comarca Río Quequén Salado, con mapas, imágenes, datos de acceso y ubicaciones.'
    }
  ]
})
</script>
