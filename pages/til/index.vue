<script setup lang="ts">
useHead({
  title: `Chameleon Mind | Today I learned`,
  meta: [
    { hid: 'description', name: 'description', content: 'Today I learned posts by Milos Milosevic (Chameleon Mind)' },
    // Open Graph
    { hid: 'og:title', property: 'og:title', content: 'Today I learned posts' },
    { hid: 'og:description', property: 'og:description', content: 'Today I learned posts by Milos Milosevic (Chameleon Mind)' },
    // Twitter Card
    { hid: 'twitter:title', name: 'twitter:title', content: 'Today I learned posts' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Today I learned posts by Milos Milosevic (Chameleon Mind)' }
  ]
})

defineOgImageComponent('ChameleonMindOg', {
  section: '| Today I learned',
  title: 'Today I learned posts',
  description: 'Today I learned posts by Milos Milosevic (Chameleon Mind)',
})
</script>

<template>
  <div>
    <NuxtLayout name="blog">
      <PostList path="/til" />
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
