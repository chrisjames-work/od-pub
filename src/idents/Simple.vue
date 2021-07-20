<template>
  <div class="simple" :class="{ dark: dark }">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    settled: Boolean,
    dark: Boolean,
  },
  methods: {
    play() {
      if (this.timeout) clearTimeout(this.timeout);
      if (this.settled) {
        this.timeout = setTimeout(() => {
          this.$emit("hide");
        }, 700);
      }
    },
  },
  watch: {
    settled: "play",
  },
  mounted() {
    this.play();
  },
  beforeDestroy() {
    if (this.timeout) clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
.simple {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  padding: 32px;

  &.dark {
    color: black;
  }

  h1 {
    position: relative;
    font-weight: normal;
    text-align: center;
  }
}
</style>
