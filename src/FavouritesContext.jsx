import { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "./AuthContext";

const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  // Live-listen to this user's favourites
  useEffect(() => {
    if (!user) {
      setItems([]);
      return;
    }
    const unsub = onSnapshot(
      collection(db, "users", user.uid, "favourites"),
      (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (err) => console.error("Favourites error:", err)
    );
    return unsub;
  }, [user]);

  const isFav = (id) => items.some((i) => i.id === id);

  async function toggleFav(product) {
    if (!user) return;
    const ref = doc(db, "users", user.uid, "favourites", product.id);
    try {
      if (isFav(product.id)) {
        await deleteDoc(ref);
      } else {
        await setDoc(ref, {
          name: product.name,
          image: product.image,
          price: product.price ?? null,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <FavouritesContext.Provider value={{ items, isFav, toggleFav }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export const useFavourites = () => useContext(FavouritesContext);