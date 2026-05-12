<template>
  <main class="bg-stone-50 text-stone-900">
    <section class="relative isolate min-h-[82vh] overflow-hidden bg-stone-950 text-white">
      <img
        src="/images/rio-quequen.jpg"
        alt="Río Quequén Salado"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/25"></div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-stone-950 to-transparent"></div>

      <div class="container mx-auto flex min-h-[82vh] items-center px-6 py-20">
        <div class="max-w-5xl">
          <p class="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">
            Sudoeste bonaerense
          </p>
          <h1 class="font-serif text-5xl font-bold italic leading-none md:text-7xl xl:text-8xl">
            Comarca Río Quequén Salado
          </h1>
          <p class="mt-7 max-w-3xl text-lg leading-8 text-white/82 md:text-2xl md:leading-10">
            Un corredor de ecoturismo público donde el río encajona la llanura, forma cascadas,
            conecta pueblos rurales y conserva relatos de frontera, trabajo y vida ribereña.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              to="/atracciones"
              class="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-stone-950 transition hover:bg-stone-200"
            >
              Explorar atracciones
            </NuxtLink>
            <NuxtLink
              to="/actividades"
              class="inline-flex justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver actividades
            </NuxtLink>
            <NuxtLink
              to="/pueblos"
              class="inline-flex justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver pueblos base
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-stone-200 bg-white">
      <div class="container mx-auto grid gap-4 px-6 py-8 md:grid-cols-4">
        <article
          v-for="fact in riverFacts"
          :key="fact.label"
          class="rounded-lg border border-stone-200 bg-stone-50 p-5"
        >
          <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ fact.label }}</p>
          <p class="mt-2 font-serif text-3xl font-bold italic text-stone-800">{{ fact.value }}</p>
          <p class="mt-2 text-sm leading-6 text-stone-500">{{ fact.detail }}</p>
        </article>
      </div>
    </section>

    <section class="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">El río como destino</p>
        <h2 class="mt-3 font-serif text-4xl font-bold italic leading-tight text-stone-800 md:text-5xl">
          Un paisaje protegido que cambia la idea de la llanura
        </h2>
        <div class="mt-7 space-y-5 text-lg leading-8 text-stone-600">
          <p>
            El Río Quequén Salado nace en el partido de Gonzales Chaves y llega al Mar Argentino
            en Balneario Marisol. En ese recorrido crea barrancas, saltos de agua, pasos naturales,
            sectores de pesca, rincones para caminata y un conjunto de parajes que combinan
            naturaleza con memoria local.
          </p>
          <p>
            Su nombre originario, Mulpunleufú, aparece asociado al río y a una de sus cascadas.
            La región lo reconoce como un ambiente singular: el agua corta la planicie, deja piedra
            a la vista y arma un corredor donde conviven aves, producción rural, pueblos pequeños
            y antiguos cruces.
          </p>
          <p>
            La cuenca fue declarada Paisaje Protegido de Interés Provincial por la Ley 12.707.
            Por eso el turismo tiene que crecer con una idea clara: disfrutar, interpretar y cuidar
            el territorio al mismo tiempo.
          </p>
        </div>
      </div>

      <aside class="rounded-lg border border-emerald-900/15 bg-emerald-950 p-7 text-white shadow-sm">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">Cómo leerlo</p>
        <h3 class="mt-3 font-serif text-3xl font-bold italic">Tres capas del Quequén</h3>
        <ul class="mt-6 space-y-5">
          <li v-for="layer in riverLayers" :key="layer.title" class="border-t border-white/10 pt-5">
            <p class="font-bold text-white">{{ layer.title }}</p>
            <p class="mt-2 text-sm leading-6 text-emerald-50/80">{{ layer.text }}</p>
          </li>
        </ul>
      </aside>
    </section>

    <section class="bg-stone-100 py-16">
      <div class="container mx-auto px-6">
        <div class="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Recorridos sugeridos</p>
            <h2 class="mt-3 font-serif text-4xl font-bold italic text-stone-800">Elegí por tipo de experiencia</h2>
          </div>
          <p class="max-w-2xl text-sm leading-6 text-stone-500">
            El mapa completo vive en Atracciones, pero estos accesos ayudan a empezar según el
            tiempo, el interés y el tipo de visita.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="route in suggestedRoutes"
            :key="route.title"
            :to="route.to"
            class="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative h-56 overflow-hidden">
              <img
                :src="resolveAssetPath(route.image)"
                :alt="route.alt"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
              <p class="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-700">
                {{ route.tag }}
              </p>
            </div>
            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold italic text-stone-800">{{ route.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-stone-600">{{ route.text }}</p>
              <p class="mt-5 text-xs font-bold uppercase tracking-widest text-emerald-800">Abrir recorrido</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-16">
      <div class="mb-9 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Postales esenciales</p>
        <h2 class="mt-3 font-serif text-4xl font-bold italic text-stone-800">Puntos que cuentan la comarca</h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="item in featuredAttractions"
          :key="item.title"
          class="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
        >
          <img :src="resolveAssetPath(item.image)" :alt="item.alt" class="h-52 w-full object-cover" />
          <div class="p-5">
            <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ item.kind }}</p>
            <h3 class="mt-2 font-serif text-2xl font-bold italic text-stone-800">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-stone-600">{{ item.text }}</p>
            <NuxtLink :to="item.to" class="mt-5 inline-flex text-xs font-bold uppercase tracking-widest text-emerald-800">
              Ver guía
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const config = useRuntimeConfig()

const resolveAssetPath = (src) => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src

  const base = config.app.baseURL.replace(/\/$/, '')
  if (src.startsWith('/') && !src.startsWith(base)) {
    return `${base}${src}`
  }

  return src
}

const riverFacts = [
  {
    label: 'Cuenca protegida',
    value: 'Ley 12.707',
    detail: 'Paisaje Protegido de Interés Provincial desde el nacimiento hasta el mar.'
  },
  {
    label: 'Nombre originario',
    value: 'Mulpunleufú',
    detail: 'Topónimo asociado al río y a una de las cascadas del corredor.'
  },
  {
    label: 'Desembocadura',
    value: 'Marisol',
    detail: 'El río llega al Mar Argentino junto a la villa balnearia.'
  },
  {
    label: 'Experiencias',
    value: 'Agua y memoria',
    detail: 'Cascadas, aves, pesca responsable, puentes, fortines y pueblos rurales.'
  }
]

const riverLayers = [
  {
    title: 'Naturaleza',
    text: 'Barrancas, saltos, estuario, aves y cambios de paisaje desde la cuenca alta hasta La Boca.'
  },
  {
    title: 'Historia',
    text: 'Vados, puentes, fortines, molinos y ruinas industriales muestran cómo el río ordenó caminos y trabajo.'
  },
  {
    title: 'Cuidado',
    text: 'La visita necesita permisos, seguridad rural y respeto por un ambiente protegido y productivo.'
  }
]

const suggestedRoutes = [
  {
    tag: 'Cascadas',
    title: 'El circuito del agua',
    text: 'Cifuentes, La Escondida, Majidic y Mulpunleufú muestran el costado más inesperado de la provincia.',
    image: '/images/cascada-cifuentes.jpg',
    alt: 'Cascada Cifuentes',
    to: '/atracciones'
  },
  {
    tag: 'Patrimonio',
    title: 'Puentes y memoria productiva',
    text: 'Puente Viejo, la represa, el ferrocarril y las ruinas industriales convierten el paisaje en relato.',
    image: '/images/puente-viejo-vista-aerea.jpeg',
    alt: 'Puente Viejo sobre el Quequén Salado',
    to: '/atracciones/puente-viejo'
  },
  {
    tag: 'Actividades',
    title: 'Aventura, picnic y agua',
    text: 'Kayak, trekking, tirolesa, camping, safari fotográfico y descanso familiar, cada uno en el punto adecuado.',
    image: '/images/puente-viejo-actividades-1.jpeg',
    alt: 'Actividades de aventura en Puente Viejo',
    to: '/actividades'
  },
  {
    tag: 'Pueblos',
    title: 'Bases para quedarse',
    text: 'Cascallares, Indio Rico y Marisol permiten armar salidas rurales, costeras y de naturaleza.',
    image: '/images/cascallares-portal.png',
    alt: 'Portal de Micaela Cascallares',
    to: '/pueblos'
  }
]

const featuredAttractions = [
  {
    kind: 'Natural',
    title: 'Cascada Cifuentes',
    text: 'Uno de los sectores naturales más potentes del río, con barrancas, cascadas y un desnivel notable en el tramo.',
    image: '/images/cascada-cifuentes.jpg',
    alt: 'Cascada Cifuentes',
    to: '/atracciones/cascada-cifuentes'
  },
  {
    kind: 'Natural',
    title: 'La Boca',
    text: 'El cierre del río en el Mar Argentino, entre estuario, dunas, aves y viento costero.',
    image: '/images/la-boca.jpeg',
    alt: 'La Boca del Río Quequén Salado',
    to: '/atracciones/la-boca'
  },
  {
    kind: 'Histórica',
    title: 'Cueva del Tigre',
    text: 'Vado, cuevas, cascadas y la leyenda del Tigre del Quequén en un mismo paraje.',
    image: '/images/cueva-del-tigre-1-cropped.jpeg',
    alt: 'Cueva del Tigre',
    to: '/atracciones/cueva-del-tigre'
  },
  {
    kind: 'Histórica',
    title: 'Puente Viejo',
    text: 'Represa, puente ferroviario, usina y fábrica de cal en una escena clave del río.',
    image: '/images/puente-viejo-usina-al-fondo.jpeg',
    alt: 'Puente Viejo y ruinas de la usina',
    to: '/atracciones/puente-viejo'
  }
]

useHead({
  title: 'Comarca Río Quequén Salado - Ecoturismo Público Sustentable',
  meta: [
    {
      name: 'description',
      content: 'Ecoturismo en la Comarca Río Quequén Salado: cascadas, pueblos rurales, patrimonio histórico, paisaje protegido y naturaleza bonaerense.'
    }
  ]
})
</script>
