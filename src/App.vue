<template>
  <div id="app">
    <h3>百知图书管理系统</h3>
    <router-link to="/book">图书管理</router-link>
    <router-link to="/show">查看图书</router-link>
    <router-link to="/add"></router-link>
    <router-link to="/update"></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Book from "./components/Book";
import Add from "./components/Add";
import Show from "./components/Show";
import Update from "./components/Update";

export default {
  name: 'App',
  components:{
    book:Book,
    add:Add,
    show:Show,
    update:Update
  }

}
</script>

<style>

</style>
