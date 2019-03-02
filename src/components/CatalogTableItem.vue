<template>
    <tr class="table__item">
        <td>
            <div class="table__img">
                <img :src="`${item.img}`" alt="img"/>
            </div>
        </td>
        <td>
            <div class="table__title">
                <router-link :to="{ name:'Item', params: {item}}">{{item.title}}</router-link>
            </div>
            <div class="table__description">
                <p>{{item.description}}</p>
            </div>
        </td>
        <td>
            <div class="table__category">
                <p>{{item.category}}</p>
            </div>
        </td>
        <td>
            <div class="table__price__container">
                <div class="table__price">{{item.price}}<span> UAH</span></div>
                <div class="table__item__delete d-none" @click.prevent="onDelete">
                    <img src="../assets/images/delete.svg" alt="delete"/>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "CatalogTableItem",
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions({
                deleteItem: 'Items/deleteItem'
            }),
            onDelete() {
                if (confirm ('Are you sure?')) {
                    this.deleteItem (this.item.id);
                }
            }
        }
    };
</script>

<style scoped lang="sass">
    p
        margin: 0
</style>
