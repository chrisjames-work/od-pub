<template>
  <div class="about">
    <img :src="require('@/assets/img/about.png')" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
