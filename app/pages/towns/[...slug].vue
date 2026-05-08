<template>
  <div>
    <main class="container mx-auto py-12 px-6">
      <ContentDoc v-slot="{ doc }">
        <article class="max-w-4xl mx-auto">
          <!-- Header with Image -->
          <div v-if="doc.image" class="relative h-[400px] mb-12 rounded-[3rem] overflow-hidden shadow-2xl">
            <img :src="doc.image" :alt="doc.title" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-12">
              <h1 class="text-5xl md:text-7xl font-serif font-bold text-white italic">{{ doc.title }}</h1>
            </div>
          </div>
          <h1 v-else class="text-5xl md:text-7xl font-serif font-bold text-stone-800 italic mb-12 border-b-4 border-stone-200 pb-8">{{ doc.title }}</h1>

          <!-- Quick Info Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div v-if="doc.founded" class="bg-stone-100 p-6 rounded-2xl text-center">
              <span class="block text-xs uppercase tracking-widest text-stone-500 mb-1">Fundación</span>
              <span class="text-xl font-bold text-stone-800">{{ doc.founded }}</span>
            </div>
            <div v-if="doc.population" class="bg-stone-100 p-6 rounded-2xl text-center">
              <span class="block text-xs uppercase tracking-widest text-stone-500 mb-1">Población</span>
              <span class="text-xl font-bold text-stone-800">~{{ doc.population }}</span>
            </div>
          </div>

          <!-- Main Content -->
          <div class="prose prose-stone lg:prose-xl max-w-none">
            <ContentRenderer :value="doc" />
          </div>

          <!-- Attractions List -->
          <div v-if="doc.attractions" class="mt-16 bg-stone-50 p-10 rounded-[2rem] border border-stone-200">
            <h3 class="text-2xl font-bold mb-6 text-stone-800 uppercase tracking-tighter">Qué ver y hacer</h3>
            <ul class="grid md:grid-cols-2 gap-4 list-none p-0">
              <li v-for="attr in doc.attractions" :key="attr" class="flex items-center gap-3 text-stone-700 font-medium">
                <span class="text-stone-400">✨</span> {{ attr }}
              </li>
            </ul>
          </div>

          <!-- Location Links -->
          <div v-if="doc.maps" class="mt-12 flex flex-wrap gap-4">
            <a v-for="(link, label) in doc.maps" :key="label" :href="link" target="_blank" class="bg-stone-800 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-stone-700 transition-all flex items-center gap-2">
              📍 Ubicación {{ label }}
            </a>
          </div>

          <div class="mt-20 pt-12 border-t border-stone-200 text-center">
            <NuxtLink to="/towns" class="inline-flex items-center gap-3 text-stone-500 hover:text-stone-800 font-bold uppercase tracking-widest text-sm transition-all">
              ← Volver a Pueblos
            </NuxtLink>
          </div>
        </article>
      </ContentDoc>
    </main>
  </div>
</template>

<script setup>
// Code in English, Content in Spanish
</script>
