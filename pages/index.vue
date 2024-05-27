<script setup lang="ts">
definePageMeta({
  documentDriven: false
})
</script>

<template>
  <NuxtLayout>
    <AuroraLight />
    <div class="main-content">
      <MainNavigation />
      <HomeGrid />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.main-content {
  position: relative;
  z-index: 1;
}
</style>
