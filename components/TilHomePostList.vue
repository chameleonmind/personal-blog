<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/til', limit: 1, sort: [{ date: -1 }] }
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
        <p class="post-description">
          {{ post.description }}
          <NuxtLink :to="post._path" class="inline-link" aria-label="Read more">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </NuxtLink>
        </p>
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

.post-description {
  font-size: 0.875rem;
}

.inline-link {
  margin-left: 0.25rem;
  border-bottom: none;

  svg {
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
  }
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
