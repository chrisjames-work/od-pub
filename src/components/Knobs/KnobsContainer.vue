<template>
  <div class="knobs-container theme-dark">
    <div
      class="background"
      :class="{'material-background-primary-thick': !inIsolation, right: right}"
      v-if="visible"
    >
      <knobs :right="right">
        <slot />
      </knobs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    right: Boolean,
  },
  computed: {
    ...mapGetters({
      inIsolation: "knobs/inIsolation",
      visible: "knobs/visible",
    }),
  },
};
</script>

<style lang="scss" scoped>
.knobs-container {
  .background {
    width: 604px;
    position: fixed;
    z-index: 10000;
    bottom: 12px;
    left: 12px;

    &.right {
      left: auto;
      right: 12px;
    }
  }
}
</style>