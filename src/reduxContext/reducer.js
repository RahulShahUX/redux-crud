const initialState = {
  products: [
    { id: 1, name: "Lays", price: "20", category: "Food" },
    { id: 2, name: "Doritos", price: "20", category: "Food" },
    { id: 3, name: "Chitos", price: "20", category: "Food" },
    { id: 4, name: "Lays", price: "20", category: "Food" },
    { id: 5, name: "Doritos", price: "20", category: "Food" },
    { id: 6, name: "Chitos", price: "20", category: "Food" }
  ]
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload.id ? action.payload : product
        })
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        // products: state.products.toSpliced(action.payload-1, 1)
        products:state.products.filter((productId)=>{
          return action.payload-1 != state.products[action.payload].id, console.log("filter", action.payload, state.products)
        })
      };
    default:
      return state;
  }
};

export default productReducer;
