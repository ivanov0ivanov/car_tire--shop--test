<template>
    <tr class="table__item">
        <td>
            <div class="table__img">
                <img src="../assets/items-img/tire_1.svg" alt=""/>
            </div>
        </td>
        <td>
            <div class="table__title">
                <a href="#">Premiorri ViaMaggiore Z Plus (185/65R15 88H)</a>
            </div>
            <div class="table__description">
                <p>
                    Зимние шины Premiorri ViaMaggiore Z Plus, спроектированные и
                    выпускающиеся под британским брендом Premiorri на мощностях компании
                    «Росава», являются следующим шагом после модели Premiorri
                    ViaMaggiore...
                </p>
            </div>
        </td>
        <td>
            <div class="table__category">
                <p>Зимние шины</p>
            </div>
        </td>
        <td>
            <div class="table__prise__container">
                <div class="table__prise">1000<span> UAH</span></div>
                <div class="table__item__delete d-none">
                    <img src="../assets/images/delete.svg" alt="delete"/>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "CatalogTableItem"
    };
</script>

<style scoped lang="sass">
    p
        margin: 0
</style>
