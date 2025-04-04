<script setup lang="ts">
import { useDynamicMetas } from '~/composables/useDynamicMetas'

const { title, description } = await useDynamicMetas()

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

defineOgImageComponent('ChameleonMindOg', {
  section: '| Frame Fusion',
  title,
  description,
})
</script>

<template>
  <div>
    <NuxtLayout name="blog">
      <ContentDoc />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
