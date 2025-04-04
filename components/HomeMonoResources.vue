<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const tilQuery: QueryBuilderParams = { path: '/til', limit: 3, sort: [{ date: -1 }] }
const blogQuery: QueryBuilderParams = { path: '/blog', limit: 3, sort: [{ date: -1 }] }
</script>

<template>
  <div class="home-mono-resources">
    <p class="level-0">
      <span class="declaration-color">const</span> <span class="var-color">ChameleonMind</span> <span class="declaration-color">=</span> {
    </p>
    <p class="level-1">
      <NuxtLink to="/blog" class="category-link">
        blog:
      </NuxtLink> [
    </p>
    <ContentList :query="blogQuery">
      <template #default="{ list }">
        <p v-for="post in list" :key="post._path" class="level-2">
          <NuxtLink class="post-link" :to="post._path" :title="post.title">
            '{{ post.title }}',
          </NuxtLink>
        </p>
      </template>
      <template #not-found>
        <p>Not found</p>
      </template>
    </ContentList>
    <p class="level-1">
      ],
    </p>
    <p class="level-1">
      <NuxtLink to="/til" class="category-link">
        todayILearned:
      </NuxtLink> [
    </p>
    <ContentList :query="tilQuery">
      <template #default="{ list }">
        <p v-for="(post, index) in list" :key="post._path" class="level-2">
          <NuxtLink class="post-link" :to="post._path" :title="post.title" :style="{ animationDelay: `${index * 0.2 + 3.5}s` }">
            '{{ post.title }}',
          </NuxtLink>
        </p>
      </template>
      <template #not-found>
        <p>Not found</p>
      </template>
    </ContentList>
    <p class="level-1">
      ],
    </p>
    <p>}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css-utils/breakpoints.scss';
.home-mono-resources {
  padding: 1rem;
  border: 1px solid var(--border-color-lite);
  border-radius: var(--border-radius);
  background-color: var(--base-color-lighter);

  p {
    font-size: 1.15rem;
    margin-bottom: 0;
    font-family: monospace;
    line-height: 1.5;

    &.level-0 {
      white-space: nowrap;
    }
    &.level-1 {
      margin-left: 1rem;
    }

    &.level-2 {
      margin-left: 2rem;
    }

    .declaration-color {
      color: var(--accent-color);
    }

    .var-color {
      color: var(--accent-color-alt);
    }
  }

  .overflow-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .category-link,
  .post-link {
    border-bottom: none;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.25rem;
    text-decoration-color: var(--border-color-alt);

    &:hover {
      color: var(--accent-color);
    }
  }

  .category-link {
    display: inline-block;
  }

  .post-link {
    display: inline-block;
  }
}
</style>
