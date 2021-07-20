<template>
  <div class="clip">
    <video v-if="src" ref="video" :src="blob" muted playsinline loop />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    visible: Boolean,
  },
  data() {
    return {
      blob: null,
    };
  },
  methods: {
    preload() {
      fetch(this.src)
        .then((response) => response.blob())
        .then(window.URL.createObjectURL)
        .then((blob) => {
          this.$emit("loaded");
          this.blob = blob;
          //this.$refs.video.play();
          this.$nextTick(() => {
            //this.$refs.video.pause();
            this.toggle();
          });
        });
    },
    toggle() {
      if (!this.src || !this.blob) return false;

      if (this.visible) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },
  watch: {
    visible: "toggle",
  },
  mounted() {
    this.preload();
  },
};
</script>

<style lang="scss" scoped>
.clip {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
