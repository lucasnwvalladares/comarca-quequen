<template>
  <main>
    <article v-if="attraction" class="bg-stone-50">
      <section class="relative isolate overflow-hidden bg-stone-950 text-white">
        <img
          v-if="heroImage"
          :src="resolveAssetPath(heroImage)"
          :alt="heroAlt"
          class="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/35"></div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-stone-950 to-transparent"></div>

        <div class="container mx-auto px-6 py-16 md:py-24">
          <NuxtLink
            to="/atracciones"
            class="mb-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur transition hover:bg-white/20 hover:text-white"
          >
            <span aria-hidden="true">&larr;</span>
            Atracciones
          </NuxtLink>

          <div class="max-w-5xl">
            <div class="mb-5 flex flex-wrap items-center gap-3">
              <span
                v-if="attraction.marker"
                :class="[
                  'inline-flex h-12 min-w-12 items-center justify-center rounded-full px-4 text-base font-black text-stone-950 shadow-lg',
                  attraction.category === 'natural' ? 'bg-lime-200' : attraction.category === 'historical' ? 'bg-amber-300' : 'bg-rose-300'
                ]"
              >
                {{ attraction.marker }}
              </span>
              <span class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-100 backdrop-blur">
                {{ categoryLabel }}
              </span>
              <span v-if="attraction.mapRef" class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/70 backdrop-blur">
                {{ attraction.mapRef }}
              </span>
            </div>

            <p v-if="attraction.area" class="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-emerald-200">
              {{ attraction.area }}
            </p>
            <h1 class="font-serif text-5xl font-bold italic leading-none text-white md:text-7xl">
              {{ attraction.title }}
            </h1>
            <p v-if="attraction.description" class="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              {{ attraction.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-6 py-12 md:py-16">
        <div v-if="quickFacts.length" class="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="fact in quickFacts"
            :key="fact.label"
            class="rounded-lg border border-stone-200 bg-white p-5 shadow-lg shadow-stone-900/5"
          >
            <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ fact.label }}</p>
            <p class="mt-2 text-lg font-bold leading-snug text-stone-800">{{ fact.value }}</p>
          </div>
        </div>

        <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div class="space-y-12">
            <section class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-10">
              <div class="attraction-body">
                <ContentRenderer :value="attraction" />
              </div>
            </section>

            <section v-if="galleryItems.length" aria-labelledby="gallery-title">
              <div class="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Galería</p>
                  <h2 id="gallery-title" class="font-serif text-3xl font-bold italic text-stone-800 md:text-4xl">
                    Imágenes para preparar la visita
                  </h2>
                </div>
                <p class="max-w-xl text-sm leading-6 text-stone-500">
                  Cada imagen suma una pista de lectura: escala del paisaje, acceso, memoria del lugar o relación con el mapa del recorrido.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-3">
                <button
                  v-for="(item, index) in galleryItems"
                  :key="`${item.src}-${index}`"
                  type="button"
                  :disabled="item.placeholder"
                  :class="[
                    'group relative min-h-72 overflow-hidden rounded-lg border border-stone-200 bg-stone-200 text-left shadow-sm',
                    item.placeholder ? 'cursor-default' : '',
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  ]"
                  @click="item.src && openLightbox(item, index)"
                >
                  <img
                    v-if="item.src"
                    :src="resolveAssetPath(item.src)"
                    :alt="item.alt || item.caption || attraction.title"
                    class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div v-else class="absolute inset-0 flex items-center justify-center bg-stone-100 text-center">
                    <div class="mx-6 rounded-lg border border-dashed border-stone-300 bg-white/80 px-6 py-5 text-stone-500">
                      <p class="text-xs font-bold uppercase tracking-widest">Imagen pendiente</p>
                      <p class="mt-2 text-sm leading-6">Falta sumar una foto específica de este punto.</p>
                    </div>
                  </div>
                  <div
                    :class="[
                      'absolute inset-0 bg-gradient-to-t to-transparent',
                      item.src ? 'from-stone-950/80 via-stone-950/10' : 'from-stone-950/10 via-transparent'
                    ]"
                  ></div>
                  <div class="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p v-if="item.caption" class="text-sm font-semibold leading-5 drop-shadow">
                      {{ item.caption }}
                    </p>
                  </div>
                </button>
              </div>
            </section>

            <section v-if="attraction.highlights?.length || attraction.activities?.length" class="grid gap-6 md:grid-cols-2">
              <div v-if="attraction.highlights?.length" class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Claves del lugar</p>
                <ul class="mt-5 space-y-3">
                  <li v-for="item in attraction.highlights" :key="item" class="flex gap-3 text-sm leading-6 text-stone-700">
                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-700"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="attraction.activities?.length" class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Experiencias posibles</p>
                <ul class="mt-5 space-y-3">
                  <li v-for="item in attraction.activities" :key="item" class="flex gap-3 text-sm leading-6 text-stone-700">
                    <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-stone-700"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </section>

            <section v-if="attraction.recommendations?.length" class="rounded-lg border border-amber-200 bg-amber-50 p-7">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Recomendaciones</p>
              <ul class="mt-5 grid gap-3 md:grid-cols-2">
                <li v-for="item in attraction.recommendations" :key="item" class="rounded-lg bg-white/70 p-4 text-sm font-semibold leading-6 text-stone-700">
                  {{ item }}
                </li>
              </ul>
            </section>
          </div>

          <aside class="space-y-6 lg:sticky lg:top-32">
            <section class="rounded-lg border border-emerald-900/20 bg-emerald-950 p-6 text-white shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">Ubicación</p>
              <h2 class="mt-2 font-serif text-2xl font-bold italic">Abrir mapa</h2>
              <div class="mt-6 space-y-3">
                <a
                  v-if="mapHref"
                  :href="mapHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold transition hover:bg-white/20"
                >
                  <span>Ver ubicación</span>
                  <span aria-hidden="true">&nearr;</span>
                </a>
                <button
                  v-if="attraction.mapImage"
                  type="button"
                  class="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-left text-sm font-bold transition hover:bg-white/20"
                  @click="openLightbox({ src: attraction.mapImage, alt: attraction.mapImageAlt || 'Mapa de la comarca' })"
                >
                  <span>Ver mapa del circuito</span>
                  <span aria-hidden="true">+</span>
                </button>
              </div>
              <p v-if="attraction.locationNote" class="mt-5 text-sm leading-7 text-emerald-50/80">
                {{ attraction.locationNote }}
              </p>
            </section>

            <section class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Ficha rápida</p>
              <dl class="mt-5 space-y-4">
                <div v-for="fact in quickFacts" :key="`aside-${fact.label}`" class="border-t border-stone-100 pt-4">
                  <dt class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ fact.label }}</dt>
                  <dd class="mt-1 text-sm font-semibold leading-6 text-stone-700">{{ fact.value }}</dd>
                </div>
              </dl>
            </section>

            <section v-if="attraction.baseTown || attraction.nearby?.length" class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Conectar el recorrido</p>
              <NuxtLink
                v-if="attraction.baseTown && attraction.baseTownUrl"
                :to="attraction.baseTownUrl"
                class="mt-4 block rounded-lg bg-stone-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
              >
                Base sugerida: {{ attraction.baseTown }}
              </NuxtLink>
              <p v-else-if="attraction.baseTown" class="mt-4 text-sm font-semibold leading-6 text-stone-700">
                Base sugerida: {{ attraction.baseTown }}
              </p>
              <div v-if="attraction.nearby?.length" class="mt-5 flex flex-wrap gap-2">
                <NuxtLink
                  v-for="item in attraction.nearby"
                  :key="item.label"
                  :to="item.to || '/atracciones'"
                  class="rounded-full border border-stone-200 px-3 py-2 text-xs font-bold text-stone-500 transition hover:bg-stone-100 hover:text-stone-800"
                >
                  {{ item.label }}
                </NuxtLink>
              </div>
            </section>

            <section class="rounded-lg border border-stone-200 bg-amber-50 p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Cuidado del territorio</p>
              <p class="mt-3 text-sm leading-7 text-stone-700">
                {{ attraction.conservation || defaultConservation }}
              </p>
            </section>

            <section v-if="attraction.sources?.length" class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Fuentes</p>
              <ul class="mt-5 space-y-3 text-sm leading-6 text-stone-500">
                <li v-for="source in attraction.sources" :key="source.url">
                  <a
                    :href="source.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium underline decoration-stone-300 underline-offset-4 transition hover:text-stone-800"
                  >
                    {{ source.label }}
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </section>

      <ImageLightbox
        :src="lightboxImage.src"
        :alt="lightboxImage.alt"
        :is-open="isLightboxOpen"
        :show-previous="canNavigateLightbox"
        :show-next="canNavigateLightbox"
        :counter-label="lightboxCounterLabel"
        @previous="showPreviousLightboxImage"
        @next="showNextLightboxImage"
        @close="closeLightbox"
      />
    </article>

    <div v-else class="container mx-auto px-6 py-20">
      <div class="mx-auto max-w-2xl rounded-lg border border-stone-200 bg-white p-10 text-center shadow-sm">
        <h1 class="mb-4 font-serif text-4xl font-bold italic text-stone-800">Atracción no encontrada</h1>
        <p class="mb-8 text-stone-500">La guía que buscas todavía no está disponible.</p>
        <NuxtLink to="/atracciones" class="font-bold uppercase tracking-widest text-stone-800">Volver a Atracciones</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value.join('/') : value
})

const contentPath = computed(() => `/attractions/${slug.value}`)

const { data: attraction } = await useAsyncData(
  () => `attraction-${contentPath.value}`,
  () => queryCollection('content').path(contentPath.value).first(),
  { watch: [contentPath] }
)

const categoryLabel = computed(() => {
  if (attraction.value?.category === 'natural') return 'Atracción natural'
  if (attraction.value?.category === 'historical') return 'Atracción histórica'
  return 'Atracción de la comarca'
})

const quickFacts = computed(() => {
  if (!attraction.value) return []

  return [
    { label: 'Mapa', value: attraction.value.mapRef },
    { label: 'Zona', value: attraction.value.area },
    { label: 'Acceso', value: attraction.value.access },
    { label: 'Tiempo sugerido', value: attraction.value.visitTime },
    { label: 'Dificultad', value: attraction.value.difficulty },
    { label: 'Mejor momento', value: attraction.value.bestSeason },
    { label: 'Base sugerida', value: attraction.value.baseTown }
  ].filter((fact) => Boolean(fact.value))
})

const galleryItems = computed(() => {
  const gallery = attraction.value?.gallery || []
  const validGallery = gallery.filter((item) => item?.src)
  if (validGallery.length) return validGallery

  if (attraction.value?.image) {
    return [
      {
        src: attraction.value.image,
        alt: attraction.value.imageAlt || attraction.value.title,
        caption: attraction.value.description
      }
    ]
  }

  return [
    {
      placeholder: true,
      alt: 'Imagen pendiente',
      caption: 'Imagen pendiente: falta sumar una foto específica de este punto.'
    }
  ]
})

const firstGalleryImage = computed(() => galleryItems.value.find((item) => item.src)?.src || '')
const heroImage = computed(() => attraction.value?.image || firstGalleryImage.value || '')
const heroAlt = computed(() => galleryItems.value.find((item) => item.src === heroImage.value)?.alt || attraction.value?.title || '')

const mapHref = computed(() => {
  if (attraction.value?.mapUrl) return attraction.value.mapUrl
  if (attraction.value?.mapQuery) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.value.mapQuery)}`
  }
  return ''
})

const defaultConservation = 'Confirmá accesos antes de salir, respetá tranqueras y caminos rurales, evitá dejar residuos y no ingreses a campos privados sin autorización.'

const isLightboxOpen = ref(false)
const lightboxItems = ref([])
const lightboxIndex = ref(0)

const lightboxImage = computed(() => lightboxItems.value[lightboxIndex.value] || { src: '', alt: '' })
const canNavigateLightbox = computed(() => lightboxItems.value.length > 1)
const lightboxCounterLabel = computed(() => {
  if (!canNavigateLightbox.value) return ''
  return `${lightboxIndex.value + 1} / ${lightboxItems.value.length}`
})

const normalizeLightboxItem = (item) => ({
  src: item.src,
  alt: item.alt || item.caption || attraction.value?.title || ''
})

const openLightbox = (item, index = -1) => {
  if (index >= 0) {
    const items = galleryItems.value.filter((galleryItem) => galleryItem?.src).map(normalizeLightboxItem)
    const selectedIndex = items.findIndex((galleryItem) => galleryItem.src === item.src)
    lightboxItems.value = items
    lightboxIndex.value = selectedIndex >= 0 ? selectedIndex : 0
  } else {
    lightboxItems.value = [
      {
        src: item.src,
        alt: item.alt || item.caption || attraction.value?.title || ''
      }
    ]
    lightboxIndex.value = 0
  }

  isLightboxOpen.value = true
}

const showPreviousLightboxImage = () => {
  if (!canNavigateLightbox.value) return
  lightboxIndex.value = (lightboxIndex.value - 1 + lightboxItems.value.length) % lightboxItems.value.length
}

const showNextLightboxImage = () => {
  if (!canNavigateLightbox.value) return
  lightboxIndex.value = (lightboxIndex.value + 1) % lightboxItems.value.length
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}

watch(galleryItems, () => {
  if (!isLightboxOpen.value) return

  const currentImage = lightboxImage.value
  const items = galleryItems.value.filter((galleryItem) => galleryItem?.src).map(normalizeLightboxItem)

  if (!items.length || !currentImage.src) {
    closeLightbox()
    return
  }

  lightboxItems.value = items
  const nextIndex = items.findIndex((item) => item.src === currentImage.src)
  lightboxIndex.value = nextIndex >= 0 ? nextIndex : 0
})

const resolveAssetPath = (src) => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src

  const base = config.app.baseURL.replace(/\/$/, '')
  if (src.startsWith('/') && !src.startsWith(base)) {
    return `${base}${src}`
  }

  return src
}

useHead(() => ({
  title: attraction.value?.title
    ? `${attraction.value.title} - Atracciones - Comarca Río Quequén Salado`
    : 'Atracción no encontrada - Comarca Río Quequén Salado',
  meta: [
    {
      name: 'description',
      content: attraction.value?.description || 'Guía de atracciones de la Comarca Río Quequén Salado.'
    }
  ]
}))
</script>

<style scoped>
.attraction-body {
  color: rgb(68 64 60);
  font-size: 1.0625rem;
  line-height: 1.9;
}

.attraction-body :deep(h1) {
  display: none;
}

.attraction-body :deep(h2) {
  margin-top: 2.8rem;
  margin-bottom: 1rem;
  color: rgb(41 37 36);
  font-family: "Playfair Display", serif;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
}

.attraction-body :deep(h2:first-child) {
  margin-top: 0;
}

.attraction-body :deep(h3) {
  margin-top: 2rem;
  color: rgb(41 37 36);
  font-size: 1.2rem;
  font-weight: 800;
}

.attraction-body :deep(p) {
  margin-top: 1.15rem;
}

.attraction-body :deep(p:first-child) {
  margin-top: 0;
  color: rgb(87 83 78);
  font-size: 1.18rem;
  line-height: 1.9;
}

.attraction-body :deep(ul) {
  margin-top: 1rem;
  list-style: disc;
  padding-left: 1.25rem;
}

.attraction-body :deep(li) {
  margin-top: 0.5rem;
}

.attraction-body :deep(a) {
  color: rgb(6 95 70);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgb(167 243 208);
  text-underline-offset: 0.2em;
}
</style>
