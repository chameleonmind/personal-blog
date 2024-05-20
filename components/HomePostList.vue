<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  path: string
}>()
const query: QueryBuilderParams = { path: props.path, limit: 3, sort: [{ date: -1 }] }
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path" class="list-post">
        <p class="post-date">
          {{ new Date(post.date).toLocaleDateString('en-GB') }}
        </p>
        <h3 class="post-title">
          <NuxtLink class="post-link" :to="post._path" :title="post.title">
            {{ post.title }}
          </NuxtLink>
        </h3>
      </div>
    </template>
    <template #not-found>
      <p>Not found</p>
    </template>
  </ContentList>
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
