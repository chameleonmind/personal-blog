<script setup lang="ts">

</script>

<template>
  <NuxtPage />
</template>

<style>
.blur-enter-active,
.blur-leave-active {
  transition: all 0.2s;
  overflow: hidden;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
