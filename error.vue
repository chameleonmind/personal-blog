<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="error-page">
    <AuroraLight />
    <p>
      <template v-if="props?.error?.statusCode === 404">
        Page not found
      </template>
      <template v-else>
        Something went wrong
      </template>
    </p>
    <h1>{{ props?.error?.statusCode }}</h1>
    <NuxtLink to="/">
      Go back home
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  text-align: center;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 10rem;
    margin: 0;
  }

  p {
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
