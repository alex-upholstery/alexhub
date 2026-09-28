import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Cart() {
  const { items, total, setQty, remove, clear } = useCart();

  return (
    <main className="page">
      <div className="wrap">
        <h1 className="page-title">Your cart</h1>

        {items.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <NavLink to="/catalogue" className="btn solid">
              Browse the catalogue
            </NavLink>
          </div>
        ) : (
          <div className="cart-layout">
            <ul className="cart-list">
              {items.map((i) => (
                <li key={i.id} className="cart-row">
                  <div className="product-img small" aria-hidden="true" />
                  <div className="cart-info">
                    <h3>{i.name}</h3>
                    <span className="muted">${i.price} each</span>
                  </div>

                  <div className="qty" role="group" aria-label={`Quantity for ${i.name}`}>
                    <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease">
                      −
                    </button>
                    <span>{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase">
                      +
                    </button>
                  </div>

                  <strong className="line-total">${i.price * i.qty}</strong>
                  <button
                    className="link-btn"
                    onClick={() => remove(i.id)}
                    aria-label={`Remove ${i.name}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <aside className="summary">
              <h2>Order summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${total}</strong>
              </div>
              <p className="muted">Delivery and fitting are confirmed after you send your order.</p>
              <NavLink to="/contact" className="btn solid block">
                Request a quote
              </NavLink>
              <button className="link-btn" onClick={clear}>
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}