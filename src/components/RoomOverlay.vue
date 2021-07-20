<template>
  <div class="room-overlay">
    <img
      v-show="!live"
      :src="require('@/assets/img/overlay-episode-centric.png')"
      style="width: 100%"
    />
    <img
      v-show="live"
      :src="require('@/assets/img/overlay-room-centric-live.png')"
      style="width: 100%"
    />
  </div>
</template>

<script>
export default {
  props: {
    live: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.room-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  background: white;
  z-index: 10;
  transform: translateY(100%);
}
</style>
