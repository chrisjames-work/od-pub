<template>
  <div class="slider-marks">
    <div class="slider" :style="{ opacity: active ? 1 : 0 }">
      <div
        v-for="(mark, n) in computedMarks"
        ref="marks"
        class="mark"
        :class="{ [type]: type, active: index === n }"
        :key="isText ? mark.id : mark"
      />
    </div>
    <div
      v-for="(knob, n) in knobs"
      class="thumb"
      :class="setKnobClass(knob, n)"
      :style="setKnobStyle(knob)"
      :key="n"
    />
  </div>
</template>

<script>
import hammer from "hammerjs";

import map from "../utils/map";
import clamp from "../utils/clamp";
import roundValueToStep from "../utils/roundValueToStep";

export default {
  props: {
    value: [Number, String, Array, Boolean],
    step: Number,
    min: Number,
    max: Number,
    marks: [Boolean, Array],
    active: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      width: 0,
      knobWidth: 0,
      rangeIndex: 0,
      rangeIndexPosition: 0,
    };
  },
  methods: {
    init() {
      this.width = this.$el.getBoundingClientRect().width;
      this.update();
      this.$emit("t", this.t);

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
    update() {
      this.knobWidth = this.$refs.marks[0].getBoundingClientRect().width;
    },
    formatValue(value) {
      if (this.isText) {
        return value;
      }

      if (value instanceof Array) {
        return value.map((d) => this.formatValue(d));
      }

      value = roundValueToStep(value, this.step, this.min);
      value = clamp(value, this.min, this.max);
      return value;
    },
    updateValue(value) {
      this.$emit("input", this.formatValue(value));
    },
    onPanStart(e) {
      if (this.disabled) return false;

      if (this.isRange) {
        /* Find range index */
        this.rangeIndex = this.findClosestValue(
          this.index,
          this.getIndexFromX(e.center.x)
        );
        this.rangeIndexPosition = this.index.indexOf(this.rangeIndex);
      }
      this.savedX = this.x;
    },
    onPanMove(e) {
      if (this.disabled) return false;
      const x = e.deltaX + this.savedX;

      let value;

      const index = this.getIndexFromX(x);

      if (this.isText) {
        value = this.computedMarks[index].value;
      } else if (this.isRange) {
        value = this.computedMarks[index];
        value = this.computedValue.map((d, n) =>
          n === this.rangeIndexPosition ? value : d
        );
      } else {
        value = map(x, 0, this.width, this.min, this.max);
      }

      this.updateValue(value);
    },
    onPanEnd(e) {
      if (this.disabled) return false;
    },
    setKnobStyle(knob) {
      return {
        width: this.knobWidth + "px",
        transform: `translateX(${knob.x}px)`,
      };
    },
    setKnobClass(knob, n) {
      return {
        [this.type]: this.type,
        active: this.isRange
          ? n === this.rangeIndexPosition && this.active
          : this.active,
      };
    },
    getIndexFromX(x) {
      return clamp(
        Math.round(this.computedMarks.length * (x / this.width)),
        0,
        this.computedMarks.length - 1
      );
    },
    findClosestValue(arr, val) {
      return Math.max.apply(
        null,
        arr.filter((v) => v <= val)
      );
    },
  },
  computed: {
    computedMarks() {
      if (this.isText) return this.marks;

      const marks = [];
      for (let i = this.min; i <= this.max; i = i + this.step) {
        marks.push(i);
      }
      return marks;
    },
    computedValue() {
      return this.formatValue(this.value);
    },
    index() {
      let value = this.computedValue;

      if (this.isText) {
        value = this.computedMarks.find((mark) => mark.value === value);
      }

      if (this.isRange) {
        return value.map((d) => this.computedMarks.indexOf(d));
      }

      return this.computedMarks.indexOf(value);
    },
    x() {
      return (this.isRange ? this.rangeIndex : this.index) * this.knobWidth;
    },
    t() {
      if (this.isRange) {
        return this.computedValue[this.rangeIndexPosition] / this.max;
      }
      return this.index / (this.computedMarks.length - 1);
    },
    isText() {
      return this.marks instanceof Array;
    },
    isRange() {
      return this.value instanceof Array;
    },
    type() {
      if (this.isText) return "text";
      if (!this.isText) return "number";
    },
    knobs() {
      const arr = this.isRange ? [...this.index] : [this.index];

      return arr.map((index) => {
        return {
          index,
          x: index * this.knobWidth,
        };
      });
    },
  },
  watch: {
    computedMarks: {
      handler: function (val, oldVal) {
        this.update();
      },
      deep: true,
    },
    t() {
      this.$emit("t", this.t);
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
.slider-marks {
  @extend .slider;

  .slider {
    display: flex;
    z-index: 2;

    .mark {
      flex: 1;
      position: relative;

      &.text {
        display: grid;
        place-items: center;

        &::after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: red;
          position: relative;
          z-index: 3;
        }
      }

      &.number {
        display: grid;
        place-items: center;

        &::after {
          content: "";
          width: 1px;
          height: 100%;
          background: rgba(black, 0.25);
        }
      }
    }
  }

  .thumb {
    @extend .thumb;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 2;

    &.text {
      &.active::after {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: red;
        position: relative;
        z-index: 3;
        display: none;
      }
    }

    &.number {
      background: transparent;
      border-radius: 0;
      backdrop-filter: none;

      &.active {
        &::after {
          background: yellow;
        }
      }

      &::after {
        content: "";
        width: 4px;
        height: 100%;
        background: rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
