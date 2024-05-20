<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <ContentList :path>
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path">
        <h2>{{ post.title }}</h2>
        <p>{{ new Date(post.date).toLocaleDateString('en-GB') }}</p>
        <p>{{ post.description }}</p>
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

</style>
