<template>
    <div>
        <to-do-component v-show="!checkVisibility()"></to-do-component>
        <timer-component v-show="checkVisibility()"></timer-component>
    </div>
</template>

<script>
import ToDoComponent from "./ToDoComponent.vue";
import TimerComponent from "./TimerComponent.vue";
import store from "../store/index.js";

export default {
    name: "MainPage",
    data() {
        return { }
    },
    components: { 
        ToDoComponent,
        TimerComponent
    },
    methods: {
        checkVisibility() {
            return store.state.isVisible;
        }
    }
}
</script>
