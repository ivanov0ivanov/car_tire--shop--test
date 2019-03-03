import {LOADING_DATA, GET_ITEMS, DELETE_ITEM} from "./mutation-types";
import axios from 'axios';

export default {
    async getData({commit}) {
        (async () => {
            const items = (await axios.get ("./data/items.json")).data.items;
            await console.log (items);
            commit (GET_ITEMS, items);
            commit (LOADING_DATA, false);
        }) ();
    },

    deleteItem({commit}, id) {
        commit (DELETE_ITEM, id);
    },

    burgerActive() {
        $ (() => {
            $ (".navbar_custom").toggleClass ("btn-burger_active");
            $ (".burger-menu").toggleClass ("burger-menu_active");
            $ (".btn-name").css ("display", "none");

            if ($ (".menu").hasClass ("burger-menu_active") === false) {
                setTimeout (() => {
                    $ (".btn-name").css ("display", "inline-block");
                }, 300);
            }
        });
    }
}