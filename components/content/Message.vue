<script setup lang="ts">

</script>

<template>
  <div class="inline-message">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.inline-message {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin: 1rem 0;

  :deep(p:last-child) {
    margin-bottom: 0;
  }
}
</style>
