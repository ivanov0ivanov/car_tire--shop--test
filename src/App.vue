<template>
    <div id="app">
        <header>
            <AppHeader/>
        </header>
        <main>
            <AppMenu/>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import AppMenu from "./components/AppMenu";
    import Home from "./views/Home";

    export default {
        components: {Home, AppMenu, AppHeader}
    };
</script>

<style scoped lang="sass">
    main
        display: flex
</style>
