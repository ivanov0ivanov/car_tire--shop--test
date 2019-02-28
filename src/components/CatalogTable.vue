<template>
    <table class="table-hover table_custom">
        <thead>
        <tr class="table-head">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <CatalogTableItem/>
        </tbody>
    </table>
</template>

<script>
    import CatalogTableItem from "./CatalogTableItem";

    export default {
        name: "CatalogTable",
        components: {CatalogTableItem}
    };
</script>
<style scoped lang="sass">
    p
        margin: 0
</style>
