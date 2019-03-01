import { SET_SORT } from "./mutation-types";

export default {
  setSort({ commit }, sort) {
    commit(SET_SORT, sort)
  }
}
