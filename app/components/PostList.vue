<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const props = defineProps<{
  collection: Extract<keyof Collections, 'blog' | 'til'>
}>()

const { data: posts } = await useAsyncData(`post-list-${props.collection}`, () => {
  return queryCollection(props.collection)
    .select('title', 'path', 'date', 'description')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.path" class="single-post">
      <p class="date">
        {{ new Date(post.date).toLocaleDateString('en-GB') }}
      </p>
      <NuxtLink :to="post.path" class="post-title">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <p class="description">
        {{ post.description }}
      </p>
    </div>
    <p v-if="!posts?.length">
      Not found
    </p>
  </div>
</template>

<style scoped lang="scss">
.single-post {
  margin-bottom: 1rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--border-color-alt);
}
.date {
  font-size: 0.875rem;
  margin-bottom: 0 !important;
}

.post-title:hover {
  color: var(--accent-color);
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
}

p.description {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
</style>
