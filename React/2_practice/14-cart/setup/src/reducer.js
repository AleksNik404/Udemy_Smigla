import CartItem from './CartItem';

const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    const newcart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newcart };
  }

  if (action.type === 'INCREASE') {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREASE') {
    const tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (acc, item) => {
        const { price, amount } = item;
        acc.amount += amount;
        acc.total += amount * price;
        return acc;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload };
  }

  // if (action.type === 'TOGGLE_AMOUNT') {
  //   let tempCard = state.cart
  //     .map((item) => {
  //       if (item.id === action.payload.id) {
  //         if (action.payload.type === 'inc') {
  //           return { ...item, amount: item.amount + 1 };
  //         }
  //         if (action.payload.type === 'dec') {
  //           return { ...item, amount: item.amount - 1 };
  //         }
  //       }
  //       return item;
  //     })
  //     .filter((item) => item.amount > 0);

  //   return { ...state, cart: tempCard };
  // }
  throw new Error('no matching action type');
};

export default reducer;
