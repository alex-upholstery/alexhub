import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS, useCart } from "./CartContext";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const { add } = useCart();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return PRODUCTS;
    return PRODUCTS.filter((p) =>
      `${p.name} ${p.category}`.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <main className="page">
      <div className="wrap">
        <h1 className="page-title">Search</h1>

        <input
          type="search"
          className="field search-input"
          placeholder="Search sofas, chairs, beds…"
          value={q}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
          autoFocus
          aria-label="Search products"
        />

        <p className="muted">
          {q
            ? `${results.length} result${results.length === 1 ? "" : "s"} for "${q}"`
            : "All products"}
        </p>

        {results.length === 0 ? (
          <p className="empty">
            Nothing matched "{q}". Try a shorter word, like "sofa" or "chair".
          </p>
        ) : (
          <ul className="product-grid">
            {results.map((p) => (
              <li key={p.id} className="product">
                <div className="product-img" aria-hidden="true" />
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <span className="muted">{p.category}</span>
                  <div className="product-foot">
                    <strong>${p.price}</strong>
                    <button className="btn solid" onClick={() => add(p)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}