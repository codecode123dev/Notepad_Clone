<template>
  <component :is="layout">
    <!-- <div class="theme-light"> -->
      <!-- <nav-header/> -->
      <router-view />
      <!-- <footer-view/> -->
    <!-- </div> -->
  </component>

</template>
<script>
import NavHeader from './components/NavHeader.vue';
import FooterView from './components/FooterView.vue';
import {useRoute} from "vue-router";
import { computed } from 'vue';
import { PUBLIC_LAYOUT } from "@/constants"
export default {
  setup(){
    const route = useRoute()
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout")
    }
  },
}
</script>
<style>


body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
}

body {
    background-color: #f8f9fa;
}
body {
    height: 100%;
}
</style>
