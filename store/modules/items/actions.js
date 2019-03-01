import {GET_ITEMS, LOADING_DATA} from "./mutation-types";
import axios from 'axios';

export default {
    async getData({commit}) {
        const items = (await axios.get ("./data/items.json")).data.items;
        await console.log (items);
        commit (GET_ITEMS, items);
        commit (LOADING_DATA, false);
    }
}