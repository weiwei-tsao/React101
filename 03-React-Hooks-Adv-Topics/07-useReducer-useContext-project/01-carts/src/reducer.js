
const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE_ITEM') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }

    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            }

            return item
        });

        return { ...state, cart: tempCart }
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.cart
            .map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 }
                }

                return item;
            })
            .filter((item) => item.amount > 0)

        return { ...state, cart: tempCart };
    }

    if (action.type === 'GET_TOTAL') {

        let { totalPrice, amount } = state.cart.reduce((cartTotal, cartItem) => {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
            // cartTotal => previousValue, at the beginning it equals to the initialValue (the object contains two properties)
            // cartItem => currentValue, it is the current value of state.cart, so just read data from it to make changes
            const { price, amount } = cartItem;
            // console.log(price, amount);
            cartTotal.amount += amount;
            cartTotal.totalPrice += price * amount;

            // return the results after running the reducer callback function over the entir array
            return cartTotal;
        }, {
            totalPrice: 0,
            amount: 0
        });

        totalPrice = parseFloat(totalPrice.toFixed(2));

        return { ...state, totalPrice, amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, loading: false, cart: action.payload }
    }

    if (action.type === 'TOGGLE_AMOUNT') {

        let tempCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {

                if (action.payload.type === 'inc') {
                    return { ...item, amount: item.amount + 1 };
                }

                if (action.payload.type === 'des') {
                    return { ...item, amount: item.amount - 1 };
                }
            }

            return item;
        }).filter((item) => item.amount > 0);

        return { ...state, cart: tempCart }

    }

    throw new Error('no matching type...')

    // return state;
}

export default reducer