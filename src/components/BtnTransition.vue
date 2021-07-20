<template>
  <div
    class="btn-circle subtle"
    :class="{ active: active, dark: dark, fluid: fluid, disabled: disabled }"
    @click="onClick"
  >
    <span class="figure">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 3H19V21H5L12 17V7L5 3Z" fill="currentcolor" />
      </svg>
    </span>
    <label v-if="label" :class="{ visible: active }">
      {{ label }}
    </label>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    icon: {
      type: String,
      default: "Objects/Shopping Bag",
    },
    active: {
      type: Boolean,
    },
    dark: Boolean,
    fluid: Boolean,
    label: String,
    price: Number,
    disabled: Boolean,
  },
  methods: {
    onClick(e) {
      const timeline = gsap.timeline({});
      timeline
        .to(this.$el, {
          scale: 1.6,
          duration: 0.12,
          ease: "power2.out",
        })
        .to(this.$el, {
          scale: 1,
          duration: 0.12,
          ease: "power2.out",
        });

      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);

.btn-circle {
  background-color: rgba(white, 0.95);
  backdrop-filter: blur(20px) brightness(1.5);
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border-radius: 56px;
  position: relative;

  &.fluid {
    width: 100%;
    overflow: hidden;
    &.active {
      .figure {
        opacity: 0;
        transform: translateX(-70px);
      }
    }
    .figure {
      transition: 0.25s opacity $ease, 0.5s transform $ease;
    }
  }

  &.subtle {
    background-color: rgba(#847d7d, 0.38);
    color: rgba(black, 0.5);
    transition: 0.5s background-color $ease, 0.5s color $ease;

    &.active {
      background-color: rgba(white, 0.85);
      border: 1px solid var(--theme-background-inverse);
      color: var(--theme-label-primary);

      &.fluid {
        border: none;
        background-color: var(--theme-accent-primary);
        color: var(--theme-label-inverse);

        &.disabled {
          background-color: var(--theme-disabled);

          label {
            color: var(--theme-label-lightest);
            opacity: 0.3;
          }
        }
      }
    }
    &.dark {
      background-color: rgba(#464646, 0.5);
      color: rgba(white, 0.5);

      &.active {
        border: none;
        background-color: rgba(white, 0.95);
        color: black;
      }
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: var(--theme-label-inverse);
    opacity: 0;
    transition: 0.5s opacity $ease;
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;

    > :last-child {
      opacity: 0.6;
      margin-left: 6px;
    }

    &.visible {
      opacity: 1;
    }
  }
}
</style>
