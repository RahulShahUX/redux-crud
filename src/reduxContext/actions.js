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
  