<script setup lang="ts">

</script>

<template>
  <NuxtLink to="/about" class="home-mono-cta">
    Projects and about me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  </NuxtLink>
</template>

<style scoped lang="scss">
.home-mono-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--font-family-mono), monospace;
  text-transform: lowercase;
  font-weight: 700;
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  //border: 1px solid var(--border-color-alt);
  border-bottom: none;
  transition: color 0.2s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-color);
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 12px),
      calc(100% - 12px) 100%,
      0 100%,
      0 0,
      1px 1px,
      1px calc(100% - 1px),
      calc(100% - 12px - 0.83px) calc(100% - 1px),
      calc(100% - 1px) calc(100% - 12px - 0.83px),
      calc(100% - 1px) 1px,
      1px 1px
    );
    transition: background-color 0.2s;
  }

  &:hover {
    color: var(--text-color-hover);

    &:before {
      background: var(--text-color-hover);
    }
  }
}
</style>
