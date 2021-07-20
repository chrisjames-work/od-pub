<template>
  <div class="browse">
    <ul>
      <li
        v-for="(room, n) in rooms"
        :key="room.name"
        v-if="room.name"
        ref="rooms"
        @click="toggle(n)"
      >
        <div class="row">
          <h2>{{ room.name }}</h2>
          <span v-if="room.name === 'Live'">All day until 20:00 CET</span>
        </div>
        <div v-if="room.name === 'Live'" class="scroller">
          <img class="live" :src="require('@/assets/img/Feature.png')" />
        </div>
        <div class="content">
          <div class="hidden">
            <img
              :src="require('@/assets/img/browse-list.png')"
              style="
                width: 100%;
                margin-top: 40px;
                padding-left: 16px;
                padding-right: 16px;
              "
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

import rooms from "@/data/rooms";

import gsap from "gsap";

export default {
  data() {
    return {
      rooms,
      active: null,
    };
  },
  methods: {
    toggle(n) {
      if (this.active !== null) {
        this.collapse(this.active);
        if (this.active === n) {
          this.collapse(this.active);
          return;
        }
      }

      const el = this.$refs.rooms[n];
      const target = el.querySelector(".hidden");
      const bounds = target.getBoundingClientRect();

      const accordion = el.querySelector(".content");

      gsap.to(accordion, {
        height: bounds.height,
        duration: 0.4,
      });

      this.active = n;

      const scroll = { y: this.$el.scrollTop };
      const y = this.$el.scrollTop + (bounds.top - 200);

      gsap.to(scroll, {
        y,
        onUpdate: () => {
          this.$el.scrollTo(0, scroll.y);
        },
      });

      console.log(el, target, bounds.height);
    },
    expand(n) {},
    collapse(n) {
      const el = this.$refs.rooms[n];
      const accordion = el.querySelector(".content");

      gsap.to(accordion, {
        height: 0,
        duration: 0.3,
        onComplete: () => {
          this.active = null;
        },
      });
    },
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.browse {
  padding-top: 186px;
  padding-bottom: 104px;
  height: 100vh;
  overflow: auto;

  h2 {
    font-size: 20px;
    font-weight: normal;
    margin: 0;
  }

  img.live {
    height: 182px;
    margin-top: 20px;
  }

  .scroller {
    overflow: auto;
    padding-left: 16px;
    padding-right: 16px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .content {
    position: relative;
    height: 0;
    overflow: hidden;
    .hidden {
      position: absolute;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 24px 0px;
      border-top: 1px solid;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;

        > span {
          font-size: 12px;
          position: sticky;
          right: 16px;
        }
      }
    }
  }
}
</style>
