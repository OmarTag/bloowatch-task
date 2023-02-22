import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: { items: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const foundItem = state.cart.items.find(
        (item) => item.slug === newItem.slug
      );
      const items = foundItem
        ? state.cart.items.map((item) =>
            item.name === foundItem.name ? newItem : item
          )
        : [...state.cart.items, newItem];
      return { ...state, cart: { ...state.cart, items } };
    }
    case "CART_REMOVE_ITEM": {
      const items = state.cart.items.filter(
        (item) => item.slug !== action.payload.slug
      );
      return { ...state, cart: { ...state.cart, items } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
