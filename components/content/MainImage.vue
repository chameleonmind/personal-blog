<script setup lang="ts">

</script>

<template>
  <div class="main-image">
    <div class="content">
      <slot />
    </div>
    <div class="attribution">
      <slot name="attribution" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-image {
  width: calc(100vw - 1rem);
  margin-left: calc(50% - 50vw + 0.5rem);
  .content :deep(p:first-child) {
    height: 50vh;
    overflow: hidden;
    background-color: var(--base-color-lighter);
    margin-bottom: 0;
  }

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0;
  }

  .attribution {
    :deep(p) {
      font-size: 0.875rem;
      margin-bottom: 0;
      margin-top: 0;
      text-align: center;
    }
  }
}
</style>
