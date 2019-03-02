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
                <img class="item__img" src="../../public/items-img/tire_1.svg" alt="">
            </div>
            <div class="item__container_data">
                <div class="item__header">
                    <div class="item__title">
                        <p>Premiorri Via Maggiore Z Plus</p>
                    </div>
                </div>
                <div class="item__body">
                    <div class="item__category__wrapper">
                        <p>Category:<span>Зимние шины</span></p>
                    </div>
                    <div class="item__description">
                        <p>
                            Модель Debica Navigator 2 – это всесезонные шины, которые можно использовать круглый год. Они
                            предназначены для спокойных водителей, которые на первое место ставят экономию топлива, а не
                            быстрые разгоны или резкие торможения. Хорошие ходовые качества шины Debica Navigator 2
                            обусловлены добавлением в резину силики, а также «S-образным» рисунком протектора.
                        </p>
                    </div>
                </div>
                <div class="item__footer">
                    <div class="item__price">
                        <p>Цена:</p>
                        <p>1000 <span>UAH</span></p>
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
    //{{this.$route.params.item.title}}
</style>