import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Field from "../views/Field";
import Sound from "../views/Sound";

import Room from "../views/Room";
import Force from "../views/Force";
import Force2 from "../views/Force2";
import ForceAttract from "../views/ForceAttract";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/field",
    name: "Field",
    component: Field,
  },
  {
    path: "/sound",
    name: "Sound",
    component: Sound,
  },
  {
    path: "/room/:id?",
    name: "Room",
    component: Room,
  },
  {
    path: "/force",
    name: "Force",
    component: Force,
  },
  {
    path: "/force-2",
    name: "Force2",
    component: Force2,
  },
  {
    path: "/force-attract",
    name: "ForceAttract",
    component: ForceAttract,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
