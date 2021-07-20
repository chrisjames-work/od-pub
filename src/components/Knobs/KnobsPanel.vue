<template>
  <panel
    :disabled="inIsolation"
    :hide-chrome="inIsolation"
    :overlay="overlay"
    :threshold="10"
    hide-handle
    :initial-open="true"
    style="z-index: 10"
    child
    @panstart="setDisabled(true)"
    @panend="setDisabled(false)"
    @collapsed="$emit('collapsed')"
  >
    <knobs>
      <slot />
    </knobs>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
import NavigationBar from "@/components/Knobs/NavigationBar";
import Knobs from "./Knobs";

import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    title: String,
    overlay: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Panel,
    NavigationBar,
    Knobs
  },
  data() {
    return {
      panelActive: false
    };
  },
  methods: {
    ...mapMutations({
      setDisabled: "knobs/setDisabled"
    })
  },
  computed: {
    ...mapGetters({
      inIsolation: "knobs/inIsolation",
      height: "height"
    })
  }
};
</script>

<style>
</style>