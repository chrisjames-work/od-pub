<template>
  <div class="social-room">
    <img :src="require('@/assets/img/room-social.png')" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$emit("loaded");
    });
  },
};
</script>

<style lang="scss" scoped>
.social-room {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
