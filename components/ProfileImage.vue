<script setup lang="ts">
const rowCount = ref(11)
const columnCount = ref(11)
</script>

<template>
  <div class="svg-container">
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="grid-reveal-mask">
          <template v-for="row in rowCount" :key="row">
            <template v-for="column in columnCount" :key="column">
              <rect class="mask-rect" :x="(column - 1) * 20" :y="(row - 1) * 20" width="20" height="20" fill="white" :style="{ animationDelay: column === 1 ? '0.3s' : `${(rowCount - row) * 0.1 + 0.3}s` }" />
            </template>
          </template>
        </mask>
      </defs>

      <image
        xlink:href="@/assets/images/milos_pic.png"
        width="220"
        height="220"
        mask="url(#grid-reveal-mask)"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css-utils/animations.scss';
.svg-container {
  width: 220px;
  height: 220px;
  cursor: pointer;
}

.mask-rect {
  opacity: 0;
  animation: appear-up-spin 300ms ease-in-out;
  animation-fill-mode: forwards;
  stroke-width: 0.25;
  stroke: #959595;
}
</style>
