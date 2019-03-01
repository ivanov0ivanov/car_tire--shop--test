<template>
    <div id="app">
        <header>
            <AppHeader @burgerActive="burgerActive"/>
        </header>
        <main>
            <AppMenu/>
            <Home/>
        </main>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import AppMenu from "./components/AppMenu";
    import Home from "./views/Home";

    export default {
        components: {Home, AppMenu, AppHeader},
        methods: {
            burgerActive() {
                $ (() => {
                    $ (".navbar_custom").toggleClass ("btn-burger_active");
                    $ (".burger-menu").toggleClass ("burger-menu_active");
                    $ (".btn-name").css ("display", "none");

                    if ($ (".menu").hasClass ("burger-menu_active") === false) {
                        setTimeout (() => {
                            $ (".btn-name").css ("display", "inline-block");
                        }, 300);
                    }
                });
            }
        }
    };
</script>

<style scoped lang="sass">
    main
        display: flex
</style>
