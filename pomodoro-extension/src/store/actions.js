export default {
    setTaskName({ commit }, payload) {
        commit('setTaskNameMutation', payload);
    },
    setRemainingTime({ commit }, payload) {
        commit('setRemainingTimeMutation', payload);
    },
    setVisibility({ commit }) {
        commit('setVisibilityMutation');
    }
}