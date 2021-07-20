<template>
  <div class="slider-number">
    <div class="slider">
      <div class="thumb" :style="style" />
    </div>
  </div>
</template>

<script>
import hammer from "hammerjs";

import map from "../utils/map";
import clamp from "../utils/clamp";
import roundValueToStep from "../utils/roundValueToStep";

export default {
  props: {
    value: Number,
    step: Number,
    min: Number,
    max: Number,
    disabled: Boolean,
    active: Boolean,
  },
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    formatValue(value) {
      value = roundValueToStep(value, this.step, this.min);
      value = clamp(value, this.min, this.max);
      return value;
    },
    getValue(x) {
      return map(x, 0, this.width, this.min, this.max);
    },
    getX(value) {
      return map(value, this.min, this.max, 0, this.width);
    },
    getT(value) {
      return map(value, this.min, this.max, 0, 1);
    },
    updateValue(value) {
      value = this.formatValue(value);

      this.$emit("input", value);
      //this.$emit("t", this.getT(value));

      return value;
    },
    /* Component logic
     */
    init() {
      this.width = this.$el.getBoundingClientRect().width;

      this.updateValue(this.computedValue);

      this.manager = new hammer.Manager(this.$el);

      this.pan = new hammer.Pan({
        threshold: 0,
        direction: hammer.DIRECTION_HORIZONTAL,
        preventDefault: true,
        //domEvents: true
      });

      this.manager.add([this.pan]);

      this.manager.on("panstart", this.onPanStart);
      this.manager.on("panend", this.onPanEnd);
      this.manager.on("pancancel", this.onPanEnd);
      this.manager.on("panmove", this.onPanMove);
    },
    onPanStart(e) {
      if (this.disabled) return false;
      this.savedX = this.getX(this.computedValue);
    },
    onPanMove(e) {
      if (this.disabled) return false;
      const x = this.savedX + e.deltaX;
      const value = this.getValue(x);

      this.updateValue(value);
    },
    onPanEnd(e) {
      if (this.disabled) return false;
    },
  },
  computed: {
    computedValue() {
      return this.formatValue(this.value);
    },
    style() {
      return {
        width: this.getX(this.computedValue) + "px",
      };
    },
  },
  watch: {
    value() {
      this.$emit("t", this.getT(this.value));
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.manager.destroy();
  },
};
</script>

<style lang="scss" scoped>
@import "../style";

.slider-number {
  .slider {
    @extend .slider;
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      @extend .thumb;
    }
  }
}
</style>
