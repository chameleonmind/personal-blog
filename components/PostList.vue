<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <ContentList :path>
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path">
        <p class="date">
          {{ new Date(post.date).toLocaleDateString('en-GB') }}
        </p>
        <h2>{{ post.title }}</h2>
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

<style scoped>
.date {
  font-size: 0.875rem;
  margin-bottom: 0 !important;
}

h2 {
  margin-top: 0;
}

p.description {
  margin-bottom: 1rem;
}
</style>
