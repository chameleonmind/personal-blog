import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  categories: z.array(z.string()).optional()
})

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: postSchema
    }),
    til: defineCollection({
      type: 'page',
      source: 'til/**',
      schema: postSchema
    }),
    frameFusion: defineCollection({
      type: 'page',
      source: 'frame-fusion/**',
      schema: postSchema
    })
  }
})
