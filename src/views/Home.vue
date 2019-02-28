<template>
    <section>
        <div class="catalog_container">
            <div class="catalog-title_container">
                <p class="catalog-title">Items catalog</p>
            </div>
            <div class="catalog-control">
                <DropdownSort/>
                <CatalogSearch/>
            </div>
            <div class="catalog-table">
                <CatalogTable/>
            </div>
        </div>
    </section>
</template>

<script>
    import DropdownSort from "../components/DropdownSort";
    import CatalogSearch from "../components/CatalogSearch";
    import CatalogTable from "../components/CatalogTable";

    export default {
        name: "home",
        components: {CatalogTable, CatalogSearch, DropdownSort},
        data: () => {
            return $ (() => {
                $ (".dropdown-menu").on ("click", "a", function () {
                    $ (".btn:first-child")
                        .text ($ (this).text ())
                        .val ($ (this).text ());
                });
            });
        }
    };
</script>

<style scoped lang="sass">
    section
        width: 100%
        width: -moz-available
        width: -webkit-fill-available
        width: fill-available
</style>
