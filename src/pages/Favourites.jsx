import { Link } from "react-router-dom";
import { useFavourites } from "../FavouritesContext";

export default function Favourites() {
  const { items, toggleFav } = useFavourites();

  return (
    <main className="page">
      <div className="wrap">
        <h1 className="page-title">Favourites</h1>

        {items.length === 0 ? (
          <p className="muted">
            You haven't saved anything yet. Browse the{" "}
            <Link to="/store">store</Link> to find pieces you like.
          </p>
        ) : (
          <ul
            style={{
              display: "grid",
              gap: 16,
              padding: 0,
              listStyle: "none",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {items.map((item) => (
              <li key={item.id}>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%" }}
                  />
                )}
                <h3>{item.name}</h3>
                <button className="link-btn" onClick={() => toggleFav(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
