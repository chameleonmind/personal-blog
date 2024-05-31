<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  section?: string
}>(), {
  title: '',
  description: '',
  section: ''
})
</script>

<template>
  <div class="h-full w-full flex items-start justify-start bg-gray-50 relative">
    <div
      class="absolute inset-0 h-full w-full bg-transparent" style="background-size: 100vw 100vh; background-image: linear-gradient(
      to right,
      rgba(192,186,193, 0.3) 1px,
      transparent 1px
    );"
    />
    <div class="absolute w-[600px] h-[600px] -bottom-50 -right-50 bg-violet-600 rounded-full opacity-10" style="filter: blur(50px)" />
    <div class="flex items-start justify-start h-full relative">
      <div class="flex flex-col w-full h-full">
        <p class="pl-20 pt-20 text-left text-[32px] text-gray-700">
          Chameleon Mind {{ section }}
        </p>
        <h1 class="text-[80px] pl-20 pr-5 mb-8 text-left text-violet-600">
          {{ title }}
        </h1>
        <p class="text-[40px] pb-10 pt-0 mt-0 px-20 mb-0 text-gray-700">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
