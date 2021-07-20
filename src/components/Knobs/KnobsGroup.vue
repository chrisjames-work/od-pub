<template>
  <div class="knobs-group" :class="{[align]: align}">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    horisontal: Boolean
  },
  computed: {
    align() {
      return this.horisontal ? "horisontal" : "vertical";
    }
  }
};
</script>

<style lang="scss" scoped>
.knobs-group {
  display: grid;

  &.vertical {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    grid-row-gap: 4px
  }

  &.horisontal {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4px;
  }
}
</style>