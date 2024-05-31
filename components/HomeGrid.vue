<script setup lang="ts">
import LinkOut from '~/components/common/LinkOut.vue'
import HomePostList from '~/components/HomePostList.vue'
import TilHomePostList from '~/components/TilHomePostList.vue'
</script>

<template>
  <div class="home">
    <div class="home-top-wrapper">
      <div class="wrapper-left">
        <section class="home-left-intro">
          <div class="half-wrapper">
            <h1>
              <span class="home-text-intro">Hello, my name is</span>
              Miloš Milošević
            </h1>
            <p class="home-text-description">
              I build stuff using TypeScript and PHP.
            </p>
            <p>
              Currently working as a Head of Product and a lead frontend engineer at Badin Soft, located in Niš, Serbia.
            </p>
            <p>I enjoy using Vue, Nuxt, AdonisJS, and Laravel.</p>
            <p>
              You can find me here:
              <LinkOut href="https://github.com/chameleonmind">
                Github
              </LinkOut> /
              <LinkOut href="https://medium.com/@chameleonmind">
                Medium
              </LinkOut> /
              <LinkOut href="https://x.com/chameleon_mind">
                X.com
              </LinkOut>
            </p>
          </div>
        </section>
        <section class="home-left-work">
          <div class="half-wrapper">
            <h2 class="home-subtitle">
              Work
            </h2>
            <ul class="bulleted-list">
              <li>
                Head of Product at Badin Soft
              </li>
              <li>
                ApeironUI - a Vue 3 component library
              </li>
              <li>
                <LinkOut href="https://github.com/chameleonmind/nshot">
                  Nshot
                </LinkOut> - a screenshot tool based on Screen Capture API
              </li>
              <li>
                FrameFuse - a frame-by-frame and sprite animation JS toolkit
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="wrapper-right">
        <section class="home-right-til">
          <div class="half-wrapper right">
            <NuxtLink to="/til">
              <h2 class="home-subtitle">
                Today I learned
              </h2>
            </NuxtLink>
            <TilHomePostList />
          </div>
        </section>
        <section class="home-right-blogs">
          <div class="half-wrapper right">
            <NuxtLink to="/blog">
              <h2 class="home-subtitle">
                Blog
              </h2>
            </NuxtLink>
            <HomePostList path="blog" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';
.home {
  display: flex;
  flex-direction: column;

  @include screen-size('tablet') {
    height: calc(100dvh - var(--header-height));
  }

  &-top-wrapper {
    display: flex;
    flex-direction: column;

    @include screen-size('tablet') {
      height: 100%;
      align-items: stretch;
      flex-direction: row;
    }
  }

  .wrapper-left {
    flex: 1 1 60%;
  }

  .wrapper-right {
    flex: 1 1 40%;
  }

  .wrapper-left {
    @include screen-size('tablet') {
      border-right: 1px solid var(--border-color);
    }
  }

  .home-left-intro,
  .home-right-til {
    border-bottom: 1px solid var(--border-color);
  }

  .home-left-work {
    border-bottom: 1px solid var(--border-color);
    @include screen-size('tablet') {
      border-bottom: none;
    }
  }

  h1 {
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .home-text-intro,
  .home-text-description {
    font-weight: 400;
    font-size: 1.5rem;
    font-style: italic;
    font-family: var(--font-family-heading), sans-serif;
    display: block;
    margin-bottom: 1rem;
  }

  .half-wrapper {
    padding: 2rem 1rem;

    @include screen-size('tablet') {
      margin-left: auto;
      max-width: calc(960px * 0.6);
    }

    p:not(.home-text-description) {
      max-width: 80%;
    }

    &.right {
      @include screen-size('tablet') {
        max-width: calc(960px * 0.4);
        margin-left: 0;
        margin-right: auto;
      }
    }
  }

  .home-subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
}

.bulleted-list {
  list-style-type: disc;
  padding-left: 1rem;
}
</style>
