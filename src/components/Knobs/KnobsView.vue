<template>
  <div class="knobs-view" :style="{backgroundColor: inIsolation ? 'transparent' : null}">
    <nav :style="{opacity: inIsolation ? 0 : 1}">
      <type display="headline">Parameters</type>
      <header @click="$emit('close')">
        <type display="headline" style="color: var(--theme-tint-yellow)">Dismiss</type>
      </header>
    </nav>
    <slot />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      inIsolation: "knobs/inIsolation"
    })
  }
};
</script>

<style lang="scss" scoped>
.knobs-view {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--theme-background-primary);
  z-index: 100;
  padding-top: 44px;
  padding-bottom: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    height: 44px;
    display: grid;
    place-items: center;
    padding-left: 12px;
    padding-right: 12px;
    position: relative;
    border-bottom: 0.5px solid var(--theme-seperator-opaque);

    header {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 16px;
      right: 16px;
    }
  }
}
</style>