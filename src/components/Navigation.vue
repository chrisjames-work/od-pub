<template>
  <div class="navigation" :class="{ dark: dark }">
    <ul>
      <li :class="{ active: list }" @click="change($event, 'list')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 5H5V3H19V5ZM19 9H5V7H19V9ZM5 13H19V11H5V13ZM19 17H5V15H19V17ZM5 21H19V19H5V21Z"
            fill="currentcolor"
          />
        </svg>
      </li>
    </ul>
    <ul>
      <li :class="{ active: grid }" @click="change($event, 'grid')">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 3H5V11.25H11V3ZM11 12.75H5V21H11V12.75ZM12.5 3H18.5V11.25H12.5V3ZM18.5 12.75H12.5V21H18.5V12.75Z"
            fill="currentcolor"
          />
        </svg>
      </li>
    </ul>
    <ul>
      <!-- <btn-transition
        label="Learn more"
        :active="about"
        @click="change($event, 'about')"
      /> -->
      <li :class="{ active: about }" @click="change($event, 'about')">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M5 3H19V21H5L12 17V7L5 3Z" fill="currentcolor" />
        </svg>
        <!-- <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0008 12.0011L12.0008 4L10.5865 5.41412L16.1727 11.001H4V13.001H16.1723L10.5855 18.5875L11.9996 20.0018L20.0008 12.0011Z"
            fill="currentcolor"
          />
        </svg> -->
      </li>
    </ul>
  </div>
</template>

<script>
import BtnTransition from "@/components/BtnTransition";
export default {
  components: {
    BtnTransition,
  },
  props: {
    grid: Boolean,
    list: Boolean,
    about: Boolean,
    dark: Boolean,
  },
  methods: {
    change(e, view) {
      e.stopPropagation();
      this.$emit("change", view);
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  width: 100%;
  padding: 0 16px;
  display: flex;
  bottom: 34px;
  left: 0;
  justify-content: center;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  &.dark {
    ul {
      li {
        //border: 1px solid rgba(black, 1);
        color: black;

        &.active {
          background: black;
          color: white;
        }
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    &:nth-child(2) li {
      margin-left: 16px;
      margin-right: 16px;
    }

    li {
      width: 56px;
      height: 56px;
      //border: 1px solid rgba(white, 1);
      color: white;
      //margin-right: 12px;
      display: grid;
      place-items: center;
      border-radius: 50%;

      &.active {
        background: white;
        color: black;
      }
      &:last-child {
        //margin-right: 0;
      }
    }
  }
}
</style>
