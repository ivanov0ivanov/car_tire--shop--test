export default {
    loading: state => state.loading,
    getItems(state, _, store) {
        const query = store.Search.query.toLowerCase ();
        const sort = store.SortedItems.sortedItems.toLowerCase ();
        if (!!query) {
            return state.items.filter (item => {
                return item.title.toLowerCase ().indexOf (query) !== -1;
            });
        } else if (!!sort) {
            return state.items.filter (item => {
                return item.category.toLowerCase ().indexOf (sort) !== -1;
            });
        } else {
            return state.items;
        }
    }
}


