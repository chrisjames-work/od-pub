<template>
  <div class="room" :class="classes" :style="style">
    <!-- Content -->
    <component
      v-if="playlist.length > 0 && playlist[0].component"
      :is="playlist[0].component.type"
      v-bind="playlist[0].component.props"
      :visible="(visible || focus) && !listMode"
      @loaded="$emit('loaded')"
    />

    <!-- Ident -->
    <component
      v-if="!disabled && !zoomedOut"
      v-show="!hideIdent && !playerVisible"
      :is="ident.type"
      v-bind="{ ...ident.props, name: name }"
      :visible="visible"
      :settled="current"
      @hide="hideIdent = true"
    />

    <!-- Live indicator -->
    <div class="live" :class="{ active: playerVisible }" v-if="live">Live</div>
  </div>
</template>

<script>
import { scaleLinear } from "d3";

import Clip from "@/components/Clip";
import SocialRoom from "@/components/SocialRoom";

import Simple from "@/idents/Simple";
import Beat from "@/idents/Beat";
import Timeline from "@/idents/Timeline";
import Columns from "@/idents/Columns";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Clip,
    Simple,
    Beat,
    Timeline,
    Columns,
    SocialRoom,
  },
  props: {
    id: Number,
    ident: Object,
    playlist: Array,
    name: String,
    current: Boolean,
    live: Boolean,
    prev: Boolean,
    next: Boolean,
    progress: {
      type: Number,
      default: 0,
    },
    visible: Boolean,
    zoomedOut: Boolean,
    listMode: Boolean,
    focus: Boolean,
  },
  data() {
    return {
      hideIdent: false,
    };
  },
  methods: {
    ...mapMutations(["setPlayerVisibility"]),
  },
  computed: {
    ...mapState(["playerVisible"]),
    // color() {
    //   return "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
    // },
    domain() {
      const start = this.prev ? -1 : 0;
      const end = this.prev ? 0 : 1;

      return {
        start,
        end,
      };
    },
    scaleX() {
      return scaleLinear()
        .domain([this.domain.start, this.domain.end])
        .range([100, 0]);
    },
    scaleY() {
      return scaleLinear()
        .domain([this.domain.start, this.domain.end])
        .range([0, 30]);
    },
    mask() {
      if (this.zoomedOut) return null;
      if (this.next) return null;

      const x = this.scaleX(this.progress);
      const y = this.scaleY(this.progress);

      return `polygon(0 0, ${x}% ${y}%, ${x}% ${100 - y}%, 0 100%)`;
    },
    zIndex() {
      if (this.zoomedOut) {
        if (this.focus) return 2;
        if (this.current) return 1;
        return null;
      }
      if (this.disabled) return 0;
      if (this.next) return 1;
      if (this.current) return 2;
      if (this.prev) return 3;
    },
    style() {
      return {
        zIndex: this.zIndex,
        //backgroundColor: this.color,
        clipPath: this.mask,
      };
    },
    classes() {
      return {
        disabled: this.disabled && !this.zoomedOut,
      };
    },
    disabled() {
      return !this.prev && !this.next && !this.current;
    },
  },
  watch: {
    current() {
      if (!this.current) {
        this.hideIdent = false;
      }
    },
  },
  beforeDestroy() {
    if (!this.current) {
      this.hideIdent = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.room {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  color: white;
  transform-origin: 0% 0%;

  &.disabled {
    opacity: 0;
    pointer-events: none;
  }

  .live {
    background-color: rgba(white, 0.3);
    backdrop-filter: blur(40px);
    color: black;
    mix-blend-mode: screen;
    padding: 4px 10px;
    position: absolute;
    font-size: 14px;
    text-transform: uppercase;
    top: 60px;
    right: 16px;
    border-radius: 40px;

    &.active {
      background-color: #fa4b2f;
      mix-blend-mode: unset;
      color: white;
    }
  }
}
</style>
