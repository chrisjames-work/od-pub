<template>
  <div class="beat">
    <div class="blotter">
      <vue-blotter
        v-if="visible"
        ref="blotter"
        family="Noto IKEA"
        fill="white"
        text-style="normal"
        :size="36"
        material-type="LiquidDistortMaterial"
        :paddingLeft="100"
        :paddingRight="100"
        :text="name"
        :uniforms="{
          uSpeed: 0,
          uVolatility: 0,
        }"
      >
        <h1 slot-scope="{ blotterScope }"></h1>
      </vue-blotter>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import VueBlotter from "vue-blotter";

export default {
  components: {
    VueBlotter,
  },
  data() {
    return {
      uniforms: {
        uSpeed: 0,
        uVolatility: 0,
      },
    };
  },
  props: {
    name: String,
    visible: Boolean,
  },
  methods: {
    show() {
      if (this.visible) {
        if (this.animation) this.animation.kill();
        this.animation = gsap.to(this.uniforms, {
          duration: 4,
          uSpeed: 1,
          uVolatility: 0.15,
          delay: 1,
          onUpdate: () => {
            if (!this.$refs.blotter) return;
            this.$refs.blotter.blotter.material.uniforms.uVolatility.value =
              this.uniforms.uVolatility;
            this.$refs.blotter.blotter.material.uniforms.uSpeed.value =
              this.uniforms.uSpeed;
          },
        });
      } else {
        this.uniforms = {
          uSpeed: 0,
          uVolatility: 0,
        };
      }
    },
  },
  watch: {
    visible: "show",
  },
  mounted() {
    this.$nextTick(this.show);
  },
  beforeDestroy() {
    if (this.animation) this.animation.kill();
  },
};
</script>

<style lang="scss" scoped>
.beat {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;

  .blotter {
    position: relative;
  }
}
</style>
