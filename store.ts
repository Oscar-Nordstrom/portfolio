import {reactive} from "vue";

export const store = reactive({
    darkTheme: false,
    switchTheme() {
        this.darkTheme = !this.darkTheme;
    }
});