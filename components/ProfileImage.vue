<script setup lang="ts">

</script>

<template>
  <div class="profile-image">
    <img id="image" src="@/assets/images/milos_pic.png" alt="Miloš Milošević">
  </div>
</template>

<style scoped lang="scss">
.profile-image {
  width: 100%;
  max-width: 180px;
  height: auto;
  margin-bottom: 1rem;
  position: relative;
  border: 1px solid var(--accent-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
