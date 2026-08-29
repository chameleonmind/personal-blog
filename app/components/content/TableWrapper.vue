<script setup lang="ts">

</script>

<template>
  <div class="table-wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.table-wrapper {
  overflow-x: auto;

  table {
    min-width: 100%;
  }
}
</style>
