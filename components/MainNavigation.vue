<script setup lang="ts">
import { useAsyncData } from '#app'

const { data: navigation } = useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <header>
    <NuxtLink to="/" class="logo-link">
      <p class="logo">
        ChameleonMind
      </p>
    </NuxtLink>
    <nav>
      <ul>
        <li v-for="nav in navigation" :key="nav._path">
          <NuxtLink :to="nav._path">
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 1rem;
}
.logo-link {
  border-bottom: none;
}
.logo {
  font-weight: 700;
  font-family: var(--font-family-heading), sans-serif;
  margin-bottom: 0;
}

nav ul {
  display: flex;
  gap: 1rem;

  a {
    text-transform: uppercase;
    font-size: 0.875rem;
    border-bottom: none;
  }
}
</style>
