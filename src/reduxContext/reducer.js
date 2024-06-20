const initialState = {
  products: [
    { id: 1, name: "Lays", price: "20", category: "Food" },
    { id: 2, name: "Doritos", price: "20", category: "Food" },
    { id: 3, name: "Chitos", price: "20", category: "Food" },
    { id: 4, name: "Lays", price: "20", category: "Food" },
    { id: 5, name: "Doritos", price: "20", category: "Food" },
    { id: 6, name: "Chitos", price: "20", category: "Food" }
  ],
  filteredProducts: []
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
    case 'SEARCH_PRODUCT':
      if (action.payload == "") {
        // console.log("empty value", state);
        return {
          ...state,
          products: state.products
        }
      }
      else {
        const searchedProducts = state.products.slice()
        // console.log("search", action.payload);
        if (action.payload == "" || action.payload == null) {
          return {
            ...state,
            products: state.products
          };
        }
        else {
          return {
            ...state,
            filteredProducts: searchedProducts.filter((product) => {
              // console.log("action.payload search products", action.payload, product.name.toLowerCase());
              return (product.name.toLowerCase()).includes(action.payload);
            })
          };
        }
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        // products: state.products.toSpliced(action.payload-1, 1)
        products: state.products.filter((product) => {
          return action.payload.id !== product.id
        })
      };
    default:
      return state;
  }
};

export default productReducer;
