import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";

Vue.use(Vuex);

import database from "@/database";
import knobs from "@/components/Knobs/store";

export default new Vuex.Store({
  state: {
    playerVisible: false,
    playerTimeout: null,
    playerTimeoutDuration: 4000,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  mutations: {
    setPlayerVisibility(state, visible) {
      if (state.playerTimeout) {
        clearTimeout(state.playerTimeout);
      }
      state.playerVisible = visible;

      if (visible) {
        state.playerTimeout = setTimeout(() => {
          state.playerVisible = false;
          state.playerTimeout = null;
        }, state.playerTimeoutDuration);
      }
    },
  },
  actions: {},
  getters: {
    width: (state) => state.width,
    height: (state) => state.height,
  },
  modules: {
    ...knobs,
  },
  plugins: [VuexORM.install(database)],
});
