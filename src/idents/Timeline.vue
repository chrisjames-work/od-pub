<template>
  <div class="timeline" :style="style">
    <div class="line">
      <h1>
        <span ref="words1" v-for="word in lines.line1" :key="word">
          {{ word }}
        </span>
      </h1>
    </div>
    <div class="line">
      <h1>
        <span ref="words2" v-for="word in lines.line2" :key="word">
          {{ word }}
        </span>
      </h1>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    line1: {
      type: String,
      default: "Life at home with",
    },
    line2: {
      type: String,
      default: "Hans Ulrich Obrist",
    },
    color: {
      type: String,
      default: "#FFD624",
    },
    visible: Boolean,
    blink: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 0.3,
    },
  },
  data() {
    return {
      style: {
        backgroundColor: "transparent",
        color: "white",
      },
    };
  },
  methods: {
    reset() {},
    animate() {
      if (this.timeline) {
        this.timeline.clear();
      }
      this.style = {
        backgroundColor: "transparent",
        color: "white",
      };

      gsap.set([this.$refs.words1, this.$refs.words2], { opacity: 0 });

      if (!this.visible) return false;

      this.timeline = gsap.timeline({ delay: this.delay });

      this.timeline.staggerTo(
        this.$refs.words1,
        0,
        {
          opacity: 1,
        },
        this.delay
      );

      this.timeline.set({}, {}, "+=1");

      this.timeline.staggerTo(
        this.$refs.words2,
        0,
        {
          opacity: 1,
        },
        this.delay
      );
      if (this.blink) {
        this.timeline.set(
          {},
          {
            onComplete: () => {
              this.style.color = this.color;
            },
          },
          "+=1"
        );

        this.timeline.set(
          {},
          {
            onComplete: () => {
              this.style.backgroundColor = this.color;
              this.style.color = "black";
            },
          },
          "+=.75"
        );
      }

      this.timeline.set(
        {},
        {
          onComplete: () => {
            this.$emit("hide");
          },
        },
        "+=1"
      );
    },
  },
  computed: {
    lines() {
      return {
        line1: this.line1.split(" "),
        line2: this.line2.split(" "),
      };
    },
  },
  watch: {
    visible: "animate",
  },
  mounted() {
    this.animate();
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 130px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .line {
    &:last-child {
      text-align: right;
      display: flex;
      justify-content: flex-end;
    }
  }
  h1 {
    margin: 0;
    max-width: 60%;
  }
}
</style>
