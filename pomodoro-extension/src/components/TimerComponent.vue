<template>
    <div v-show="isVisible">
        <div class="clock"></div>
        <div v-show="isFinished" >
            <button class="startAgain" @click="startAgain()">{{ localizedService.getLocalizedMessage("startAgain") }}</button>
        </div>
    </div>
</template>

<script>
import localizedService from "../services/localized-message-service";
import router from "../router/index.js";
import store from "../store/index.js";
import { mapActions } from "vuex";
export default {
    name: "TimerComponent",
    mounted() {
        this.minuteCounter();
    },
    data() {
        return {
            defaultTime: 3 * 60,
            ratio: 1.0,
            localizedService,
            isFinished: false,
            isVisible: false
        }
    },
    methods: {
        minuteCounter() {
            if (this.defaultTime == 0) {
                this.isFinished = true;
            }

            if( this.defaultTime >= 0) {
                this.defaultTime = this.defaultTime - 1;
                this.ratio -= 0.01;
                document.documentElement.style.setProperty('--ratio', this.ratio);
            }
            
            setTimeout(this.minuteCounter.bind(this), 10);
        },
        startAgain() {
            console.log(router);
            router.push({ path: '', replace: true });
            this.isVisible = false;
            store.dispatch('setVisibility');
        }
    }
}
</script>
<style scoped>
@import "../main.css";
</style>