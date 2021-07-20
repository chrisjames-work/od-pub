<template>
  <div
    class="rooms"
    @click="zoomedOut ? null : setPlayerVisibility(!playerVisible)"
  >
    <room
      v-for="(room, n) in rooms"
      v-bind="room"
      ref="rooms"
      :key="room.id"
      :progress="tween.t"
      :current="index.current === n"
      :prev="index.prev === n"
      :next="index.next === n"
      :visible="isVisible(n)"
      :zoomedOut="gridMode"
      :focus="focusIndex === n && gridMode"
      @loaded="loaded++"
    />
    <transition name="fade">
      <logo
        v-show="zoomedOut"
        ref="logo"
        :style="{ color: view === 'grid' ? 'white' : 'black', zIndex: 2000 }"
      />
    </transition>
    <nav class="prev" @click="prev" />
    <nav class="next" @click="next" />

    <room-overlay ref="roomOverlay" :live="current.live" />

    <transition name="fade">
      <player-controls
        ref="controls"
        v-show="(playerVisible || overlayVisible) && !gridMode"
        :logo="!overlayVisible"
        :visible="animating ? playerVisible : false"
        :name="current.name"
        :chat="current.live"
        @click="revealGrid"
        @toggle="onPlayerToggle"
      />
    </transition>

    <div class="ident">
      <transition name="fade">
        <simple
          v-if="zoomedOut && gridMode"
          :name="focusRoom && focusRoom.name"
        />
      </transition>
    </div>

    <force-attract
      :active="zoomedOut"
      :range="rooms.length"
      @tick="onTick"
      @rectclick="onTap"
      @focus="focusIndex = $event"
      ref="force"
      transparent
    />

    <div
      class="slides"
      v-show="zoomedOut"
      :style="{ zIndex: view === 'grid' ? 200 : 1000 }"
    >
      <div class="slide" ref="list">
        <browse />
      </div>
      <div class="slide" ref="about">
        <about />
      </div>
    </div>

    <transition name="fade">
      <navigation
        :dark="dark"
        v-show="zoomedOut"
        :grid="view === 'grid'"
        :list="view === 'list'"
        :about="view === 'about'"
        @change="onChange"
      />
    </transition>

    <div class="loading" v-if="!ready">
      <img :src="gif" />
      <logo />
    </div>
  </div>
</template>

<script>
import hammer from "hammerjs";
import gsap from "gsap";

import RoomModel from "@/models/Room";
import Room from "@/components/Room";
import PlayerControls from "@/components/PlayerControls";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import RoomOverlay from "@/components/RoomOverlay";

import ForceAttract from "@/views/ForceAttract";

import About from "@/views/About";
import Browse from "@/views/Browse";

import Simple from "@/idents/Simple";

import map from "@/funcs/map";

import { scaleLinear } from "d3";

import { mapState, mapMutations } from "vuex";

export default {
  name: "RoomView",
  components: {
    Room,
    RoomOverlay,
    PlayerControls,
    Logo,
    ForceAttract,
    Simple,
    Navigation,
    About,
    Browse,
  },
  data() {
    return {
      loaded: 0,
      ready: false,
      dark: false,
      animating: false,
      gridMode: false,
      overlayMode: false,
      overlayVisible: false,
      zoomedOut: false,
      view: "grid",
      tween: {
        t: 0,
      },
      nodes: null,
      focusIndex: null,
      gif: require("@/assets/img/bouncy-ball.gif"),
    };
  },
  methods: {
    ...mapMutations(["setPlayerVisibility"]),
    createGestures() {
      this.manager = new hammer.Manager(this.$el);

      this.pan = new hammer.Pan({
        threshold: 0,
        preventDefault: true,
        //direction: hammer.DIRECTION_HORIZONTAL,
      });

      this.manager.add([this.pan]);

      this.manager.on("panstart", this.onPanStart);
      this.manager.on("panend", this.onPanEnd);
      this.manager.on("pancancel", this.onPanEnd);
      this.manager.on("panmove", this.onPanMove);
    },
    createGridTimeline(paused = true) {
      if (this.timeline) {
        this.timeline.clear();
      }

      this.timeline = gsap.timeline({
        paused,
        onComplete: () => {
          this.zoomedOut = true;
          this.$refs.force.move();
        },
        onReverseComplete: () => {
          this.zoomedOut = false;
          this.gridMode = false;

          gsap.set(
            this.$refs.rooms.map((room) => room.$el),
            {
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
            }
          );
        },
      });

      const rooms = this.$refs.rooms.map((room) => room.$el);

      const height = window.innerWidth * (9 / 16);
      this.timeline
        .set(rooms, {
          x: 0,
          y: 0,
          rotation: (n) => {
            if (n === this.index.current) return 0;
            return 90 * Math.random() - 45;
          },
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        })
        .to(rooms, {
          stagger: 0.005,
          x: (n) => this.getX(n),
          y: (n) => this.getY(n),
          scale: (n) => this.getScale(n),
          clipPath: (n) => this.getClipPath(n),
          //opacity: (n) => this.getOpacity(n),
          rotation: 0,
        });
    },
    createOverlayTimeline() {
      this.overlayTimeline = gsap.timeline({
        paused: true,
      });

      this.overlayTimelineReverse = gsap.timeline({
        paused: true,
        onComplete: () => {
          this.setPlayerVisibility(true);
        },
      });

      const el = this.$refs.roomOverlay.$el;
      const controls = this.$refs.controls.$el;

      this.overlayTimeline
        .to(el, {
          y: "0%",
        })
        .to(
          controls,
          {
            "--fill": "black",
            "--fg": "white",
            "--rotate": "180deg",
            "--progress": 1,
          },
          0
        );

      this.overlayTimelineReverse
        .to(el, {
          y: "100%",
        })
        .to(
          controls,
          {
            "--fill": "white",
            "--fg": "black",
            "--rotate": "0deg",
            "--progress": 0,
          },
          0
        );
    },
    onPlayerToggle() {
      if (this.overlayVisible) {
        this.overlayTimelineReverse.play(0);
        this.setPlayerVisibility(true);
      } else {
        this.overlayTimeline.play(0);
      }
      this.overlayVisible = !this.overlayVisible;
    },
    getX(n) {
      return this.nodes[n].x;
    },
    getY(n) {
      const node = this.nodes[n];
      const scale = node.width / window.innerWidth;
      const offset =
        (window.innerHeight - window.innerWidth / (node.width / node.height)) /
        2;

      return node.y - offset * scale;
    },
    getScale(n) {
      return this.nodes[n].width / window.innerWidth;
    },
    getClipPath(n) {
      const node = this.nodes[n];

      const ratio = node.width / node.height;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const height = vw / ratio;

      const offset = (((vh - height) / vh) * 100) / 2;

      return `polygon(0% ${offset}%, 100% ${offset}%, 100% ${
        100 - offset
      }%, 0% ${100 - offset}%)`;
    },
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    getOpacity(n) {
      return this.nodes[n].opacity;
    },
    revealGrid(e) {
      if (e) e.stopPropagation();
      this.gridMode = true;
      this.createGridTimeline(false);
      this.setPlayerVisibility(false);
      setTimeout(() => {
        this.timeline.play();
      }, 0);
    },
    onPanStart(e) {
      if (this.zoomedOut || this.overlayVisible) return;
      this.setPlayerVisibility(false);

      if (this.gridMode) {
        return;
      }

      if (this.animating) return;
    },
    onPanMove(e) {
      if (this.zoomedOut || this.overlayVisible) return;

      if (
        e.direction === hammer.DIRECTION_LEFT ||
        e.direction === hammer.DIRECTION_RIGHT
      ) {
        if (this.animating) return;

        this.tween.t = this.map(e.deltaX);
      }

      if (this.tween.t !== 0) return;

      if (this.gridMode) {
        const progress = map(e.deltaY, 0, 300, 0, 1);
        this.timeline.reversed(false);
        this.timeline.progress(progress);
        return;
      }

      //       if (this.overlayMode) {
      //         const progress = map(Math.abs(e.deltaY), 0, window.innerHeight, 0, 1);
      //
      //         if (!this.overlayVisible) {
      //           this.overlayTimelineReverse.kill();
      //           this.overlayTimeline.progress(progress);
      //         } else {
      //           this.overlayTimeline.kill();
      //           this.overlayTimelineReverse.progress(progress);
      //         }
      //         return;
      //       }

      if (e.direction === hammer.DIRECTION_DOWN) {
        this.animate(0);
        this.gridMode = true;
        this.createGridTimeline();
        return;
      }

      // if (e.direction === hammer.DIRECTION_UP) {
      //   this.overlayMode = true;
      //   return;
      // }
    },
    onPanEnd(e) {
      if (this.zoomedOut || this.overlayVisible) return;
      if (this.gridMode) {
        if (e.velocityY > 1 || e.deltaY > 150) {
          this.timeline.play();
        } else {
          this.timeline.reverse();
        }
        return;
      }

      //       if (this.overlayMode) {
      //         const v = Math.abs(e.velocityY);
      //         const y = Math.abs(e.deltaY);
      //
      //         if (e.direction === hammer.DIRECTION_UP) {
      //           // Dragging up
      //           if (v > 1 || y > 200) {
      //             this.overlayTimeline.play();
      //             this.overlayVisible = true;
      //           } else {
      //             this.overlayTimelineReverse.play();
      //           }
      //         } else {
      //           // Dragging down
      //           if (v > 1 || y > 200) {
      //             this.overlayTimelineReverse.play();
      //           } else {
      //             this.overlayTimeline.play();
      //           }
      //         }
      //         return;
      //       }

      if (this.animating) return;

      const velocity = Math.abs(e.velocityX);

      if (e.deltaX < -100) {
        //next
        this.animate(1, velocity);
        return;
      }

      if (e.deltaX > 100) {
        //prev
        this.animate(-1, velocity);
        return;
      }

      // back to current
      this.animate(0);
    },
    onTap(index) {
      if (this.gridMode) {
        this.change(index);

        this.zoomedOut = false;

        if (this.animation) this.animation.kill();

        this.setPlayerVisibility(false);

        this.animation = gsap.fromTo(
          this.roomElems,
          {
            x: (n) => this.getX(n),
            y: (n) => this.getY(n),
            scale: (n) => this.getScale(n),
            clipPath: (n) => this.getClipPath(n),
            opacity: (n) => this.getOpacity(n),
            rotation: (n) => {
              if (n === this.index.current) return 0;
              return 90 * Math.random() - 45;
            },
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            onComplete: () => {
              this.animation = null;
              this.zoomedOut = false;
              this.gridMode = false;
            },
          }
        );
      } else {
        this.setPlayerVisibility(!this.playerVisible);
      }
    },
    animate(t = 0, velocity = 0) {
      if (this.animation) this.animation.kill();

      this.animating = true;

      const duration = velocity > 1 ? 0.4 / velocity : 0.45;

      this.animation = gsap.to(this.tween, {
        t,
        duration,
        ease: t === 0 ? "back.out(1.2)" : "back.out(1)",
        onComplete: () => {
          this.tween.t = 0;
          this.animating = false;

          if (t === 1) {
            this.next();
          }
          if (t === -1) {
            this.prev();
          }
        },
      });
    },
    change(id) {
      this.setPlayerVisibility(false);
      this.$router.push({
        name: "Room",
        params: {
          id: Math.abs(id),
        },
      });
    },
    next(e) {
      if (this.gridMode) return;
      if (e) e.stopPropagation();
      const index = this.index.next;
      this.change(this.rooms[index].id);
    },
    prev(e) {
      if (this.gridMode) return;
      if (e) e.stopPropagation();
      const index = this.index.prev;
      this.change(this.rooms[index].id);
    },
    onKeydown(e) {
      const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

      if (key === "ArrowRight") {
        this.next();
      }
      if (key === "ArrowLeft") {
        this.prev();
      }
    },
    isVisible(n) {
      if (this.index.current === n) return true;
      if (this.index.next === n && this.tween.t > 0) return true;
      if (this.index.prev === n && this.tween.t < 0) return true;
      return false;
    },
    onTick(nodes) {
      this.nodes = nodes;

      if (!this.gridMode) return;

      if (this.zoomedOut) {
        gsap.set(this.roomElems, {
          x: (n) => this.getX(n),
          y: (n) => this.getY(n),
          scale: (n) => this.getScale(n),
          clipPath: (n) => this.getClipPath(n),
          opacity: (n) => this.getOpacity(n),
        });
      }
    },
    onChange(view) {
      if (view === "grid") {
        const x = (this.view === "about" ? 100 : -100) + "%";

        this.dark = false;

        gsap.to(this.$refs[this.view], {
          x,
          duration: 0.55,
          ease: "back.out(0.1)",
        });

        // Back to force grid
        this.animation = gsap.to(this.roomElems, {
          x: (n) => this.getX(n),
          y: (n) => this.getY(n),
          scale: (n) => this.getScale(n),
          clipPath: (n) => this.getClipPath(n),
          opacity: (n) => this.getOpacity(n),
          onComplete: () => {
            this.gridMode = true;
          },
        });
      } else {
        this.dark = true;
        this.gridMode = false;

        const direction = view === "about" ? -1 : 1;

        this.animation = gsap.fromTo(
          this.roomElems,
          {
            x: (n) => this.getX(n),
            y: (n) => this.getY(n),
            scale: (n) => this.getScale(n),
            clipPath: (n) => this.getClipPath(n),
            opacity: (n) => this.getOpacity(n),
          },
          {
            x: (n) => {
              const x = 200 + this.getRandomArbitrary(0, window.innerWidth);
              return this.getX(n) + x * direction;
            },
            duration: 1,
            onComplete: () => {},
          }
        );

        if (this.view !== "grid") {
          const x = (this.view === "about" ? 100 : -100) + "%";

          gsap.to(this.$refs[this.view], {
            x,
            duration: 0.55,
            ease: "back.out(0.1)",
          });
        }

        gsap.to(this.$refs[view], {
          x: 0,
          duration: 0.55,
          ease: "back.out(0.1)",
        });
      }

      // Change view
      this.view = view;
    },
  },
  computed: {
    ...mapState(["playerVisible"]),
    map() {
      return scaleLinear().domain([300, -300]).range([-1, 1]).clamp(true);
    },
    id() {
      return Math.abs(this.$route.params.id);
    },
    rooms() {
      const rooms = RoomModel.query().withAll().all();
      return rooms.map((room) => {
        delete room.$id;
        return room;
      });
    },
    index() {
      const length = this.rooms.length;

      const current = this.rooms.findIndex((room) => room.id === this.id);
      const prev = (current + length - 1) % length;
      const next = (current + 1) % length;

      return {
        prev,
        current,
        next,
      };
    },
    current() {
      return this.rooms[this.index.current];
    },
    roomElems() {
      return this.$refs.rooms.map((room) => room.$el);
    },
    focusRoom() {
      if (typeof this.focusIndex !== "undefined") {
        return this.rooms[this.focusIndex];
      }
    },
  },
  watch: {
    loaded() {
      if (this.loaded === this.rooms.length) {
        // Loading done

        const interval = 100;

        this.rooms.forEach((room, n) => {
          setTimeout(() => {
            if (Math.abs(this.$route.params.id) !== room.id) {
              this.$router.replace({
                name: "Room",
                params: {
                  id: room.id,
                },
              });
            }

            if (n === this.rooms.length - 1) {
              this.$router.replace({
                name: "Room",
                params: {
                  id: 0,
                },
              });
              this.ready = true;
            }
          }, interval * n);
        });
      }
    },
  },
  mounted() {
    this.loaded = 0;
    window.addEventListener("keydown", this.onKeydown);
    this.createGestures();

    this.$nextTick(this.createOverlayTimeline);

    //this.$nextTick(this.createGridTimeline);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeydown);
  },
};
</script>

<style lang="scss" scoped>
.rooms {
  nav {
    width: 44px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1000;

    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }

  > #logo {
    position: absolute;
    top: 56px;
    left: 16px;
    z-index: 10;
  }

  .ident {
    position: absolute;
    z-index: 100;
    pointer-events: none;
    color: white;
    width: 100%;
    height: 100%;
  }

  .slides,
  .slide,
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
  }

  .overlay {
    background: black;
    opacity: 0;
  }

  .slide {
    background: rgba(white, 1);

    &:first-child {
      transform: translateX(-100%);
    }
    &:last-child {
      transform: translateX(100%);
    }
  }

  .loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    color: white;
    display: grid;
    place-items: center;
    z-index: 100;
    img {
      width: 100%;
      filter: invert(1) grayscale(1) brightness(2);
      mix-blend-mode: screen;
      bottom: 0px;
      position: absolute;
    }
    #logo {
      width: 200px;
    }
  }
}
</style>
