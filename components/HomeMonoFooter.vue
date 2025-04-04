<script setup lang="ts">
import MonoFooterLink from '~/components/common/MonoFooterLink.vue'

const links = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/milosevicm/',
  },
  {
    title: 'Github',
    href: 'https://github.com/chameleonmind',
  },
  {
    title: 'Medium',
    href: 'https://medium.com/@chameleonmind',
  },
  {
    title: 'X.com',
    href: 'https://x.com/chameleon_mind',
  },
  {
    title: 'Bluesky',
    href: 'https://bsky.app/profile/chameleonmind.bsky.social',
  },
]
</script>

<template>
  <div class="home-mono-footer">
    <MonoFooterLink
      v-for="(link, index) in links"
      :key="link.title"
      :href="link.href"
      class="footer-link" :style="{ animationDelay: `${index * 0.1}s` }"
    >
      {{ link.title }}
    </MonoFooterLink>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css-utils/breakpoints.scss';
@import '@/assets/css-utils/animations.scss';
.home-mono-footer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  overflow: hidden;

  @include screen-size('tablet') {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 0.5rem;
  }

  @include screen-size('desktop') {
    padding: 1rem 2rem 0.5rem;
  }

  .footer-link {
    opacity: 0;
    animation: appear-up 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
}
</style>
