<script setup lang="ts">

</script>

<template>
  <NuxtLink to="/about" class="home-mono-cta-link">
    Projects and about me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="butt" stroke-linejoin="miter"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  </NuxtLink>
</template>

<style scoped lang="scss">
.home-mono-cta-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  //font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1.15rem;
  color: var(--accent-color);
  transition: color 0.2s ease-in-out;

  svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    color: var(--text-color);

    svg {
      transform: translateX(0.25rem);
    }
  }
}
.home-mono-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--font-family-mono), monospace;
  text-transform: lowercase;
  font-weight: 700;
  color: var(--text-color);
  background-color: var(--accent-color);
  padding: 0.5rem 1.5rem;
  border-bottom: none;
  transition: color 0.2s ease-in-out;
  position: relative;
  clip-path: polygon(
    0 12px,
    12px 0,
    100% 0,
    100% calc(100% - 12px),
    calc(100% - 12px) 100%,
    0 100%
  );

  &:hover {
    color: var(--text-color-hover);

    &:before {
      background: var(--text-color-hover);
    }
  }
}
</style>
