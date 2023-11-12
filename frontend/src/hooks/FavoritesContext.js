// FavoritesContext.js
import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photoId) => {
    if (!favorites.includes(photoId)) {
      setFavorites([...favorites, photoId]);
    }
  };

  const removeFavorite = (photoId) => {
    const updatedFavorites = favorites.filter((id) => id !== photoId);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (photoId) => {
    return favorites.includes(photoId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
