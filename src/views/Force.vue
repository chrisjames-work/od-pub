<template>
  <div class="force">
    <canvas ref="canvas" />

    <!-- Parameters -->
    <!-- <knobs>
      <knobs-group>
        <slider
          :step="1"
          label="Count"
          v-model="count"
          :min="1"
          :max="1000"
          isolation-mode="void"
        />
        <slider
          :step="4"
          label="Gutter"
          icon="_Custom/border_inner"
          v-model="gutter"
          :min="0"
          :max="256"
          marks
          isolation-mode="void"
        />
        <slider
          :step="1"
          label="Charge"
          v-model="charge"
          :min="-2000"
          :max="500"
          isolation-mode="void"
        />
        <slider
          :step="0.1"
          label="Gravity"
          v-model="gravity"
          :min="5"
          :max="50"
          isolation-mode="void"
        />
        <slider
          :step="1"
          label="Scale"
          v-model="scale"
          :min="1"
          :max="10"
          isolation-mode="void"
        />
      </knobs-group>
    </knobs> -->
  </div>
</template>

<script>
import d3 from "d3-3";
import hammer from "hammerjs";

import { mapGetters } from "vuex";

import Knobs from "@/components/Knobs/Knobs";
import KnobsGroup from "@/components/Knobs/KnobsGroup";
import Slider from "@/components/Slider/Slider";

export default {
  components: {
    Knobs,
    KnobsGroup,
    Slider,
  },
  data() {
    return {
      root: null,
      nodes: null,
      color: null,
      gutter: 20,
      count: 13,
      charge: -30,
      gravity: 50,
      scale: 1,
    };
  },
  methods: {
    initCanvas() {
      this.context = this.$refs.canvas.getContext("2d");

      this.$refs.canvas.width = this.width;
      this.$refs.canvas.height = this.height;
    },
    initGestures() {
      this.manager = new hammer.Manager(this.$el);

      this.pan = new hammer.Pan({
        threshold: 0,
        preventDefault: true,
        domEvents: true,
      });

      this.manager.add([this.pan]);

      //this.manager.on("panstart", this.onPanStart);
      //this.manager.on("panend", this.onPanEnd);
      //this.manager.on("pancancel", this.onPanEnd);
      this.manager.on("panmove", (e) => {
        //console.log(e.center.x);
        this.root.px = e.center.x;
        this.root.py = e.center.y;
        this.force.resume();
      });
    },
    draw() {
      this.context.clearRect(0, 0, this.width, this.height);
      this.context.save();

      this.nodes.forEach((node, i) => {
        const x = node.x - node.width / 2;
        const y = node.y - node.height / 2;

        this.context.fillStyle = "#ffffff";
        this.context.fillRect(x, y, node.width, node.height);

        //this.context.fillStyle = this.color(i % 5);
        this.context.fillStyle = "black";
        this.context.fillRect(
          x + this.gutter,
          y + this.gutter,
          node.width - this.gutter * 2,
          node.height - this.gutter * 2
        );
      });

      this.context.restore();
    },
    createNodes() {
      this.nodes = d3.range(this.count).map(function (d, i) {
        return {
          width: ~~(Math.random() * 240 + 15),
          height: ~~(Math.random() * 240 + 15),
        };
      });
      this.root = this.nodes[0];
    },
    clearRoot() {
      this.root.x = 2000;
      this.root.y = 2000;
      this.root.width = 100;
      this.root.height = 40;
      this.root.fixed = true;
    },
    updateScale(newScale, oldScale) {
      const props = ["width", "height"]; // , "x", "y"
      const scale = newScale / oldScale;

      this.nodes.forEach((node) => {
        props.forEach((prop) => {
          node[prop] = node[prop] * scale;
        });
      });
    },
    collide(node) {
      return function (quad, x1, y1, x2, y2) {
        var updated = false;
        if (quad.point && quad.point !== node) {
          var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            xSpacing = (quad.point.width + node.width) / 2,
            ySpacing = (quad.point.height + node.height) / 2,
            absX = Math.abs(x),
            absY = Math.abs(y),
            l,
            lx,
            ly;

          if (absX < xSpacing && absY < ySpacing) {
            l = Math.sqrt(x * x + y * y);

            lx = (absX - xSpacing) / l;
            ly = (absY - ySpacing) / l;

            // the one that's barely within the bounds probably triggered the collision
            if (Math.abs(lx) > Math.abs(ly)) {
              lx = 0;
            } else {
              ly = 0;
            }

            node.x -= x *= lx;
            node.y -= y *= ly;
            quad.point.x += x;
            quad.point.y += y;

            updated = true;
          }
        }
        return updated;
      };
    },
    init() {
      this.color = d3.scale.category10();
      this.createNodes();
      this.initCanvas();
      this.initGestures();

      // mouse node, position off screen initially
      this.clearRoot();

      this.force = d3.layout
        .force()
        .gravity(this.gravity / 1000)
        .charge((d, i) => {
          return i ? -this.count * 2 : -2000;
        })
        .nodes(this.nodes)
        .size([this.width, this.height]);

      this.force.on("tick", (e) => {
        var q = d3.geom.quadtree(this.nodes),
          i = 0,
          n = this.nodes.length;

        while (++i < n) {
          q.visit(this.collide(this.nodes[i]));
        }

        this.draw();
      });

      this.force.start();
    },
  },
  watch: {
    gravity() {
      this.force.gravity(this.gravity / 1000);
    },
    // charge() {
    //   console.log("charge changed");
    //   this.force.stop();
    //   this.force.charge((d, i) => {
    //     console.log(i, this.charge);
    //     return i ? this.charge : -2000;
    //   });
    //   this.force.start();
    // },
    count() {
      this.force.stop();

      this.createNodes();
      this.force.nodes(this.nodes);
      this.clearRoot();

      this.force.start();
    },
    // scale(to, from) {
    //   console.log(from, "--_>", to);

    //   this.force.stop();

    //   this.updateScale(to, from);

    //   this.force.gravity(this.gravity / 1000 / this.scale);
    //   this.force.charge((d, i) => {
    //     console.log(i, this.charge);
    //     return i ? this.charge / this.scale : -2000;
    //   });

    //   this.force.start();
    // }
  },
  computed: {
    ...mapGetters(["width", "height"]),
  },
  mounted() {
    this.$nextTick(this.init);
  },
};
</script>

<style lang="scss" scoped>
.force {
  width: 100%;
  height: 100%;
  position: absolute;
  background: lime;

  .knobs {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
}
svg,
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

svg {
  opacity: 0.5;
  z-index: 1;
}

canvas {
  pointer-events: none;
}
</style>
