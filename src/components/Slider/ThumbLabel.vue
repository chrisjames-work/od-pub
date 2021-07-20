<template>
  <div class="thumb-label" :style="style">{{ value }}</div>
</template>

<script>
import gsap from "gsap";

import map from "./utils/map";

export default {
  props: {
    t: Number,
    value: [Number, String, Array],
    visible: Boolean,
  },
  data() {
    return {
      gutter: undefined,
      width: 0,
      parent: {
        width: 0,
      },
      tween: {
        x: null,
      },
    };
  },
  methods: {
    updateBounds(initial) {
      const bounds = this.$el.getBoundingClientRect();
      if (initial) {
        this.gutter = bounds.left * 2;
        this.parent = this.$el.parentElement.getBoundingClientRect();
      }
      this.width = bounds.width;
    },
  },
  computed: {
    max() {
      return this.parent.width - this.width;
    },
    x() {
      return map(this.t, 0, 1, 0, this.max);
    },
    style() {
      if (typeof this.gutter === "undefined") return false;
      return {
        transform: `translateX(${this.tween.x}px)`,
      };
    },
  },
  watch: {
    value() {
      this.$nextTick(this.updateBounds);
    },
    x() {
      this.animation = gsap.to(this.tween, 1, {
        x: this.x,
        ease: "back.out(1.7)",
      });
    },
  },
  created() {},
  mounted() {
    this.updateBounds(true);

    this.animation = gsap.set(this.tween, {
      x: this.x,
    });
  },
};
</script>

<style lang="scss" scoped>
.thumb-label {
  //border-radius: 100px;
  height: 36px;
  padding: 12px 0;
  font-size: 16px;
  font-family: -apple-system, "Helvetica", sans-serif;
  background-color: black;
  color: white;
  display: grid;
  place-items: center;
  position: absolute;
  left: 0;
  top: 0px - 36px - 12px;
}
</style>
