<template>
    <div class="catalog-sort">
        <div class="dropdown-label_container">
            <p class="dropdown-label">Category</p>
        </div>
        <div class="dropdown dropdown_custom">
            <button class="btn dropdown-toggle btn_dropdown_custom" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
            <div class="dropdown-menu dropdown-menu_custom" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item dropdown-item_custom" href="#">All</a>
                <a class="dropdown-item dropdown-item_custom" href="#">Зимние шины</a>
                <a class="dropdown-item dropdown-item_custom" href="#">Летние шины</a>
                <a class="dropdown-item dropdown-item_custom" href="#">Всесезонные шины</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DropdownSort"
    };
</script>
