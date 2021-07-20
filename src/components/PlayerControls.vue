<template>
  <div class="player-controls" :class="{ visible: visible }">
    <transition name="fade">
      <logo v-show="logo" @click="$emit('click')" />
    </transition>

    <nav>
      <ul>
        <ul class="column" style="opacity: calc(1 - var(--progress))">
          <li class="outline">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M4.42267 3L3 4.42267L7.15526 8.57795H5V14.5779H9L13 18.5779V14.4227L20.1489 21.5716L21.578 20.1426L21.571 20.1484L4.42267 3Z"
                fill="currentcolor"
              />
              <path
                d="M20.1059 15.8251C20.107 15.823 20.1081 15.8209 20.1093 15.8188C22.0241 12.2356 21.2684 7.93802 18.5345 5.20852L17.1199 6.62311C19.109 8.60851 19.7522 11.661 18.6088 14.328L20.1059 15.8251Z"
                fill="currentcolor"
              />
              <path
                d="M17.8352 13.5545C18.6213 11.3072 17.9915 8.90753 16.4142 7.32882L14.9996 8.74336C15.816 9.56027 16.2518 10.707 16.1609 11.8801L17.8352 13.5545Z"
                fill="currentcolor"
              />
              <path
                d="M13 8.7192V4.57795L10.9294 6.64857L13 8.7192Z"
                fill="currentcolor"
              />
            </svg>
          </li>
          <li class="outline">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M8.35197 8.14402C7.30664 8.14402 6.49597 8.51735 5.91997 9.26402C5.35464 10.0107 5.07197 11.024 5.07197 12.304C5.07197 13.5947 5.33864 14.608 5.87197 15.344C6.4053 16.0693 7.22664 16.432 8.33597 16.432C8.81597 16.432 9.2853 16.384 9.74397 16.288C10.2026 16.1813 10.6826 16.0427 11.184 15.872V17.616C10.7146 17.808 10.24 17.9467 9.75997 18.032C9.29064 18.1173 8.74664 18.16 8.12797 18.16C6.95464 18.16 5.98397 17.92 5.21597 17.44C4.44797 16.9494 3.8773 16.2667 3.50397 15.392C3.13064 14.5067 2.94397 13.472 2.94397 12.288C2.94397 11.136 3.15197 10.1227 3.56797 9.24802C3.98397 8.36268 4.59197 7.66935 5.39197 7.16802C6.20264 6.66668 7.1893 6.41602 8.35197 6.41602C8.92797 6.41602 9.4933 6.48535 10.048 6.62402C10.6133 6.75202 11.1413 6.93335 11.632 7.16802L10.928 8.84802C10.5226 8.66668 10.1013 8.50668 9.66397 8.36802C9.2373 8.21868 8.79997 8.14402 8.35197 8.14402Z"
                fill="currentcolor"
              />
              <path
                d="M18.1957 8.14402C17.1504 8.14402 16.3397 8.51735 15.7637 9.26402C15.1984 10.0107 14.9157 11.024 14.9157 12.304C14.9157 13.5947 15.1824 14.608 15.7157 15.344C16.2491 16.0693 17.0704 16.432 18.1797 16.432C18.6597 16.432 19.1291 16.384 19.5877 16.288C20.0464 16.1813 20.5264 16.0427 21.0277 15.872V17.616C20.5584 17.808 20.0837 17.9467 19.6037 18.032C19.1344 18.1173 18.5904 18.16 17.9717 18.16C16.7984 18.16 15.8277 17.92 15.0597 17.44C14.2917 16.9494 13.7211 16.2667 13.3477 15.392C12.9744 14.5067 12.7877 13.472 12.7877 12.288C12.7877 11.136 12.9957 10.1227 13.4117 9.24802C13.8277 8.36268 14.4357 7.66935 15.2357 7.16802C16.0464 6.66668 17.0331 6.41602 18.1957 6.41602C18.7717 6.41602 19.3371 6.48535 19.8917 6.62402C20.4571 6.75202 20.9851 6.93335 21.4757 7.16802L20.7717 8.84802C20.3664 8.66668 19.9451 8.50668 19.5077 8.36802C19.0811 8.21868 18.6437 8.14402 18.1957 8.14402Z"
                fill="currentcolor"
              />
            </svg>
          </li>
          <li class="outline" v-if="chat">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 4C20.6569 4 22 5.34315 22 7V14C22 15.6569 20.6569 17 19 17H12.4105L8.41366 21H6V17H5C3.34315 17 2 15.6569 2 14V7C2 5.34315 3.34315 4 5 4H19ZM20 7C20 6.44772 19.5523 6 19 6H5C4.44772 6 4 6.44772 4 7V14C4 14.5523 4.44772 15 5 15H8V18.5845L11.5817 15H19C19.5523 15 20 14.5523 20 14V7Z"
                fill="currentcolor"
              />
            </svg>
          </li>
        </ul>
        <ul class="column">
          <li
            class="info"
            style="transform: rotate(var(--rotate))"
            @click="onClick"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0037 16.1727L18.5906 10.5865L20.0047 12.0009L12.0036 20.0009L4.00293 11.9996L5.41719 10.5855L11.0037 16.1724L11.0037 4H13.0037L13.0037 16.1727Z"
                fill="currentcolor"
              />
            </svg>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: {
    Logo,
  },
  methods: {
    onClick(e) {
      e.stopPropagation();
      this.$emit("toggle");
    },
  },
  props: {
    visible: Boolean,
    chat: Boolean,
    logo: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.player-controls {
  --fill: white;
  --fg: black;
  --rotate: 0deg;
  --progress: 0;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(var(--fg), 0) 60%,
    rgba(var(--fg), 0.3)
  );
  font-size: 16px;
  color: var(--fill);
  z-index: 10;
  pointer-events: none;

  #logo {
    position: absolute;
    top: 56px;
    left: 16px;
    pointer-events: all;
  }

  nav {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 40px;
    pointer-events: all;
    ul {
      width: 100%;
      list-style: none;
      height: 56px;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;

      &.column {
        width: auto;
        justify-content: flex-start;
        align-items: center;
      }

      li {
        width: 56px;
        height: inherit;
        border-radius: 64px;
        background: red;
        display: grid;
        place-items: center;
        margin-right: 12px;
        background: var(--fill);
        color: var(--fg);

        &.outline {
          color: var(--fill);
          background: transparent;
          border: 1.5px solid var(--fill);
        }

        &:last-child {
          margin-right: 0px;

          &.info {
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
