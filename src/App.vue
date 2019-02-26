<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-dark bg-dark navbar_custom">
        <a class="navbar-brand navbar-brand_custom" href="#">
          <img
            src="./assets/images/logo-max.svg"
            class="d-inline-block align-top logo-max"
            alt="hexagon-logo"
          />
          <img
            src="./assets/images/logo-min.svg"
            class="d-inline-block align-top logo-min"
            alt="hexagon-logo"
          />
        </a>
        <div class="btn-burger__container">
          <button
            type="button"
            class="btn-burger"
            data-toggle="offcanvas"
            @click.prevent="burgerActive"
          >
            <span class="burger-line_top"></span>
            <span class="burger-line_middle"></span>
            <span class="burger-line_bottom"></span>
          </button>
        </div>
      </nav>
    </header>
    <aside>
      <div class="menu burger-menu">
        <div class="burger-menu__nav">
          <div class="burger-menu__nav__container">
            <button class="btn_nav btn_nav_overview">
              <img
                class="btn__img_airplay"
                src="./assets/images/airplay.svg"
                alt="airplay"
              /><span class="btn-name">Overview</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    burgerActive() {
      $(function() {
        $(".navbar_custom").toggleClass("btn-burger_active");
        $(".burger-menu").toggleClass("burger-menu_active");
        $(".btn-name").css("display", "none");

        if ($(".menu").hasClass("burger-menu_active") === false) {
          setTimeout(() => {
            $(".btn-name").css("display", "inline-block");
          }, 300);
        }
      });
    }
  }
};
</script>
