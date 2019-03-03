<template>
  <nav class="navbar navbar-dark bg-dark navbar_custom">
    <a class="navbar-brand navbar-brand_custom" href="#">
      <img src="../assets/images/logo-max.svg" class="d-inline-block align-top logo-max" alt="hexagon-logo"/>
      <img src="../assets/images/logo-min.svg" class="d-inline-block align-top logo-min" alt="hexagon-logo"/>
    </a>
    <div class="btn-burger__container">
      <button type="button" class="btn-burger" data-toggle="offcanvas" @click.prevent="burgerActive">
        <span class="burger-line_top"></span>
        <span class="burger-line_middle"></span>
        <span class="burger-line_bottom"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AppHeader",
  methods: mapActions({
    burgerActive: 'Items/burgerActive'
  })
};
</script>
