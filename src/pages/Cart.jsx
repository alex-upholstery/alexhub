import { useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useCart } from "./CartContext";
import { useAuth } from "../AuthContext";

const rand = (n) =>
  "R " +
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function Cart() {
  const { items, total, setQty, remove, clear } = useCart();
  const { user } = useAuth();

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function sendQuote(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Enter your name.");
    if (!form.email.includes("@"))
      return setError("Enter a valid email address.");

   const toAbsolute = (src) =>
  src ? new URL(src, window.location.origin).href : "";

const orderDetails = `
<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
  ${items
    .map(
      (i) => `
    <tr>
      <td style="padding:8px;border-bottom:1px solid #eee;width:90px;">
        ${
          i.img
            ? `<img src="${toAbsolute(i.img)}" alt="" width="80" style="display:block;border-radius:4px;" />`
            : ""
        }
      </td>
      <td style="padding:8px;border-bottom:1px solid #eee;">
        <strong>${i.name}</strong><br>
        Qty: ${i.qty} × ${rand(i.price)}
      </td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">
        <strong>${rand(i.price * i.qty)}</strong>
      </td>
    </tr>`
    )
    .join("")}
</table>`;

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          customer_name: form.name.trim(),
          customer_email: form.email.trim(),
          customer_phone: form.phone.trim() || "Not provided",
          message: form.message.trim() || "No message",
          order_details: orderDetails,
          total: rand(total),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      clear();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setError(
        "Could not send your request. Please try again or email quote@afurnhub.com.",
      );
      setStatus("idle");
    }
  }

  // Success screen (shown after the cart has been cleared)
  if (status === "sent") {
    return (
      <main className="page">
        <div className="wrap">
          <div className="empty">
            <h1 className="page-title">Quote request sent</h1>
            <p>Thank you! We'll get back to you at {form.email} shortly.</p>
            <NavLink to="/store" className="btn solid">
              Continue browsing
            </NavLink>
          </div>
        </div>
      </main>
    );
  }

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
                  {i.img ? (
                    <img
                      src={i.img}
                      alt=""
                      className="product-img small"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className="product-img small" aria-hidden="true" />
                  )}
                  <div className="cart-info">
                    <h3>{i.name}</h3>
                    <span className="muted">{rand(i.price)} each</span>
                  </div>

                  <div
                    className="qty"
                    role="group"
                    aria-label={`Quantity for ${i.name}`}
                  >
                    <button
                      onClick={() => setQty(i.id, i.qty - 1)}
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <span>{i.qty}</span>
                    <button
                      onClick={() => setQty(i.id, i.qty + 1)}
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>

                  <strong className="line-total">
                    {rand(i.price * i.qty)}
                  </strong>
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
                <strong>{rand(total)}</strong>
              </div>
              <p className="muted">
                Delivery and fitting are confirmed after you send your order.
              </p>

              {!showForm ? (
                <button
                  type="button"
                  className="btn solid block"
                  onClick={() => setShowForm(true)}
                >
                  Request a quote
                </button>
              ) : (
                <form onSubmit={sendQuote} noValidate>
                  <label className="label-col">
                    Name
                    <input
                      className="field"
                      name="name"
                      value={form.name}
                      onChange={update}
                      autoComplete="name"
                    />
                  </label>
                  <label className="label-col">
                    Email
                    <input
                      className="field"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      autoComplete="email"
                    />
                  </label>
                  <label className="label-col">
                    Phone (optional)
                    <input
                      className="field"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      autoComplete="tel"
                    />
                  </label>
                  <label className="label-col">
                    Message (optional)
                    <textarea
                      className="field"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={update}
                    />
                  </label>

                  {error && (
                    <p className="form-error" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn solid block"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send quote request"}
                  </button>
                </form>
              )}

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
