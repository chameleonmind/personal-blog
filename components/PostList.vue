<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  path: string
}>()
const query: QueryBuilderParams = { path: props.path, sort: [{ date: -1 }] }
</script>

<template>
  <ContentList :query>
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path" class="single-post">
        <p class="date">
          {{ new Date(post.date).toLocaleDateString('en-GB') }}
        </p>
        <NuxtLink :to="post._path" class="post-title">
          <h2>{{ post.title }}</h2>
        </NuxtLink>
        <p class="description">
          {{ post.description }}
        </p>
        <NuxtLink v-if="false" :to="post._path">
          Read more
        </NuxtLink>
      </div>
    </template>
    <template #not-found>
      <p>Not found</p>
    </template>
  </ContentList>
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
