import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        area: z.string().optional(),
        image: z.string().optional(),
        founded: z.string().optional(),
        population: z.string().optional(),
        distance: z.string().optional(),
        access: z.string().optional(),
        category: z.string().optional(),
        marker: z.string().optional(),
        mapRef: z.string().optional(),
        mapUrl: z.string().optional(),
        mapQuery: z.string().optional(),
        mapImage: z.string().optional(),
        mapImageAlt: z.string().optional(),
        imageAlt: z.string().optional(),
        experience: z.string().optional(),
        visitTime: z.string().optional(),
        difficulty: z.string().optional(),
        bestSeason: z.string().optional(),
        baseTown: z.string().optional(),
        baseTownUrl: z.string().optional(),
        locationNote: z.string().optional(),
        conservation: z.string().optional(),
        attractions: z.array(z.string()).optional(),
        highlights: z.array(z.string()).optional(),
        activities: z.array(z.string()).optional(),
        recommendations: z.array(z.string()).optional(),
        nearby: z.array(z.object({
          label: z.string(),
          to: z.string().optional()
        })).optional(),
        maps: z.record(z.string(), z.string()).optional(),
        gallery: z.array(z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional()
        })).optional(),
        sources: z.array(z.object({
          label: z.string(),
          url: z.string()
        })).optional()
      })
    })
  }
})
