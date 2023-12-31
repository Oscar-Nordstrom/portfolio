import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./Pages/Home.vue";
import Contact from "./Pages/Contact.vue";
import NotFound from "./Pages/NotFound.vue";
import Skills from "./Pages/Skills.vue";
import About from "./Pages/About.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";


import {
    FaBars,
    BiGithub,
    BiLinkedin,
    BiXLg,
    FaPhoneAlt,
    MdAlternateemail,
    MdDrivefilerenameoutline,
    ViFileTypeCsharp2,
    ViFileTypeCpp3,
    ViFileTypeReactjs,
    ViFileTypeAngular,
    CoNextJs,
    ViFileTypeVue,
    ViFileTypeTypescriptOfficial,
    CoJavascript,
    CoDotNet,
    ViFileTypeHtml,
    ViFileTypeCss,
    ViFileTypeTailwind,
    ViFileTypeNode2,
    ViFileTypeLua,
    RiTestTubeFill,
    AiStackoverflowSquare,
    IoGameControllerSharp,
    MdDataobjectTwotone,
    ViFileTypePlsql,
    ViFileTypeAzure,
    BiKeyFill,
    ViFileTypeDocker2,
    RiTeamFill,
    GiArtificialIntelligence,
    CoUnity,
    MdGames,
    ViFileTypeArduino,
    BiGit,
    FcLinux,
    IoSearchSharp,
    IoGridSharp,
    IoSunny,
    IoMoon

} from "oh-vue-icons/icons";
addIcons(
    FaBars,
    BiGithub,
    BiLinkedin,
    BiXLg,
    FaPhoneAlt,
    MdAlternateemail,
    MdDrivefilerenameoutline,
    ViFileTypeCsharp2,
    ViFileTypeCpp3,
    ViFileTypeReactjs,
    ViFileTypeAngular,
    CoNextJs,
    ViFileTypeVue,
    ViFileTypeTypescriptOfficial,
    CoJavascript,
    CoDotNet,
    ViFileTypeHtml,
    ViFileTypeCss,
    ViFileTypeTailwind,
    ViFileTypeNode2,
    ViFileTypeLua,
    RiTestTubeFill,
    CoDotNet,
    AiStackoverflowSquare,
    IoGameControllerSharp,
    MdDataobjectTwotone,
    ViFileTypePlsql,
    ViFileTypePlsql,
    ViFileTypePlsql,
    ViFileTypeAzure,
    BiKeyFill,
    ViFileTypeDocker2,
    RiTeamFill,
    RiTestTubeFill,
    GiArtificialIntelligence,
    RiTeamFill,
    CoUnity,
    MdGames,
    ViFileTypeArduino,
    BiGit,
    FcLinux,
    IoSearchSharp,
    IoGridSharp,
    IoSunny,
    IoMoon
);



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name:'Home', component: Home },
        { path: '/contact', name:'Contact', component: Contact },
        { path: '/skills', name:'Skills', component: Skills },
        { path: '/about', name:'About', component: About },
        { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
    ]
})


const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");

