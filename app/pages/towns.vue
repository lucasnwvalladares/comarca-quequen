<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <div class="max-w-6xl mx-auto text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-serif font-bold mb-6 text-stone-800 italic uppercase tracking-tighter">Pueblos de la Comarca</h2>
        <p class="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Descubre la calidez rural y el patrimonio histórico de las localidades que dan vida a la región. Haz clic en cada pueblo para ver su guía completa.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Card Generator Macro -->
        <template v-for="town in towns" :key="town.path">
          <NuxtLink 
            :to="town.path"
            class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col group hover:-translate-y-2"
          >
            <div class="h-64 overflow-hidden relative">
              <img :src="town.image" :alt="town.title" class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
              <div class="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
              <div class="absolute bottom-4 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity">
                EXPLORAR GUÍA →
              </div>
            </div>
            <div class="p-8 flex-grow">
              <h3 class="text-3xl font-serif font-bold mb-3 text-stone-800 italic group-hover:text-stone-600 transition-colors">{{ town.title }}</h3>
              <p class="text-stone-500 text-sm leading-relaxed mb-6">{{ town.description }}</p>
              <div class="flex items-center gap-2 text-stone-400 group-hover:text-stone-800 transition-colors font-bold text-xs tracking-widest uppercase">
                <span>Ver detalles</span>
                <span class="text-xl">→</span>
              </div>
            </div>
          </NuxtLink>
        </template>

        <!-- More Towns (Coming Soon) -->
        <div class="bg-stone-100 rounded-[2.5rem] p-10 flex flex-col justify-center border-2 border-dashed border-stone-200 lg:col-span-2">
           <h3 class="text-2xl font-serif font-bold text-stone-400 mb-4 italic">Otras Localidades</h3>
           <div class="flex flex-wrap gap-3">
             <span v-for="t in ['Oriente', 'Copetonas', 'Reta', 'Gonzales Chaves', 'El Perdido', 'Aparicio', 'Irene', 'De La Garma']" :key="t" class="bg-white px-4 py-2 rounded-full text-xs font-bold text-stone-400 border border-stone-200">
               {{ t }}
             </span>
           </div>
           <p class="mt-6 text-stone-400 text-sm italic">Estamos trabajando para completar las guías de cada rincón de la comarca.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const towns = [
  {
    title: 'Micaela Cascallares',
    path: '/towns/cascallares',
    image: '/images/cascallares-portal.png',
    description: 'El portal de entrada terrestre. Historia ferroviaria, herencia de inmigrantes y tranquilidad absoluta.'
  },
  {
    title: 'Indio Rico',
    path: '/towns/indio-rico',
    image: '/images/cascallares-estacion.jpg', // Placeholder for now
    description: 'Pueblo Turístico famoso por su arquitectura bizantina y su Museo Ferroviario en una estación de 1929.'
  },
  {
    title: 'Balneario Marisol',
    path: '/towns/marisol',
    image: '/images/rio-quequen.jpg', // Placeholder for now
    description: 'La joya natural donde el río abraza el mar. Playas vírgenes, dunas gigantes e historia viva.'
  }
]

useHead({
  title: 'Pueblos de la Comarca - Quequén Salado',
  meta: [
    { name: 'description', content: 'Guía interactiva de los pueblos de la Comarca del Quequén Salado.' }
  ]
})
</script>
