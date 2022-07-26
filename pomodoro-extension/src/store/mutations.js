export default {
    setTaskNameMutation(state, payload) {
        if (!isNullOrEmpty(payload)) {
            state = payload;
        }
    },
    setRemainingTimeMutation(state, payload) {
        if (isValid(payload)) {
            state.remainingTime = payload;
        }
    },
    setVisibilityMutation(state) {
        state.isVisible = !state.isVisible;
    }
}