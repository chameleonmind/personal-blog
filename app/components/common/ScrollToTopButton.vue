<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button class="scroll-to-top" aria-label="Scroll to top" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.scroll-to-top {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--base-color);
  color: var(--text-color);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition:
    background-color 150ms ease-in,
    color 150ms ease-in;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--accent-color);
    color: #fff;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
