<template>
  <main>
    <article v-if="town" class="bg-stone-50">
      <section class="relative isolate overflow-hidden bg-stone-950 text-white">
        <img
          v-if="heroImage"
          :src="resolveAssetPath(heroImage)"
          :alt="heroAlt"
          class="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/30"></div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-stone-950 to-transparent"></div>

        <div class="container mx-auto px-6 py-16 md:py-24">
          <NuxtLink
            to="/pueblos"
            class="mb-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur transition hover:bg-white/20 hover:text-white"
          >
            <span aria-hidden="true">&larr;</span>
            Pueblos
          </NuxtLink>

          <div class="max-w-4xl">
            <p v-if="town.area" class="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-emerald-200">
              {{ town.area }}
            </p>
            <h1 class="font-serif text-5xl font-bold italic leading-none text-white md:text-7xl">
              {{ town.title }}
            </h1>
            <p v-if="town.description" class="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {{ town.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-6 py-12 md:py-16">
        <div v-if="quickFacts.length" class="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="fact in quickFacts"
            :key="fact.label"
            class="rounded-lg border border-stone-200 bg-white p-5 shadow-lg shadow-stone-900/5"
          >
            <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ fact.label }}</p>
            <p class="mt-2 text-lg font-bold leading-snug text-stone-800">{{ fact.value }}</p>
          </div>
        </div>

        <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div class="space-y-12">
            <section class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-10">
              <div class="town-body">
                <ContentRenderer :value="town" />
              </div>
            </section>

            <section v-if="galleryItems.length" aria-labelledby="gallery-title">
              <div class="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Paisajes</p>
                  <h2 id="gallery-title" class="font-serif text-3xl font-bold italic text-stone-800 md:text-4xl">
                    Imágenes para leer el lugar
                  </h2>
                </div>
                <p class="max-w-xl text-sm leading-6 text-stone-500">
                  Una selección visual del pueblo y su entorno comarcal para preparar la visita.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-3">
                <button
                  v-for="(item, index) in galleryItems"
                  :key="item.src"
                  type="button"
                  :class="[
                    'group relative min-h-72 overflow-hidden rounded-lg border border-stone-200 bg-stone-200 text-left shadow-sm',
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  ]"
                  @click="openLightbox(item)"
                >
                  <img
                    :src="resolveAssetPath(item.src)"
                    :alt="item.alt || item.caption || town.title"
                    class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
                  <div class="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p v-if="item.caption" class="text-sm font-semibold leading-5 drop-shadow">
                      {{ item.caption }}
                    </p>
                  </div>
                </button>
              </div>
            </section>

            <section v-if="town.attractions?.length" aria-labelledby="attractions-title">
              <div class="mb-5">
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Recorrido</p>
                <h2 id="attractions-title" class="font-serif text-3xl font-bold italic text-stone-800 md:text-4xl">
                  Qué ver y hacer
                </h2>
              </div>

              <ul class="grid list-none gap-4 p-0 md:grid-cols-2">
                <li
                  v-for="(attraction, index) in town.attractions"
                  :key="attraction"
                  class="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <span class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-bold text-white">
                    {{ index + 1 }}
                  </span>
                  <p class="text-base font-semibold leading-7 text-stone-700">{{ attraction }}</p>
                </li>
              </ul>
            </section>
          </div>

          <aside class="space-y-6 lg:sticky lg:top-32">
            <section class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Ficha de viaje</p>
              <h2 class="mt-2 font-serif text-2xl font-bold italic text-stone-800">Datos útiles</h2>

              <dl class="mt-6 space-y-4">
                <div v-for="fact in quickFacts" :key="`aside-${fact.label}`" class="border-t border-stone-100 pt-4">
                  <dt class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ fact.label }}</dt>
                  <dd class="mt-1 text-sm font-semibold leading-6 text-stone-700">{{ fact.value }}</dd>
                </div>
              </dl>
            </section>

            <section v-if="mapLinks.length" class="rounded-lg border border-emerald-900/20 bg-emerald-950 p-6 text-white shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">Ubicación</p>
              <h2 class="mt-2 font-serif text-2xl font-bold italic">Abrir mapa</h2>
              <div class="mt-6 space-y-3">
                <a
                  v-for="[label, link] in mapLinks"
                  :key="label"
                  :href="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold transition hover:bg-white/20"
                >
                  <span>{{ label }}</span>
                  <span aria-hidden="true">&nearr;</span>
                </a>
              </div>
            </section>

            <section class="rounded-lg border border-stone-200 bg-amber-50 p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Cuidado del territorio</p>
              <p class="mt-3 text-sm leading-7 text-stone-700">
                Antes de salir, conviene consultar caminos, clima y accesos habilitados. La comarca combina estancias,
                riberas y ambientes frágiles: una visita respetuosa deja el paisaje disponible para todos.
              </p>
            </section>

            <section v-if="town.sources?.length" class="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-[0.24em] text-stone-400">Fuentes</p>
              <ul class="mt-5 space-y-3 text-sm leading-6 text-stone-500">
                <li v-for="source in town.sources" :key="source.url">
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
        @close="isLightboxOpen = false"
      />
    </article>

    <div v-else class="container mx-auto px-6 py-20">
      <div class="mx-auto max-w-2xl rounded-lg border border-stone-200 bg-white p-10 text-center shadow-sm">
        <h1 class="mb-4 font-serif text-4xl font-bold italic text-stone-800">Pueblo no encontrado</h1>
        <p class="mb-8 text-stone-500">La guía que buscas todavía no está disponible.</p>
        <NuxtLink to="/pueblos" class="font-bold uppercase tracking-widest text-stone-800">Volver a Pueblos</NuxtLink>
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

const contentPath = computed(() => `/towns/${slug.value}`)

const { data: town } = await useAsyncData(
  () => `town-${contentPath.value}`,
  () => queryCollection('content').path(contentPath.value).first(),
  { watch: [contentPath] }
)

const quickFacts = computed(() => {
  if (!town.value) return []

  return [
    { label: 'Fundación', value: town.value.founded },
    { label: 'Población', value: town.value.population },
    { label: 'Distancia', value: town.value.distance },
    { label: 'Acceso', value: town.value.access }
  ].filter((fact) => Boolean(fact.value))
})

const galleryItems = computed(() => {
  const gallery = town.value?.gallery || []
  if (gallery.length) return gallery

  if (town.value?.image) {
    return [
      {
        src: town.value.image,
        alt: town.value.title,
        caption: town.value.description
      }
    ]
  }

  return []
})

const heroImage = computed(() => town.value?.image || galleryItems.value[0]?.src || '/images/rio-quequen.jpg')
const heroAlt = computed(() => galleryItems.value.find((item) => item.src === heroImage.value)?.alt || town.value?.title || '')

const mapLinks = computed(() => Object.entries(town.value?.maps || {}))

const isLightboxOpen = ref(false)
const lightboxImage = ref({ src: '', alt: '' })

const openLightbox = (item) => {
  lightboxImage.value = {
    src: item.src,
    alt: item.alt || item.caption || town.value?.title || ''
  }
  isLightboxOpen.value = true
}

const resolveAssetPath = (src) => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src

  const base = config.app.baseURL.replace(/\/$/, '')
  if (src.startsWith('/') && !src.startsWith(base)) {
    return `${base}${src}`
  }

  return src
}

useHead(() => ({
  title: town.value?.title
    ? `${town.value.title} - Comarca Río Quequén Salado`
    : 'Pueblo no encontrado - Comarca Río Quequén Salado',
  meta: [
    {
      name: 'description',
      content: town.value?.description || 'Guía de pueblos de la Comarca Río Quequén Salado.'
    }
  ]
}))
</script>

<style scoped>
.town-body {
  color: rgb(68 64 60);
  font-size: 1.0625rem;
  line-height: 1.9;
}

.town-body :deep(h1) {
  display: none;
}

.town-body :deep(h2) {
  margin-top: 2.8rem;
  margin-bottom: 1rem;
  color: rgb(41 37 36);
  font-family: "Playfair Display", serif;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
}

.town-body :deep(h2:first-child) {
  margin-top: 0;
}

.town-body :deep(p) {
  margin-top: 1.15rem;
}

.town-body :deep(p:first-child) {
  margin-top: 0;
  color: rgb(87 83 78);
  font-size: 1.18rem;
  line-height: 1.9;
}

.town-body :deep(a) {
  color: rgb(6 95 70);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgb(167 243 208);
  text-underline-offset: 0.2em;
}
</style>
