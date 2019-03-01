import {GET_ITEMS, LOADING_DATA} from "./mutation-types";

export default {
    [GET_ITEMS](state, items) {
        Object.assign (state.items, items)
    },

    [LOADING_DATA](state, loading) {
        state.loading = loading
    }
}