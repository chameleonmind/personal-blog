<script setup lang="ts">
import LinkOut from '~/components/common/LinkOut.vue'
import HomeMonoResources from '~/components/HomeMonoResources.vue'

const name = 'Miloš MilošeVić'

const animationKey = ref(1)
function restartAnimation() {
  animationKey.value = Math.random()
}
</script>

<template>
  <div class="about-content">
    <div class="about-content-left">
      <h1 :key="animationKey" class="name" @click="restartAnimation">
        <span class="sr-only">
          {{ name }}
        </span>
        <template v-for="(letter, index) in name">
          <br v-if="letter === ' '" :key="index">
          <span v-else :key="letter + index" class="name-letter" :style="{ animationDelay: `${index * 0.1}s` }">{{ letter }}</span>
        </template>
      </h1>
      <p class="description appear-animation" style="animation-delay: 1.8s">
        aka chameleon mind
      </p>
      <p class="description appear-animation" style="animation-delay: 2s">
        Former head of Product and current Lead Frontend enGineer at
        <LinkOut href="https://wisertech.com/">
          Wiser Technology Serbia
        </LinkOut>
      </p>
      <p class="description appear-animation" style="animation-delay: 2.2s">
        i build stuff using TypeScript and PhP
      </p>
      <p v-if="false" class="description">
        I enjoy using Vue, Nuxt, AdonisJS, and Laravel.
      </p>
    </div>
    <div class="about-content-right">
      <HomeMonoResources class="appear-animation" style="animation-delay: 1.6s" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css-utils/breakpoints.scss';
@import '@/assets/css-utils/animations.scss';
.about-content {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  @include screen-size('tablet') {
    height: 100%;
    align-items: center;
    flex-direction: row;
    padding: 0 1rem;
  }

  @include screen-size('desktop') {
    padding: 0 2rem;
  }

  .name {
    font-size: 3rem;
    font-weight: 700;
    font-family: var(--font-family-mono);
    color: var(--accent-color);
    margin-bottom: 0;
    cursor: default;

    @include screen-size('tablet') {
      font-size: 3.5rem;
    }

    .name-letter {
      display: inline-block;
      opacity: 0;
      animation: appear-up-blur 150ms ease-out;
      animation-fill-mode: forwards;
    }
  }
}

.about-content-left {
  flex: 1 1 50%;
  text-align: right;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .description {
    font-family: var(--font-family-mono);
    color: var(--accent-color);
    max-width: 50ch;
  }
}

.about-content-right {
  flex: 1 1 50%;
  padding: 0 2rem;
}

.appear-animation {
  opacity: 0;
  animation: appear-up 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
</style>
