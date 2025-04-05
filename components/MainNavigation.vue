<script setup lang="ts">
import { useAsyncData } from '#app'

const { data: navigation } = useAsyncData('navigation', async () => {
  const nav = await fetchContentNavigation()
  return nav.filter(navItem => navItem._path !== '/frame-fusion')
})
</script>

<template>
  <header>
    <div class="header-inner">
      <NuxtLink to="/" class="logo-link" aria-label="Chameleon Mind go to home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <g id="Layer_1" data-name="Layer 1">
            <path d="M527.4 143.3c71.5 41.3 132.7 98.5 178.8 166.7 7.8 11.5 15.2 23.4 22.1 35.5s10.9 19.9 15.9 30.1c32.2 65.8 51.5 139 54.7 216.4s-15.1 15-15.1 22.5h0c0 6.8 15.4 13.6 15 20.4C788.3 811 642.1 950.5 463.4 950.5h0c-114.9-.1-208-93.2-208-208.1h0c0-70.7 57.3-128 128-128h0c44.2 0 80 35.8 80 80s-21.5 48-48 48-32-14.3-32-32" class="cls-4" />
            <path d="M527.4 114.4v208.2c0 37-30 66.9-66.9 66.9H266c-24.8 0-44-21.9-40.6-46.5 15.3-110 84.3-201.8 178.2-245.5h0c23.9-11.1 49.5-19.1 76.2-23.5 25-4.1 47.7 15.1 47.7 40.4ZM463.4 694.4V389.5" class="cls-4" />
            <ellipse cx="401" cy="272.2" class="cls-4" rx="49" ry="48.3" />
            <ellipse cx="386.2" cy="295" class="cls-4" rx="20.8" ry="20.4" />
            <path d="M785.7 614.5h-58.3c-39.9 0-72.1-32.4-71.9-72.3h0M600.2 583.9h-1.8c-39.2 0-70.9-31.8-70.9-70.9h0M600.7 645.2h-3.2c-38.5 0-69.7 31.2-69.7 69.7v1.2M583.6 399v-.3c0-39.2 31.8-70.9 70.9-70.9h1.1M636.2 900.6h0c-39.8 0-72-32.2-72-72v-.3M467.1 864.6v2.3c0 38.5-31.2 69.7-69.7 69.7h0M785.7 614.5h-58.3c-39.9 0-72.1 32.4-71.9 72.3h0M713.6 722.6v1.8c0 39.2-31.8 70.9-70.9 70.9h0M726 516v-3.2c0-38.5-31.2-69.7-69.7-69.7h-1.2M383.7 810.8l-1.6-1.6c-27.2-27.2-27.2-71.4 0-98.6h0" class="cls-4" />
          </g>
        </svg>
        <span class="logo-text">
          ChameleonMind
        </span>
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
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/css-utils/breakpoints.scss';
header {
  padding: 0 0.5rem;

  .header-inner {
    border-bottom: 1px solid var(--border-color-alt);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    padding: 0 1rem;
    color: var(--accent-color);
  }

  @include screen-size('tablet') {
    margin: 0 1rem;
  }

  @include screen-size('desktop') {
    margin: 0 2rem;
  }
}
.logo-link {
  font-family: var(--font-family-mono);
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover .logo-text {
    visibility: visible;
    opacity: 1;
  }

  svg {
    width: 32px;
    height: 32px;

    .cls-1 {
      stroke-width: 30px;
    }
    .cls-1,
    .cls-2,
    .cls-3,
    .cls-4 {
      fill: none;
      stroke: currentColor;
    }
    .cls-1,
    .cls-4 {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .cls-2 {
      stroke-width: 2.5px;
    }
    .cls-3 {
      stroke-width: 5px;
    }
    .cls-4 {
      stroke-width: 35px;
    }
    .cls-6 {
      display: none;
    }
  }
}
.logo-text {
  font-weight: 700;
  font-family: var(--font-family-mono), sans-serif;
  margin-bottom: 0;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

nav ul {
  display: flex;
  gap: 2rem;

  a {
    font-size: 1.15rem;
    font-weight: 700;
    border-bottom: none;
    text-transform: uppercase;
    font-family: monospace;
  }
}
</style>
