<template>
  <div class="slider" :style="style">
    <!-- Thumb label -->
    <thumb-label :t="t" v-if="active" :value="computedLabel" />

    <!-- Number --->
    <template v-if="type === 'number'">
      <slider-number
        v-model="computedValue"
        :step="step"
        :min="min"
        :max="max"
        :disabled="disabled"
        :active="active"
        @t="t = $event"
      />
    </template>

    <template v-if="type === 'marks' || type === 'marks-text'">
      <slider-marks
        v-model="computedValue"
        :marks="marks"
        :active="active"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        @t="t = $event"
      />
    </template>

    <!-- Marks --->

    <!-- Overlay -->
    <main>
      <span
        class="label"
        :class="{
          bottom: (type === 'marks' || type === 'marks-text') && active,
        }"
      >
        {{ label }}
      </span>
      <span v-show="!active">
        <slot name="value" />
        {{ computedLabel }}
      </span>
    </main>

    <!-- Range -->
    <footer v-show="active && type !== 'marks-text'">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </footer>
  </div>
</template>

<script>
import gsap from "gsap";
import hammer from "hammerjs";

import SliderNumber from "./knobs/SliderNumber";
import SliderMarks from "./knobs/SliderMarks";

import ThumbLabel from "./ThumbLabel";

import { mapGetters, mapMutations } from "vuex";

import map from "./utils/map";

export default {
  components: {
    SliderNumber,
    SliderMarks,
    ThumbLabel,
  },
  props: {
    label: String,
    icon: String,
    marks: {
      type: [Boolean, Array],
    },
    value: [Number, Array, String, Boolean],
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 0.01,
    },
    isolate: {
      type: Boolean,
      default: true,
    },
    isolationMode: {
      type: String,
      default: "void",
    },
    /* 
    Wait to update value to touchend - for heavy compuations 
    */
    instant: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      bounds: {},
      t: 0,
      active: false,
      computedValue: this.value,
    };
  },
  methods: {
    /* Component logic
     */
    ...mapMutations({
      setIsolation: "knobs/setIsolation",
      setIsolationMode: "knobs/setIsolationMode",
    }),
    init() {
      this.bounds = this.$el.getBoundingClientRect();

      this.manager = new hammer.Manager(this.$el);

      this.pan = new hammer.Pan({
        threshold: 10,
        preventDefault: true,
        direction: hammer.DIRECTION_HORIZONTAL,
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
      this.active = true;
    },
    onPanMove(e) {
      // this.animate({
      //   y: -8 + e.deltaY / 10
      // });
    },
    onPanEnd(e) {
      if (this.disabled) return false;
      this.active = false;
      if (!this.instant) this.$emit("input", this.computedValue);
    },

    /* Component helpers
     */
    animate({ duration = 0.5, y = 0 }) {
      if (this.animation) this.animation.kill();

      this.animation = gsap.to(this.$el, duration, {
        y,
        ease: "back.out(1.7)",
      });
    },
    getType(value) {
      if (this.marks) {
        if (this.marks instanceof Array) return "marks-text";
        return "marks";
      }
      switch (true) {
        case typeof value === "number":
          return "number";
        case value instanceof Object:
          return "marks";
        case value instanceof Array:
          return "range";
        default:
          return false;
      }
    },
  },
  computed: {
    ...mapGetters({
      inIsolation: "knobs/inIsolation",
      globalIsolationMode: "knobs/isolationMode",
      disabled: "knobs/disabled",
    }),
    type() {
      return this.getType(this.value);
    },
    style() {
      const opacity =
        this.inIsolation && this.globalIsolationMode === "void" && !this.active
          ? 0
          : 1;
      return {
        zIndex: this.active ? 100 : null,
        opacity,
      };
    },
    computedLabel() {
      if (this.marks) {
        if (this.marks instanceof Array) {
          return this.marks.find((mark) => mark.value === this.computedValue)
            .label;
        }
      }
      return this.computedValue;
    },
  },
  watch: {
    computedValue() {
      if (this.instant) this.$emit("input", this.computedValue);
    },
    value() {
      this.computedValue = this.value;
    },
    active() {
      this.setIsolationMode(this.isolationMode);
      this.setIsolation(this.active);

      this.animate({
        duration: this.active ? 0.5 : 0.25,
        y: this.active ? -8 : 0,
      });
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
$size: 64px;
.slider {
  position: relative;
  width: 100%;
  height: $size;

  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    padding: 24px 0px;
  }

  main {
    font-family: -apple-system, "Helvetica", sans-serif;

    span.label {
      font-family: -apple-system, "Helvetica", sans-serif;
      display: flex;

      &.bottom {
        position: absolute;
        width: 100%;
        left: 0;
        height: 44px;
        bottom: -44px;
        align-items: center;
        justify-content: center;
      }
      .icon {
        width: 32px;
        margin-right: 4px;
        display: grid;
        place-items: center;
      }
    }
  }

  footer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    padding: 12px 0;
    height: 32px;
    bottom: -32px;
    top: auto;
    color: white;
  }
}
</style>
