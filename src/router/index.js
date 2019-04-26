import Vue from "vue";
import Router from "vue-router";
import Reactivity from "@/components/Reactivity.vue";
import Dashboard from "@/components/Dashboard.vue";
import ErrorHandling from "@/components/ErrorHandling.vue";
import PropertyMutation from "@/components/PropertyMutation.vue";
import ReactivityWithComponents from "@/components/ReactivityWithComponents.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Dashboard
    },
    {
      path: "/Reactvity",
      name: "Reactivity",
      component: Reactivity
    },
    {
      path: "/ReactvityWithComponents",
      name: "ReactvityWithComponents",
      component: ReactivityWithComponents
    },
    {
      path: "/PropertyMutation",
      name: "PropertyMutation",
      component: PropertyMutation
    },
    {
      path: "/ErroHandling2",
      name: "ErrorHandling",
      component: ErrorHandling
    }
  ]
});
