<script setup lang="ts">
import LinkOut from '~/components/common/LinkOut.vue'
</script>

<template>
  <div class="home-mono-work">
    <h2 class="subtitle">
      Notable Work
    </h2>
    <ul class="project-list">
      <li>
        ApeironUI - a Vue 3 component library
      </li>
      <li>
        <LinkOut href="https://github.com/chameleonmind/nshot">
          Nshot
        </LinkOut> - a screenshot tool based on Screen Capture API
      </li>
      <li>
        <NuxtLink to="/frame-fusion">
          Frame Fusion
        </NuxtLink> - animate sequences of images in a single frame
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-mono-work {
  .subtitle {
    font-size: 1.5rem;
    font-family: var(--font-family-mono);
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 0;
  }

  .project-list {
    list-style-type: none;
    padding-left: 1rem;
  }
}
</style>
