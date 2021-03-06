import Vue from 'vue'
import Router from 'vue-router'
import Book from "../components/Book";
import Show from "../components/Show";
import Add from "../components/Add";
import Update from "../components/Update";
import Login from "../components/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/book",component:Book},
    {path:"/show/:id/",component:Show},
    {path:"/add/:id/",component:Add},
    {path:"/update/:id/",component:Update},
    {path:"/login",component:Login},
    {path:"/",component:Book},
    {path:"/*",component:Book},
  ]
})
