<template>
    <div class="main" v-show="isVisible">
        <button class="addTask" @click="isAddTaskClicked = !isAddTaskClicked"> Add Task </button>
        <input class="taskInput" type="text" v-if="isAddTaskClicked" placeholder="enter your goal" v-model="task"/>
        <button class="submit" @click="saveTask()"> Submit </button>
    </div>
</template>

<script>
import router from "../router/index.js";
import store from "../store/index.js";
import { mapActions } from "vuex";
export default {
  data() {
     return { 
        isAddTaskClicked: false,
        isVisible: true,
        task: "",
        remainingTime: 0
    }
  },
  name: "ToDoComponent",
  computed: {
    ...mapActions(['setVisibility'])
  },
  methods: {
      saveTask() {
        if(this.task != "") {
            router.push({ path: '/timer', replace: true });
            this.isVisible = false;
            store.dispatch('setVisibility')
        }
    }
  }
};
</script>
<style scoped>
    @import "../main.css";
</style>