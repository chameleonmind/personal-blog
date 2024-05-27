<script setup lang="ts">
const route = useRoute()

const { data: posts } = useAsyncData('blog-surround', () => queryContent()
  .only(['title', '_path', '_dir'])
  .where({ _dir: 'blog' })
  .findSurround(route.path))
</script>

<template>
  <div class="post-surround">
    <template v-for="(post, index) in posts">
      <NuxtLink v-if="post" :key="post._path" :to="post._path" class="post-link" :class="index === 0 ? 'previous' : 'next'">
        <span v-if="index === 0" class="arrow-previous">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </span>
        <span v-else class="arrow-next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
        <span class="title">
          <small>{{ post._dir }}</small>
          {{ post.title }}
        </span>
      </NuxtLink>
      <span v-else />
    </template>
  </div>
</template>

<style scoped lang="scss">
.post-surround {
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  .post-link {
    flex: 0 0 50%;
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      border-color: var(--accent-color);
    }

    &.next {
      justify-content: flex-end;
    }

    .title {
      order: 1;
    }

    .title > small {
      display: block;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }

    .arrow-previous,
    .arrow-next {
      display: block;
    }

    .arrow-next {
      order: 2;
      //margin-left: auto;
    }

    .arrow-previous {
      order: 0;
      //margin-right: auto;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      vertical-align: middle;
    }
  }

  .empty-link {
    flex: 0 0 50%;
  }
}
</style>
