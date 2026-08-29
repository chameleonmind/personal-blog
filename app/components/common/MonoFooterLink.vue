<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <div class="mono-footer-link">
    <a :href="href" target="_blank" rel="noopener noreferrer nofollow" class="footer-link">
      <slot />
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
  </div>
</template>

<style scoped lang="scss">
.mono-footer-link {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 0.5rem;
  border-top: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0 0.5rem;

  svg {
    width: 2rem;
    height: 2rem;
    transition: stroke 0.2s;
  }
}

a.footer-link {
  font-family: var(--font-family-mono);
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent-color);
  border-bottom: none;
  flex: 1 1 auto;

  &:hover {
    color: var(--text-color);

    ~ svg {
      stroke: var(--text-color);
    }
  }
}
</style>
