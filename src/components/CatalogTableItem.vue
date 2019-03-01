<template>
    <tr class="table__item">
        <td>
            <div class="table__img">
                <img :src="`${item.img}`" alt=""/>
            </div>
        </td>
        <td>
            <div class="table__title">
                <a href="#">{{item.title}}</a>
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
            <div class="table__prise__container">
                <div class="table__prise">{{item.price}}<span> UAH</span></div>
                <div class="table__item__delete d-none">
                    <img src="../assets/images/delete.svg" alt="delete"/>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "CatalogTableItem",
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style scoped lang="sass">
    p
        margin: 0
</style>
