export default {
  loading: state => state.loading,
  getItems(state, _, store) {
    const query = store.Search.query.toLowerCase();
    if(!!query) {
      return state.items.filter(item => {
        return item.title.toLowerCase().indexOf(query) !== -1;
      });
    } else {
      return state.items;
    }
  }
}