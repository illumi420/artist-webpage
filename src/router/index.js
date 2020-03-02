import Vue from "vue";
import VueRouter from "vue-router";
import VueYouTubeEmbed from 'vue-youtube-embed';
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import About from "../components/About";
Vue.use(VueRouter);
Vue.use(VueYouTubeEmbed);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/slider",
            name: "Slider",
            component: Slider,
            props: true
        }

        , {
            path: "/contact",
            name: "Contact",
            component: Contact,
            props: true
        }
        ,{
            path: "/about",
            name: "About",
            component: About,
            props: true
        }
    ]
})

export default router;