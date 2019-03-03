<template>
    <table class="table-hover table_custom">
        <thead>
        <tr class="table-head" v-if="loading">
            <th class="text-danger">LOADING</th>
            <th class="text-danger">LOADING</th>
            <th class="text-danger">LOADING</th>
            <th class="text-danger">LOADING</th>
        </tr>
        <tr class="table-head" v-else>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <CatalogTableItem v-for="item of items" :key="item.id" :item="item"/>
        </tbody>
    </table>
</template>

<script>
    import CatalogTableItem from "./CatalogTableItem";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "CatalogTable",
        components: {CatalogTableItem},
        computed: mapGetters ({
            loading: 'Items/loading',
            items: 'Items/getItems'
        }),
        mounted() {
            return this.getData ({})
        },
        methods: {
            ...mapActions ({
                getData: 'Items/getData'
            }),
        }
    };
</script>
<style scoped lang="sass">
    p
        margin: 0
</style>
