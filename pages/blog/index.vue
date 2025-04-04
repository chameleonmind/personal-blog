<script setup lang="ts">
useHead({
  title: `Chameleon Mind | Blog`,
  meta: [
    { hid: 'description', name: 'description', content: 'Blog posts by Milos Milosevic (Chameleon Mind)' },
    { hid: 'og:title', property: 'og:title', content: 'Blog posts' },
    { hid: 'og:description', property: 'og:description', content: 'Blog posts by Milos Milosevic (Chameleon Mind)' },
    // Twitter Card
    { hid: 'twitter:title', name: 'twitter:title', content: 'Blog posts' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Blog posts by Milos Milosevic (Chameleon Mind)' }
  ]
})

defineOgImageComponent('ChameleonMindOg', {
  section: '| Blog',
  title: 'Blog posts',
  description: 'Blog posts by Milos Milosevic (Chameleon Mind)',
})
</script>

<template>
  <div>
    <NuxtLayout name="blog">
      <PostList path="/blog" />
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
