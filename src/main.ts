import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./Pages/Home.vue";
import Contact from "./Pages/Contact.vue";
import NotFound from "./Pages/NotFound.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiList, BiGithub, BiLinkedin, BiXLg, FaPhoneAlt, MdAlternateemail, MdDrivefilerenameoutline} from "oh-vue-icons/icons";
addIcons(BiList, BiGithub, BiLinkedin, BiXLg, FaPhoneAlt, MdAlternateemail, MdDrivefilerenameoutline);



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

