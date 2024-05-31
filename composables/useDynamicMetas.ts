export async function useDynamicMetas() {
  const route = useRoute()
  const postMeta = await queryContent()
    .only(['title', 'date', 'categories', 'description'])
    .where({ _path: route.path })
    .findOne()

  const postDate = computed(() => {
    return new Date(postMeta?.date).toLocaleDateString('en-GB')
  })

  const postCategories = computed(() => {
    if (postMeta?.categories && postMeta?.categories.length)
      return postMeta?.categories.join(', ')
    else
      return ''
  })

  return {
    title: postMeta.title,
    description: postMeta.description,
    postDate,
    postCategories
  }
}
