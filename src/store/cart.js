export const ACTION_CART_ADD = 'ACTION_CART_ADD';
export const ACTION_CART_REMOVE = 'ACTION_CART_REMOVE';
export const ACTION_CART_CLEAR = 'ACTION_CART_CLEAR';

const initialState = {
  products: [],
};

export const actionAddProductToCart = (id, price) => {
  return { type: ACTION_CART_ADD, payload: { id, price } };
};

export const actionRemoveProductFromCart = (id) => {
  return { type: ACTION_CART_REMOVE, payload: { id } };
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CART_ADD: {
      const { id, price } = action.payload;
      const foundProduct = state.products.find((product) => product.id === id);

      if (foundProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product,
          ),
        };
      }

      return { ...state, products: [...state.products, { id, price, quantity: 1 }] };
    }
    case ACTION_CART_REMOVE: {
      const { id } = action.payload;
      const foundProduct = state.products.find((product) => product.id === id);
      if (foundProduct) {
        if (foundProduct.quantity === 1) {
          // remove from cart
          return {
            ...state,
            products: state.products.filter((product) => product.id !== id),
          };
        }
        return {
          // decrease quantity
          ...state,
          products: state.products.map((product) =>
            product.id === id ? { ...product, quantity: product.quantity - 1 } : product,
          ),
        };
      }
      // product not found
      return state;
    }
    case ACTION_CART_CLEAR: {
      console.log(state, action);
      return state;
    }
    default: {
      return state;
    }
  }
};

export const getProductsFromCart = (state) => {
  return state.products;
};

export const getCartTotalPrice = (state) => {
  let totalPrice = 0;

  for (let i = 0; i < state.products.length; i++) {
    const product = state.products[i];

    const productTotal = product.price * product.quantity;
    totalPrice = totalPrice + productTotal;
  }

  return totalPrice;
};
