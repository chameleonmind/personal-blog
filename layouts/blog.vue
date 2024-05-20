<script setup lang="ts">

</script>

<template>
  <AuroraLight />
  <main>
    <MainNavigation class="sticky-header" />
    <div class="blog-layout">
      <slot />
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';

.sticky-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(4px);
}
.blog-layout {
  font-size: 1rem;
  max-width: 70ch;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
  //background-color: var(--base-color);

  @include screen-size('tablet') {
    padding-top: 4rem;
  }
}

main {
  position: relative;
  z-index: 1;
}

:deep(pre.shiki) {
  overflow: auto;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  padding: 0.5rem;
  background-color: #e9e8ed;
}

:deep(img) {
  display: block;
  max-width: 100%;
  border-radius: var(--border-radius);
  box-shadow: 0 0 24px rgba(73, 28, 197, 0.15);
}
</style>
