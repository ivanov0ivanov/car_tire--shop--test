import {LOADING_DATA, GET_ITEMS, DELETE_ITEM} from "./mutation-types";

export default {
    [LOADING_DATA](state, loading) {
        state.loading = loading
    },

    [GET_ITEMS](state, items) {
        Object.assign (state.items, items)
    },

    [DELETE_ITEM](state, id) {
        state.items = state.items.filter(item => item.id !== id);
    }
}