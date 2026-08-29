import type { Collections } from '@nuxt/content'

type PostCollection = Extract<keyof Collections, 'blog' | 'til' | 'frameFusion'>

export async function useDynamicMetas(collection: PostCollection) {
  const route = useRoute()

  // One query per page: the rendered body and the metadata come from the same
  // document, which <ContentDoc /> used to fetch on its own in Content v2.
  const { data: doc } = await useAsyncData(`content-${route.path}`, () => {
    return queryCollection(collection).path(route.path).first()
  })

  if (!doc.value)
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

  const postDate = computed(() => {
    return doc.value?.date ? new Date(doc.value.date).toLocaleDateString('en-GB') : ''
  })

  const postCategories = computed(() => {
    const categories = doc.value?.categories
    return categories?.length ? categories.join(', ') : ''
  })

  return {
    doc,
    title: doc.value.title,
    description: doc.value.description,
    postDate,
    postCategories
  }
}
