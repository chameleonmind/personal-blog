<script setup lang="ts">
import PostSurround from '~/components/common/PostSurround.vue'
import PostMeta from '~/components/common/PostMeta.vue'
import { useDynamicMetas } from '~/composables/useDynamicMetas'
import { getOgImageDescription } from '~/utils/getOgImageDescription'

const { title, description, postDate, postCategories } = await useDynamicMetas()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Chameleon Mind - ${titleChunk}` : 'Chameleon Mind'
  },
  meta: [
    { name: 'description', content: description },
    // Open Graph
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    // Twitter Card
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description }
  ]
})

defineOgImageComponent('ChameleonMindOg', getOgImageDescription(title, description, '| Blog'))
</script>

<template>
  <NuxtLayout name="blog">
    <PostMeta :post-date="postDate" :post-categories="postCategories" />
    <ContentDoc />
    <PostSurround />
  </NuxtLayout>
</template>

<style scoped>

</style>
