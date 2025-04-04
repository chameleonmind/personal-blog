<script setup lang="ts">
useHead({
  title: `Chameleon Mind`,
  meta: [
    { hid: 'description', name: 'description', content: 'Personal website of Milos Milosevic (Chameleon Mind)' },
    { hid: 'og:title', property: 'og:title', content: 'Chameleon Mind' },
    { hid: 'og:description', property: 'og:description', content: 'Personal website of Milos Milosevic (Chameleon Mind)' },
    // Twitter Card
    { hid: 'twitter:title', name: 'twitter:title', content: 'Chameleon Mind' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Personal website of Milos Milosevic (Chameleon Mind)' }
  ]
})

defineOgImageComponent('ChameleonMindOg', {
  title: 'Chameleon Mind',
  description: 'Personal website of Milos Milosevic (Chameleon Mind)'
})
</script>

<template>
  <div style="position: relative">
    <NuxtLayout>
      <AuroraLight />
      <div class="main-content">
        <HomeMono />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
:deep(.aurora-light) {
  z-index: 0;
}
.main-content {
  position: relative;
  z-index: 1;
}
</style>
