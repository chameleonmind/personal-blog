<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const props = defineProps<{
  collection: Extract<keyof Collections, 'blog' | 'til'>
}>()

const { data: posts } = await useAsyncData(`home-post-list-${props.collection}`, () => {
  return queryCollection(props.collection)
    .select('title', 'path', 'date')
    .order('date', 'DESC')
    .limit(3)
    .all()
})
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.path" class="list-post">
      <p class="post-date">
        {{ new Date(post.date).toLocaleDateString('en-GB') }}
      </p>
      <h3 class="post-title">
        <NuxtLink class="post-link" :to="post.path" :title="post.title">
          {{ post.title }}
        </NuxtLink>
      </h3>
    </div>
    <p v-if="!posts?.length">
      Not found
    </p>
  </div>
</template>

<style scoped lang="scss">
.post-date {
  font-size: 0.75rem;
  margin-bottom: 0;
}
.post-title {
  font-size: 1rem;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
}

.list-post {
  padding: 0.25rem 0;
  + .list-post {
    border-top: 1px dashed var(--border-color);
  }
}

.post-link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
  border-bottom: none;
}
</style>
