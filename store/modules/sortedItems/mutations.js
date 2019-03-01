import {SET_SORT} from "./mutation-types";

export default {
    [SET_SORT](state, sort) {
        state.sortedItems = sort;
    }
}
