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
    }
}