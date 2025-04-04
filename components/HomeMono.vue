<script setup lang="ts">
import HomeMonoFooter from '~/components/HomeMonoFooter.vue'
import HomeMonoContent from '~/components/HomeMonoContent.vue'
</script>

<template>
  <div class="home-mono">
    <MainNavigation />
    <HomeMonoContent class="home-mono-content" />
    <HomeMonoFooter />
  </div>
</template>

<style scoped lang="scss">
.home-mono {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &-content {
    flex: 1 1 auto;
  }
}
</style>
