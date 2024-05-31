<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <ContentList :path>
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path" class="single-post">
        <p class="date">
          {{ new Date(post.date).toLocaleDateString('en-GB') }}
        </p>
        <NuxtLink :to="post._path">
          <h2>{{ post.title }}</h2>
        </NuxtLink>
        <p class="description">
          {{ post.description }}
        </p>
        <NuxtLink :to="post._path">
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
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}
.date {
  font-size: 0.875rem;
  margin-bottom: 0 !important;
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
}

p.description {
  margin-bottom: 0.5rem;
}
</style>
