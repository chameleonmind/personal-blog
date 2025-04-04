<script setup lang="ts">
import ProfileImage from '~/components/ProfileImage.vue'
import LinkOut from '~/components/common/LinkOut.vue'

const imageKey = ref(0)

function refreshImageKey() {
  imageKey.value++
}

useHead({
  title: `Chameleon Mind | About`,
  meta: [
    { hid: 'description', name: 'description', content: 'About Milos Milosevic (Chameleon Mind)' },
    { hid: 'og:title', property: 'og:title', content: 'About | Chameleon Mind' },
    { hid: 'og:description', property: 'og:description', content: 'About Milos Milosevic (Chameleon Mind)' },
    // Twitter Card
    { hid: 'twitter:title', name: 'twitter:title', content: 'About | Chameleon Mind' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'About Milos Milosevic (Chameleon Mind)' }
  ]
})

defineOgImageComponent('ChameleonMindOg', {
  section: '| About',
  title: 'Projects and about me',
  description: 'Milos Milosevic (Chameleon Mind)'
})
</script>

<template>
  <div class="main-content">
    <NuxtLayout>
      <div class="about-page">
        <AuroraLight />
        <MainNavigation />
        <div class="about-content">
          <div class="about-content-left">
            <ProfileImage :key="imageKey" class="appear-animation" @click="refreshImageKey" />
            <h1 class="about-heading main-heading appear-animation" style="animation-delay: 0.2s">
              About me
            </h1>
            <p class="about-description appear-animation" style="animation-delay: 0.4s">
              I'm Miloš Milošević, a web developer and front-end tech lead with over 10 years of experience creating
              scalable and performant web applications. My technical expertise includes Vue/Nuxt ecosystem,
              JavaScript/TypeScript, Node.js, and PHP. I enjoy using Vue, AdonisJS and Laravel, but I have worked with
              every major framework, including React, Angular, Svelte, and others. Alongside building component
              libraries and web apps, I have significant experience leading teams, mentoring developers, and managing
              software projects from concept to production.
            </p>
            <p class="about-description appear-animation" style="animation-delay: 0.6s">
              I like reading books whenever I can, and enjoy writing about technology, programming, new trends, and
              lots of other things I find interesting.
            </p>
          </div>
          <div class="about-content-right">
            <h2 class="about-heading appear-animation" style="animation-delay: 0.8s">
              selected projects
            </h2>
            <ul class="project-list">
              <li class="appear-animation" style="animation-delay: 1s">
                <NuxtLink to="/frame-fusion">
                  Frame Fusion
                </NuxtLink>
                - animate sequences of images in a single frame
              </li>
              <li class="appear-animation" style="animation-delay: 1.1s">
                <LinkOut href="https://github.com/chameleonmind/nshot">
                  Nshot
                </LinkOut>
                - a screenshot tool based on Screen Capture API
              </li>
              <li class="appear-animation" style="animation-delay: 1.2s">
                Keysmash Kids - a game for kids that let's them smash keyboard and have fun (coming soon)
              </li>
              <li class="appear-animation" style="animation-delay: 1.3s">
                ApeironUI - a Vue 3 component library (closed for public)
              </li>
            </ul>
          </div>
        </div>
        <HomeMonoFooter />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css-utils/breakpoints.scss';
@import '@/assets/css-utils/animations.scss';

:deep(.aurora-light) {
  z-index: 0;
}

.main-content {
  position: relative;
  z-index: 1;
}

.about-page {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  .about-content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0;

    @include screen-size('tablet') {
      align-items: center;
      flex-direction: row;
    }
  }

  .about-content-left,
  .about-content-right {
    flex: 1 1 50%;
    padding: 0 1rem;
  }

  .about-content-left {
    border-bottom: 1px solid var(--border-color-alt);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 2rem;

    @include screen-size('tablet') {
      border-bottom: none;
      border-right: 1px solid var(--border-color-alt);
      padding-bottom: 0;
    }
  }

  .about-content-right {
    padding-top: 2rem;

    @include screen-size('tablet') {
      padding-top: 0;
    }
  }

  .about-heading {
    font-weight: normal;
    font-size: 2rem;
    font-family: var(--font-family-mono);
    color: var(--accent-color);
    margin-top: 0;
    margin-bottom: 0.5rem;

    &.main-heading {
      letter-spacing: 4px;
    }
  }

  .about-description {
    font-size: 1rem;
    max-width: 50ch;
    text-align: right;
    text-wrap-style: pretty;
  }

  .appear-animation {
    opacity: 0;
    animation: appear-up 250ms ease-in-out;
    animation-fill-mode: forwards;
  }

  .project-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 45ch;

    a {
      font-weight: bold;
    }
  }
}
</style>
