<template>
  <div class="force-attract" :style="{ zIndex: active ? 1000 : null }">
    <svg ref="canvas" :width="width" :height="height" />
  </div>
</template>

<script>
import gsap from "gsap";
import hammer from "hammerjs";
import * as d3 from "d3";

import { forceAttract } from "d3-force-attract";

import map from "@/funcs/map";

export default {
  props: {
    active: Boolean,
    transparent: Boolean,
    range: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      radius: 165,
      target: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      },
      alphaTarget: 2,
      focusIndex: null,
    };
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    getRandomColor() {
      return "hsla(" + Math.random() * 360 + ",100%,50%, 1)";
    },
    initGestures() {
      this.manager = new hammer.Manager(this.$el);

      this.pan = new hammer.Pan({
        threshold: 0,
        preventDefault: true,
      });

      this.manager.add([this.pan]);

      this.manager.on("panmove", this.onPanmove);
      this.manager.on("panend", (e) => {
        this.target.x = this.target.x + e.deltaX * 2;
        this.target.y = this.target.y + e.deltaY * 2;
      });
    },
    init() {
      // Nodes
      this.nodes = d3.range(this.range).map((d) => {
        return {
          x: this.width * Math.random(),
          y: this.height * Math.random(),
          r: this.radius * this.getRandomArbitrary(1, 1),
          width: null,
          height: null,
          opacity: 1,
          fill: this.getRandomColor(),
          inertia: 0.01 + 0.01 * Math.random(),
          active: false,
          tween: {
            multiplier: 0,
          },
          animation: null,
        };
      });

      // Simulation
      // set up attract force to pull nodes toward mouse location.
      // set attract strength per node, to prevent nodes from bunching up
      // (and to demonstrate per-node attract parameters).
      this.simulation = d3
        .forceSimulation()
        .force(
          "attract",
          forceAttract()
            .target([this.width / 2, this.height / 2])
            .strength(function (d) {
              return d.inertia;
            })
        )
        .force(
          "collide",
          d3.forceCollide(function (d) {
            return d.r * 0.95;
          })
        )
        .on("tick", this.layoutTick)
        .nodes(this.nodes);

      this.canvas = d3.select(this.$refs.canvas);

      this.node = this.canvas
        .selectAll("rect")
        .data(this.nodes)
        .enter()
        .append("rect")
        .on("click", (e, node) => {
          e.stopPropagation();
          this.$emit("rectclick", node.index);
        })
        .attr("fill", (d) => (this.transparent ? "transparent" : d.fill))
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y;
        })
        .attr("width", function (d) {
          return d.r;
        })
        .attr("height", function (d) {
          return d.r * (16 / 12);
        });
    },
    findClosestPointToCenter() {
      /* 
      Find closest point to center
      */
      const point = {
        x: window.innerWidth / 2 - this.radius / 2,
        y: window.innerHeight / 2 - this.radius / 2,
      };
      const points = this.nodes.map((node, n) => {
        return {
          n,
          x: node.x,
          y: node.y,
        };
      });

      const distance = (p) => {
        return Math.sqrt(
          Math.pow(point.x - p.x, 2) + Math.pow(point.y - p.y, 2)
        );
      };

      return points.reduce((a, b) => (distance(a) < distance(b) ? a : b));
    },
    setActiveRect() {
      const closest = this.findClosestPointToCenter();

      this.focusIndex = closest.n;

      this.nodes
        .filter((node, n) => n !== closest.n)
        .forEach((node) => {
          if (node.active) {
            if (node.animation) node.animation.kill();
            node.animation = gsap.to(node.tween, {
              multiplier: 0,
              duration: 1,
              ease: "power4.out",
              onComplete: () => {
                node.active = false;
                node.animation = null;
              },
            });
          }
        });

      const node = this.nodes[closest.n];
      node.active = true;

      if (node.animation) node.animation.kill();

      node.animation = gsap.to(node.tween, {
        multiplier: 1,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          node.animation = null;
        },
      });

      this.simulation.nodes(this.nodes);
    },
    onPanmove(e) {
      const target = [
        this.target.x + e.deltaX * 2,
        this.target.y + e.deltaY * 2,
      ];

      this.move(target);
    },
    getSize(size, t, ratio = 1) {
      const multiplier = map(t, 0, 1, 1, 1.5);
      return size * multiplier * ratio;
    },
    move(target) {
      if (typeof target === "undefined") {
        target = [this.target.x, this.target.y];
      }
      this.setActiveRect();
      this.simulation.force("attract").target(target);
      this.simulation.alphaTarget(this.alphaTarget).restart();
    },
    layoutTick(e) {
      this.nodes.forEach((node) => {
        const t = node.tween.multiplier;
        node.width = this.getSize(node.r, t);
        node.height = this.getSize(node.r, t, 16 / 12);
        node.opacity = map(t, 0, 1, 0.5, 1);
      });

      this.$emit("tick", this.nodes);

      this.node
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .attr("fill-opacity", (d) => d.opacity)
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height);
    },

    setTarget(t) {
      if (!this.timeline) {
        this.timeline = gsap.timeline({ paused: true });
      }

      this.timeline();
    },
  },
  watch: {
    focusIndex() {
      this.$emit("focus", this.focusIndex);
    },
  },
  mounted() {
    this.init();
    this.initGestures();
  },
};
</script>

<style lang="scss" scoped>
.force-attract {
  width: 100%;
  height: 100%;
  position: absolute;

  svg {
    position: absolute;
  }
}
</style>
