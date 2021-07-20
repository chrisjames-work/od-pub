<template>
  <div class="knobs">
    <div class="overlay" v-if="inIsolation && isolationMode !== 'void'" />
    <slot />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      inIsolation: "knobs/inIsolation",
      isolationMode: "knobs/isolationMode"
    })
  }
};
</script>

<style lang="scss" scoped>
.knobs {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  grid-row-gap: 32px;
  padding: 4px;

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background: rgba(51, 51, 51, 0.7);
    backdrop-filter: blur(40px);
    z-index: 99;
  }
}
</style>