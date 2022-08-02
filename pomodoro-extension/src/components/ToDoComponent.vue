<template>
    <div class="main" v-show="isVisible">
        <!-- <button class="addTask" @click="isAddTaskClicked = !isAddTaskClicked"> Add Task </button> -->
        <div class="form-background" ref="form">
          <h2>{{ "Pomodoro Extension" }}</h2>
          <img class="timer-icon" src="../assets/images/timer.svg" />
          <input class="taskInput" type="text" placeholder="Enter your goal as min" v-model="task"/>
          <button class="submit" @click="saveTask()"> Submit </button>
          </div>
          <div class="error-panel" v-show="errorPanelVisible">
            <img class="error-icon"  src="../assets/images/error.svg" />
            <span class="error-message"> Please enter your goal.  </span>
        </div>
    </div>
</template>

<script>
import router from "../router/index.js";
import store from "../store/index.js";
import { mapActions } from "vuex";
import localizedService from "../services/localized-message-service.js"
export default {
  data() {
     return { 
        isAddTaskClicked: true,
        isVisible: false,
        task: "",
        remainingTime: 0,
        localizedService,
        errorPanelVisible: false
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
          localStorage.setItem("isTaskFinished", false);
          store.dispatch('setVisibility')
        } else {
          this.$refs.form.style.filter = "blur(5px)";
          this.errorPanelVisible = true;
          setTimeout(() => {
            this.$refs.form.style.filter = "";
            this.errorPanelVisible = false;
          }, 1000);
        }
    }
  },
  mounted() {


  }
};
</script>
<style scoped>
    @import "../main.css";
</style>
