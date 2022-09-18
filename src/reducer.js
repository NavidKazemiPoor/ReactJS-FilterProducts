const reducer = (state, action) => {
  if (action.type === "FILTER") {
    if (action.payload === "همه") {
      return {
        ...state,
        filterText: action.payload,
        product: state.defaultProduct,
      };
    }
    const tempProduct = state.defaultProduct.filter(
      (item) => item.tag === action.payload
    );
    return {
      ...state,
      product: tempProduct,
      filterText: action.payload,
    };
  }
};

export default reducer;
