import { createContext, useContext, useMemo, useReducer } from "react";

// Placeholder products. Replace with your real catalogue data or API.
export const PRODUCTS = [
  { id: 1, name: "Chesterfield Sofa", category: "Sofas", price: 850 },
  { id: 2, name: "Wingback Armchair", category: "Chairs", price: 320 },
  { id: 3, name: "Velvet Dining Chair", category: "Chairs", price: 110 },
  { id: 4, name: "Tufted Headboard", category: "Beds", price: 240 },
  { id: 5, name: "Corner Sectional", category: "Sofas", price: 1200 },
  { id: 6, name: "Upholstered Ottoman", category: "Footstools", price: 95 },
];

const CartContext = createContext(null);

function reducer(items, action) {
  switch (action.type) {
    case "add": {
      const found = items.find((i) => i.id === action.item.id);
      return found
        ? items.map((i) => (i.id === found.id ? { ...i, qty: i.qty + 1 } : i))
        : [...items, { ...action.item, qty: 1 }];
    }
    case "setQty":
      return items
        .map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i))
        .filter((i) => i.qty > 0);
    case "remove":
      return items.filter((i) => i.id !== action.id);
    case "clear":
      return [];
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((n, i) => n + i.qty * i.price, 0),
      add: (item) => dispatch({ type: "add", item }),
      setQty: (id, qty) => dispatch({ type: "setQty", id, qty }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
    }),
    [items]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);