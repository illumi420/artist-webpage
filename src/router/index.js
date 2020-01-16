import Vue from "vue";
import VueRouter from "vue-router";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/slider",
            name: "Slider",
            component: Slider,
            props: true,
        }

        , {
            path: "/contact",
            name: "Contact",
            component: Contact,
            props: true
        }
    ]
})

export default router;