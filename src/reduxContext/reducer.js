import {ADD_PRODUCT} from "./actions";
const initialState = {
  products:[
    {id: 1,name:"Lays",price:"20",category:"Food"}
  ]
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        // products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};

export default productReducer;
