<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
    required: true
  },
  target: {
    type: String,
    default: '_blank'
  },
  rel: {
    type: String,
    default: 'noopener noreferrer'
  }
})
</script>

<template>
  <a :href :target :rel><slot /></a>
</template>

<style scoped></style>
