<script setup lang="ts">
defineProps({
  postDate: String,
  postCategories: String
})
</script>

<template>
  <div class="post-meta">
    <small>{{ postDate }}</small><small>{{ postCategories ? `| ${postCategories}` : '' }}</small>
  </div>
</template>

<style scoped lang="scss">
.post-meta {
  margin-bottom: 1rem;
}
</style>
