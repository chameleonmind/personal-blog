<script setup lang="ts">
import PostMeta from '~/components/common/PostMeta.vue'
import PostSurround from '~/components/common/PostSurround.vue'
import { useDynamicMetas } from '~/composables/useDynamicMetas'
import { getOgImageDescription } from '~/utils/getOgImageDescription'

const { doc, title, description, postDate, postCategories } = await useDynamicMetas('blog')

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

defineOgImage('ChameleonMindOg', getOgImageDescription(title, description, '| Blog'))
</script>

<template>
  <div>
    <NuxtLayout name="blog">
      <PostMeta :post-date="postDate" :post-categories="postCategories" />
      <ContentRenderer v-if="doc" :value="doc" />
      <PostSurround category="blog" />
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
