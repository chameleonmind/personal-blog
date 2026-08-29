<script setup lang="ts">
import { useDynamicMetas } from '~/composables/useDynamicMetas'

const { doc, title, description } = await useDynamicMetas('frameFusion')

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

defineOgImage('ChameleonMindOg', {
  section: '| Frame Fusion',
  title,
  description,
})
</script>

<template>
  <div>
    <NuxtLayout name="blog">
      <ContentRenderer v-if="doc" :value="doc" />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
