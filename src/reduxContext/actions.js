export const ADD_PRODUCT = (product) => {
  console.log("add product", product)
    return {
      type: 'ADD_PRODUCT',
      payload: product
    };
  };
  
  export const EDIT_PRODUCT = (product) => {
    return {
      type: 'EDIT_PRODUCT',
      payload: product
    };
  };

  export const DELETE_PRODUCT = (product) => {
    return {
      type: 'DELETE_PRODUCT',
      payload: product
    };
  };

  export const SEARCH_PRODUCT = (product) => {
    return {
      type: 'SEARCH_PRODUCT',
      payload: product
    };
  };
  