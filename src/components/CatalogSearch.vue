<template>
    <div class="catalog-search">
        <div class="form-control_search_container">
            <form>
                <input class="form-control_search_custom search_custom_img" type="search" placeholder="Search"/>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CatalogSearch"
    };
</script>

<style scoped>
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
        display: none;
    }
</style>
