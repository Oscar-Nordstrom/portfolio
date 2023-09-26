import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import NotFound from "./components/NotFound.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiList, BiGithub, BiLinkedin, BiXLg} from "oh-vue-icons/icons";
addIcons(BiList, BiGithub, BiLinkedin, BiXLg);



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name:'Home', component: Home },
        { path: '/contact', name:'Contact', component: Contact },
        { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
    ]
})


const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");

