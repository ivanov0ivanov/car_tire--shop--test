<template>
    <div class="catalog-sort">
        <div class="dropdown-label_container">
            <p class="dropdown-label">Category</p>
        </div>
        <div class="dropdown dropdown_custom">
            <button class="btn dropdown-toggle btn_dropdown_custom" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All
            </button>
            <div class="dropdown-menu dropdown-menu_custom" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item dropdown-item_custom allTires" href="#" @click.prevent="onAllTires">All</a>
                <a class="dropdown-item dropdown-item_custom winterTires" href="#" @click.prevent="onWinterTires">Зимние шины</a>
                <a class="dropdown-item dropdown-item_custom summerTires" href="#" @click.prevent="onSummerTires">Летние шины</a>
                <a class="dropdown-item dropdown-item_custom allSeasonTires" href="#" @click.prevent="onAllSeasonTires">Всесезонные шины</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "DropdownSort",
        data() {
            return {
                sortedItems: ''
            }
        },
        watch: {
            sortedItems(value) {
                this.setSort (value);
            }
        },
        methods: {
            ...mapActions ({
                setSort: 'SortedItems/setSort'
            }),

            onAllTires(){
                this.sortedItems= '';
            },

            onWinterTires() {
                this.sortedItems= '';
                this.sortedItems = $(".winterTires").text();
            },

            onSummerTires() {
                this.sortedItems= '';
                this.sortedItems = $(".summerTires").text();
            },

            onAllSeasonTires() {
                this.sortedItems= '';
                this.sortedItems = $(".allSeasonTires").text();
            }
        }
    };
</script>
