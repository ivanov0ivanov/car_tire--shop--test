<template>
    <div class="custom__container_item">
        <div class="link__back__wrapper">
            <router-link class="link__back" to="/">
                <img class="arrow__back" src="../assets/images/arrow-left.svg" alt="arrow">
                Back to catalog
            </router-link>
        </div>
        <div class="item__container">
            <div class="item__img__wrapper">
                <img class="item__img" :src="`${this.$route.params.item.img}`" alt="">
            </div>
            <div class="item__container_data">
                <div class="item__header">
                    <div class="item__title">
                        <p>{{this.$route.params.item.title}}</p>
                    </div>
                </div>
                <div class="item__body">
                    <div class="item__category__wrapper">
                        <p>Category:<span>{{this.$route.params.item.category}}</span></p>
                    </div>
                    <div class="item__description">
                        <p>{{this.$route.params.item.description}}</p>
                    </div>
                </div>
                <div class="item__footer">
                    <div class="item__price">
                        <p>Цена:</p>
                        <p>{{this.$route.params.item.price}} <span>UAH</span></p>
                    </div>
                    <div class="item__btm__wrapper">
                        <button class="item__btn">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item"
    };
</script>

<style lang="sass" scoped>
    p
     margin: 0
</style>