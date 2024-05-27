<script setup lang="ts">
import ScrollToTopButton from '~/components/common/ScrollToTopButton.vue'

const scrollingDown = ref(false)
const lastPosition = ref(0)
const scrollToTopVisible = ref(false)

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > lastPosition.value && window.scrollY > 50) {
      scrollingDown.value = true
      lastPosition.value = window.scrollY - 5
    }
    else {
      scrollingDown.value = false
      lastPosition.value = window.scrollY + 5
    }

    scrollToTopVisible.value = window.scrollY > 500
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <AuroraLight />
  <main>
    <MainNavigation id="main-nav" class="sticky-header" :class="{ 'nav-hidden': scrollingDown }" />
    <div class="blog-layout">
      <slot />
    </div>
    <ScrollToTopButton v-if="scrollToTopVisible" />
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';

.sticky-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease-in;

  &.nav-hidden {
    transform: translateY(-100%);
  }
}
.blog-layout {
  font-size: 1rem;
  max-width: 70ch;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;

  @include screen-size('tablet') {
    padding-top: 2rem;
  }

  :deep(h1) {
    margin-top: 2rem;
    font-size: 2.25rem;

    @include screen-size('tablet') {
      font-size: var(--h1-font-size);
    }
  }

  :deep(p) {
    margin-bottom: 1.5rem;
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
  font-size: 0.9rem;
}

:deep(img) {
  display: block;
  max-width: 100%;
  border-radius: var(--border-radius);
  box-shadow: 0 0 24px rgba(73, 28, 197, 0.15);
}
</style>
