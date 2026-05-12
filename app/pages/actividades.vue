<template>
  <main class="bg-stone-50 text-stone-900">
    <section class="relative isolate overflow-hidden bg-stone-950 text-white">
      <img
        src="/images/puente-viejo-actividades-1.jpeg"
        alt="Actividades de aventura en el Río Quequén Salado"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/82 to-stone-950/25"></div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-stone-950 to-transparent"></div>

      <div class="container mx-auto px-6 py-20 md:py-28">
        <div class="max-w-5xl">
          <p class="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">
            Ecoturismo activo
          </p>
          <h1 class="font-serif text-5xl font-bold italic leading-none md:text-7xl">
            Actividades en la Comarca
          </h1>
          <p class="mt-7 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
            El Quequén Salado permite remar, caminar, fotografiar, acampar, pedalear y vivir aventura.
            La clave es elegir el lugar correcto: no todos los parajes tienen servicios ni todos los tramos
            son aptos para la misma experiencia.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              to="/atracciones/puente-viejo"
              class="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-stone-950 transition hover:bg-stone-200"
            >
              Base Puente Viejo
            </NuxtLink>
            <NuxtLink
              to="/atracciones"
              class="inline-flex justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver atracciones
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-stone-200 bg-white">
      <div class="container mx-auto grid gap-4 px-6 py-8 md:grid-cols-4">
        <article
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-lg border border-stone-200 bg-stone-50 p-5"
        >
          <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ stat.label }}</p>
          <p class="mt-2 font-serif text-3xl font-bold italic text-stone-800">{{ stat.value }}</p>
          <p class="mt-2 text-sm leading-6 text-stone-500">{{ stat.detail }}</p>
        </article>
      </div>
    </section>

    <section class="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Cómo organizar la visita</p>
        <h2 class="mt-3 font-serif text-4xl font-bold italic leading-tight text-stone-800 md:text-5xl">
          Primero la actividad, después el punto del mapa
        </h2>
        <div class="mt-7 space-y-5 text-lg leading-8 text-stone-600">
          <p>
            La pestaña de actividades funciona como una brújula práctica. Si alguien quiere picnic, no necesita
            leer todas las cascadas; puede ir directo a Puente Viejo o Balneario de Cascallares. Si busca
            kayak o deportes náuticos, conviene mirar el estuario, El Vimar, La Boca y las salidas guiadas.
          </p>
          <p>
            Puente Viejo merece un lugar central porque concentra base de campamento, parador gastronómico
            y operadores de turismo activo. Otros sectores son excelentes para paisaje, fotografía o trekking,
            pero requieren permisos, guía o confirmación de caminos.
          </p>
        </div>
      </div>

      <aside class="rounded-lg border border-emerald-900/15 bg-emerald-950 p-7 text-white shadow-sm">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">Regla simple</p>
        <h3 class="mt-3 font-serif text-3xl font-bold italic">No todo se hace en todos lados</h3>
        <p class="mt-5 text-sm leading-7 text-emerald-50/85">
          En cada actividad marcamos lugares recomendados, nivel de planificación y cuidados. Si no hay servicios,
          lo decimos. Si depende de caudal, viento, permisos o prestador, también.
        </p>
      </aside>
    </section>

    <section class="bg-stone-100 py-16">
      <div class="container mx-auto px-6">
        <div class="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Guía por actividad</p>
            <h2 class="mt-3 font-serif text-4xl font-bold italic text-stone-800">Qué hacer y dónde conviene</h2>
          </div>
          <p class="max-w-2xl text-sm leading-6 text-stone-500">
            Las recomendaciones priorizan bajo impacto, seguridad y lugares con condiciones más claras para el visitante.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="activity in activities"
            :key="activity.title"
            class="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
          >
            <div class="relative h-56 overflow-hidden">
              <img
                v-if="activity.image"
                :src="resolveAssetPath(activity.image)"
                :alt="activity.alt"
                class="h-full w-full object-cover"
              />
              <div v-else class="absolute inset-0 flex items-center justify-center bg-stone-100 text-center">
                <div class="mx-6 rounded-lg border border-dashed border-stone-300 bg-white/80 px-6 py-5 text-stone-500">
                  <p class="text-xs font-bold uppercase tracking-widest">Imagen pendiente</p>
                  <p class="mt-2 text-sm leading-6">Falta sumar una foto específica de esta actividad.</p>
                </div>
              </div>
              <div
                :class="[
                  'absolute inset-0 bg-gradient-to-t to-transparent',
                  activity.image ? 'from-stone-950/75 via-stone-950/10' : 'from-stone-950/10 via-transparent'
                ]"
              ></div>
              <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-stone-700">
                {{ activity.tag }}
              </span>
            </div>

            <div class="p-6">
              <h3 class="font-serif text-2xl font-bold italic leading-tight text-stone-800">{{ activity.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-stone-600">{{ activity.description }}</p>

              <div class="mt-5 border-t border-stone-100 pt-5">
                <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">Lugares propicios</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <NuxtLink
                    v-for="place in activity.places"
                    :key="`${activity.title}-${place.label}`"
                    :to="place.to"
                    class="rounded-full border border-stone-200 px-3 py-2 text-xs font-bold text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
                  >
                    {{ place.label }}
                  </NuxtLink>
                </div>
              </div>

              <p class="mt-5 rounded-lg bg-amber-50 p-4 text-sm font-semibold leading-6 text-stone-700">
                {{ activity.note }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-16">
      <div class="mb-9 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Lugares clave</p>
        <h2 class="mt-3 font-serif text-4xl font-bold italic text-stone-800">Bases y puntos recomendados</h2>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="place in featuredPlaces"
          :key="place.title"
          class="grid overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm md:grid-cols-[230px_minmax(0,1fr)]"
        >
          <img :src="resolveAssetPath(place.image)" :alt="place.alt" class="h-64 w-full object-cover md:h-full" />
          <div class="p-6">
            <p class="text-[11px] font-bold uppercase tracking-widest text-stone-400">{{ place.kind }}</p>
            <h3 class="mt-2 font-serif text-2xl font-bold italic text-stone-800">{{ place.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-stone-600">{{ place.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="label in place.bestFor"
                :key="`${place.title}-${label}`"
                class="rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900"
              >
                {{ label }}
              </span>
            </div>
            <NuxtLink :to="place.to" class="mt-5 inline-flex text-xs font-bold uppercase tracking-widest text-emerald-800">
              Abrir guía
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="mb-8 max-w-3xl">
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Matriz rápida</p>
          <h2 class="mt-3 font-serif text-4xl font-bold italic text-stone-800">Planificación por nivel de servicio</h2>
        </div>

        <div class="overflow-hidden rounded-lg border border-stone-200">
          <div class="hidden grid-cols-[1fr_1.2fr_1fr] bg-stone-800 px-5 py-4 text-xs font-bold uppercase tracking-widest text-white md:grid">
            <span>Actividad</span>
            <span>Mejores lugares</span>
            <span>Condición</span>
          </div>
          <div
            v-for="row in matrixRows"
            :key="row.activity"
            class="grid gap-3 border-t border-stone-200 bg-stone-50 px-5 py-5 text-sm md:grid-cols-[1fr_1.2fr_1fr] md:items-center"
          >
            <p class="font-bold text-stone-800">{{ row.activity }}</p>
            <p class="leading-6 text-stone-600">{{ row.places }}</p>
            <p class="rounded-lg bg-white px-4 py-3 font-semibold leading-6 text-stone-700">{{ row.condition }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-16">
      <div class="grid gap-8 rounded-lg border border-amber-200 bg-amber-50 p-7 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">Cuidado y seguridad</p>
          <h2 class="mt-3 font-serif text-3xl font-bold italic text-stone-800">Aventura responsable</h2>
        </div>
        <ul class="grid gap-3 md:grid-cols-2">
          <li
            v-for="item in safetyNotes"
            :key="item"
            class="rounded-lg bg-white/75 p-4 text-sm font-semibold leading-6 text-stone-700"
          >
            {{ item }}
          </li>
        </ul>
      </div>

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

const stats = [
  {
    label: 'Base con servicios',
    value: 'Puente Viejo',
    detail: 'campamento, parador, aventura guiada y punto de encuentro.'
  },
  {
    label: 'Agua',
    value: 'Kayak',
    detail: 'estuario, El Vimar y salidas guiadas según caudal y viento.'
  },
  {
    label: 'Tierra',
    value: 'Trekking',
    detail: 'senderos, barrancas, cascadas y recorridos interpretativos.'
  },
  {
    label: 'Bajo impacto',
    value: 'Safari',
    detail: 'aves, paisaje, flora, ruinas y memoria ribereña.'
  }
]

const places = {
  puenteViejo: { label: 'Puente Viejo', to: '/atracciones/puente-viejo' },
  marisol: { label: 'Marisol', to: '/pueblos/balneario-marisol' },
  laBoca: { label: 'La Boca', to: '/atracciones/la-boca' },
  cascadaCifuentes: { label: 'Cascada Cifuentes', to: '/atracciones/cascada-cifuentes' },
  cuevaDelTigre: { label: 'Cueva del Tigre', to: '/atracciones/cueva-del-tigre' },
  micaelaCascallares: { label: 'Balneario Cascallares', to: '/pueblos/micaela-cascallares' },
  puenteNuevo: { label: 'Puente Nuevo', to: '/atracciones/puente-nuevo' },
  cascadaMulpunleufu: { label: 'Mulpunleufú', to: '/atracciones/cascada-mulpunleufu' },
  reta: { label: 'Reta', to: '/pueblos/reta' },
  oriente: { label: 'Oriente', to: '/pueblos/oriente' }
}

const activities = [
  {
    tag: 'Agua',
    title: 'Kayak y canotaje',
    image: '/images/puente-viejo-actividades-2.jpeg',
    alt: 'Kayak en el entorno del Quequén Salado',
    description: 'El río permite experiencias de remo en sectores tranquilos y salidas guiadas. En el estuario previo al mar, la lectura de viento, marea y caudal es decisiva.',
    places: [places.puenteViejo, places.marisol, places.laBoca],
    note: 'Usar chaleco, consultar caudal y salir con operador cuando el tramo no sea conocido.'
  },
  {
    tag: 'Aventura',
    title: 'Tirolesa, rappel y puentes tibetanos',
    image: '/images/puente-viejo-actividades-1.jpeg',
    alt: 'Turismo aventura en Puente Viejo',
    description: 'Son actividades de base técnica que tienen sentido donde hay operadores, equipamiento y control de seguridad. Puente Viejo es el punto más claro para concentrarlas.',
    places: [places.puenteViejo],
    note: 'No improvisar con barrancas, ruinas o estructuras antiguas. Estas actividades deben hacerse con prestadores y equipo homologado.'
  },
  {
    tag: 'Senderos',
    title: 'Trekking y caminatas interpretativas',
    image: '/images/cueva-del-tigre-2-cropped.jpeg',
    alt: 'Barrancas y senderos del Río Quequén Salado',
    description: 'El trekking permite leer barrancas, cuevas, vegetación, antiguos vados y memoria productiva. Algunos senderos pueden ser autoguiados; otros requieren referencia local.',
    places: [places.puenteViejo, places.cuevaDelTigre, places.cascadaCifuentes, places.cascadaMulpunleufu],
    note: 'Evitar bordes de barranca, revisar clima y no cruzar alambrados ni tranqueras sin permiso.'
  },
  {
    tag: 'Bici',
    title: 'Bicicleta y cicloturismo',
    image: '',
    alt: 'Imagen pendiente de bicicleta y cicloturismo',
    description: 'Los caminos rurales conectan pueblos, puentes y parajes. La bicicleta funciona muy bien para recorridos de media jornada con paradas de interpretación.',
    places: [places.puenteViejo, places.oriente, places.micaelaCascallares, places.puenteNuevo],
    note: 'Planificar agua, sombra, viento y estado de caminos. Después de lluvia, varios accesos pueden volverse pesados.'
  },
  {
    tag: 'Agua',
    title: 'Baño y recreación en el río',
    image: '/images/puente-viejo-actividades-3.jpeg',
    alt: 'Personas disfrutando el agua en el Río Quequén Salado',
    description: 'En sectores habilitados y con condiciones seguras, el río también puede ser un lugar de descanso, baño y recreación familiar. No debe comunicarse como posibilidad general para cualquier cascada o barranca.',
    places: [places.puenteViejo, places.micaelaCascallares, places.marisol],
    note: 'Confirmar profundidad, corriente, habilitación del sector y presencia de responsables. No bañarse cerca de saltos, compuertas o ruinas.'
  },
  {
    tag: 'Descanso',
    title: 'Picnic, asado y día de campo',
    image: '/images/balneario-cascallares-area-de-asado.jpeg',
    alt: 'Área de asado en Balneario de Cascallares',
    description: 'Para una experiencia familiar, conviene elegir puntos con espacio claro de permanencia. Puente Viejo y Balneario de Cascallares son mejores candidatos que cascadas aisladas.',
    places: [places.puenteViejo, places.micaelaCascallares, places.marisol],
    note: 'Llevar residuos de vuelta, respetar fuego permitido y confirmar si el área está habilitada antes de organizar grupos.'
  },
  {
    tag: 'Campamento',
    title: 'Camping y campamentos guiados',
    image: '/images/puente-viejo-picnic-1.jpeg',
    alt: 'Sector de picnic y campamento en Puente Viejo',
    description: 'El campamento no debe comunicarse como posibilidad general del río. La experiencia necesita baños, control, permisos, fuego seguro y responsable a cargo.',
    places: [places.puenteViejo, places.marisol],
    note: 'Puente Viejo concentra la base de campamento; Marisol cuenta con alternativas de camping y alojamiento de temporada.'
  },
  {
    tag: 'Viento',
    title: 'Windsurf, paddle surf y deportes náuticos',
    image: '/images/la-boca-2.jpeg',
    alt: 'Estuario y costa en la desembocadura del Quequén Salado',
    description: 'El estuario y la zona de Marisol permiten pensar deportes de agua y viento: windsurf, tabla de paddle surf, kayakismo y otras prácticas según condiciones.',
    places: [places.marisol, places.laBoca, places.reta],
    note: 'Dependen del viento, marea, experiencia y equipo. Para esquí acuático o kite surf, validar zona segura y prestador habilitado.'
  },
  {
    tag: 'Observación',
    title: 'Safari fotográfico, aves y visitas educativas',
    image: '/images/la-boca.jpeg',
    alt: 'Paisaje natural para fotografía y observación de aves',
    description: 'La fotografía y las visitas guiadas a escuelas son una forma excelente de conectar naturaleza, historia y cuidado del paisaje sin exigir infraestructura pesada.',
    places: [places.laBoca, places.cascadaCifuentes, places.puenteViejo, places.cuevaDelTigre],
    note: 'Ideal para grupos pequeños. Mantener distancia de fauna, evitar ruidos fuertes y usar senderos ya marcados.'
  }
]

const featuredPlaces = [
  {
    kind: 'Base operativa',
    title: 'Puente Viejo',
    image: '/images/puente-viejo-vista-aerea.jpeg',
    alt: 'Puente Viejo sobre el Río Quequén Salado',
    description: 'El punto más completo para aventura: campamento, parador gastronómico, kayak, tirolesa, rappel, puentes tibetanos, bici, caminatas y visitas guiadas.',
    bestFor: ['campamento', 'aventura', 'picnic', 'visitas guiadas'],
    to: '/atracciones/puente-viejo'
  },
  {
    kind: 'Costa y estuario',
    title: 'Marisol, El Vimar y La Boca',
    image: '/images/la-boca.jpeg',
    alt: 'Desembocadura del Río Quequén Salado en La Boca',
    description: 'Zona ideal para descanso, pesca, caminatas costeras, kayakismo, deportes náuticos y observación del encuentro entre río, dunas y mar.',
    bestFor: ['kayak', 'pesca', 'windsurf', 'safari fotográfico'],
    to: '/atracciones/la-boca'
  },
  {
    kind: 'Día familiar',
    title: 'Balneario de Cascallares',
    image: '/images/balneario-cascallares-area-de-asado.jpeg',
    alt: 'Balneario de Cascallares con área de asado',
    description: 'Buen punto para sumar al relato de Micaela Cascallares: descanso, picnic, asado y contacto tranquilo con la costa del río.',
    bestFor: ['picnic', 'asado', 'descanso', 'familias'],
    to: '/pueblos/micaela-cascallares'
  },
  {
    kind: 'Paisaje y senderos',
    title: 'Cascadas y cuevas',
    image: '/images/cascada-cifuentes.jpg',
    alt: 'Cascada Cifuentes en el Río Quequén Salado',
    description: 'Cifuentes, Mulpunleufú, Cueva del Tigre y otros sectores sirven para trekking, fotografía y lectura geológica, siempre con cuidado de accesos.',
    bestFor: ['trekking', 'fotografía', 'geología', 'guía local'],
    to: '/atracciones'
  }
]

const matrixRows = [
  {
    activity: 'Kayak / canotaje',
    places: 'Puente Viejo, El Vimar, estuario de Marisol y salidas guiadas.',
    condition: 'Caudal, viento, chaleco y operador si el tramo no es conocido.'
  },
  {
    activity: 'Camping',
    places: 'Puente Viejo y alternativas habilitadas en Marisol.',
    condition: 'Solo con servicios, permisos y manejo responsable del fuego.'
  },
  {
    activity: 'Picnic / asado',
    places: 'Puente Viejo, Balneario Cascallares y áreas claras de permanencia.',
    condition: 'Confirmar habilitación, cuidar residuos y usar sectores permitidos.'
  },
  {
    activity: 'Baño / recreación en el río',
    places: 'Puente Viejo, Balneario Cascallares y sectores habilitados de Marisol.',
    condition: 'Solo donde sea seguro; evitar saltos, compuertas, ruinas y corrientes fuertes.'
  },
  {
    activity: 'Trekking',
    places: 'Puente Viejo, Cueva del Tigre, Cifuentes, Mulpunleufú y senderos del río.',
    condition: 'Evitar barrancas inestables y no ingresar a campos sin autorización.'
  },
  {
    activity: 'Rappel / tirolesa',
    places: 'Base Puente Viejo.',
    condition: 'Actividad técnica: solo con operador, arnés, casco y control de seguridad.'
  },
  {
    activity: 'Safari fotográfico / aves',
    places: 'La Boca, El Vimar, cascadas, caminos rurales y parajes históricos.',
    condition: 'Grupos pequeños, silencio, distancia de fauna y bajo impacto.'
  }
]

const safetyNotes = [
  'Confirmar clima, caudal, viento y estado de caminos antes de salir.',
  'No ingresar a campos privados, ruinas o barrancas sin autorización.',
  'Usar chaleco en actividades de agua y casco/arnés en aventura vertical.',
  'Elegir operadores locales para kayak, rappel, tirolesa y grupos escolares.',
  'No dejar residuos, no alterar fauna y evitar música fuerte en ambientes naturales.',
  'Tratar cada cascada o cueva como ambiente frágil, no como parque urbano.'
]

const sources = [
  {
    label: 'Municipalidad de Coronel Dorrego - Actividades',
    url: 'https://dorrego.gob.ar/mun/direcciones/turismo/menu/la-playa/actividades.php'
  },
  {
    label: 'Municipalidad de Coronel Dorrego - Cómo llegar y qué hacer en Marisol',
    url: 'https://dorrego.gob.ar/mun/direcciones/turismo/menu/la-playa/como-llegar.php'
  },
  {
    label: 'Cooperativa Río Mulpunleufú - Actividades diarias y programadas',
    url: 'https://rioquequensalado.com.ar/'
  },
  {
    label: 'Turismo Tres Arroyos - Micaela Cascallares',
    url: 'https://turismo.tresarroyos.gov.ar/category/rural/cascallares/'
  }
]

useHead({
  title: 'Actividades - Comarca Río Quequén Salado',
  meta: [
    {
      name: 'description',
      content: 'Actividades de ecoturismo en la Comarca Río Quequén Salado: kayak, trekking, camping, picnic, tirolesa, rappel, pesca, deportes náuticos y safaris fotográficos.'
    }
  ]
})
</script>
