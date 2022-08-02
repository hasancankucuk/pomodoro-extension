<template>
    <div v-show="isVisible">
        <div class="clock">
            <div class="outer-clock-face">
                <div class="marking marking-one"></div>
                <div class="marking marking-two"></div>
                <div class="marking marking-three"></div>
                <div class="marking marking-four"></div>
                <div class="inner-clock-face">
                    <div class="hand min-hand"></div>
                </div>
            </div>
        </div>
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
            defaultMinute: (+new Date) + 1000 * (60 * 1) + 500,
            ratio: 1,
            localizedService,
            isFinished: false,
            isVisible: true
        }
    },
    methods: {
        minuteCounter() {
            var msLeft = this.defaultMinute - (new Date);
            if (msLeft <= 1000) {
                this.isFinished = true;
                localStorage.setItem("isTaskFinished", true);
            }

            if (msLeft >= 1000) {
                const tomiliseconds = (hrs,min,sec) => (hrs*60*60+min*60+sec)*1000;
                var seconds = 60;
                seconds -= 1;
                var time = new Date(msLeft);
                this.ratio -= 0.01;
                const minsDegrees = (this.ratio) * (360) + 90;
                const minsHand = document.querySelector('.min-hand');
                if(this.ratio >= 0) {
                    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
                }

                document.documentElement.style.setProperty('--ratio', this.ratio);
            }
            
            setTimeout(this.minuteCounter.bind(this), time.getUTCMilliseconds() + 1 );
        },
        startAgain() {
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