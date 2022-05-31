import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskName: "",
    remainingTime: 0
  },
  mutations: {
    setTaskNameMutation(state, payload) {
      if(!isNullOrEmpty(payload)) {
        state = payload;
      }
    },
    setRemainingTimeMutation(state, payload) {
      if(isValid(payload)) {
        state.remainingTime = payload;
      }
    }
  },
  actions: {
    setTaskName({ commit }, payload) {
      commit('setTaskNameMutation', payload);
    },
    setRemainingTime({ commit}, payload) {
      commit('setRemainingTimeMutation', payload);
    }
  },
  modules: {},
});
