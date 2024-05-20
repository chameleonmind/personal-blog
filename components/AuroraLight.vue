<script setup lang="ts">

</script>

<template>
  <div class="aurora-light">
    <div class="aurora-circle aurora-purple" />
    <div class="aurora-circle aurora-blue" />
    <div class="aurora-circle aurora-red" />
    <div class="aurora-grid" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';
.aurora-light {
  pointer-events: none;
  position: fixed;
  z-index: 0;

  .aurora-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.2;
    background-size: 25vw 100vh;
    background-image: linear-gradient(
      to right,
      var(--border-color) 1px,
      transparent 1px
    );

    @include screen-size('tablet') {
      background-size: 10.618vw 100vh;
    }
  }

  .aurora-circle {
    position: fixed;
  }

  .aurora-purple {
    top: 100dvh;
    left: 0;
    transform: translate(-50%, -50%);
    width: 200vw;
    height: 200vw;
    border-radius: 50vh;
    filter: blur(50px);
    opacity: 0.1;
    background: radial-gradient(
      circle,
      var(--accent-color) 0%,
      var(--base-color) 100%
    );

    @include screen-size('tablet') {
      width: 50vw;
      height: 50vw;
    }
  }

  .aurora-blue {
    top: 100dvh;
    left: 0;
    transform: translate(-25%, -50%);
    width: 150vw;
    height: 5vw;
    border-radius: 50vh;
    filter: blur(30px);
    opacity: 0.1;
    background: radial-gradient(circle, #039cdd 0%, var(--base-color) 100%);
  }

  .aurora-red {
    top: 0;
    left: 100vw;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vw;
    border-radius: 50vh;
    filter: blur(30px);
    opacity: 0.05;
    background: radial-gradient(circle, #ec278f 0%, var(--base-color) 100%);
  }
}
</style>
