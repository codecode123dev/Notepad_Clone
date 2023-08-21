<template>
  <div class="theme-light">
  <nav-header-vue />
  <slot />
  <footer-view-vue />
  </div>
</template>
<script>
import FooterViewVue from "../components/FooterView.vue";
import NavHeaderVue from "../components/NavHeader.vue";
export default {
  components: {
    NavHeaderVue: NavHeaderVue,
    FooterViewVue: FooterViewVue,
  },
};
</script>
