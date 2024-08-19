import { create } from "zustand";



export type FavoriteState = {
    favorite: Array<number> | [];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
};

export const useFavoriteStore = create<FavoriteState>(
  (set): FavoriteState => ({
    favorite:
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("favorite") || "[]")
        : [],
    addFavorite: (id: number) =>
      set((state) => {
        const updatedFavorite = [...state.favorite, id];
        window.localStorage.setItem(
          "favorite",
          JSON.stringify(updatedFavorite)
        );
        return { favorite: updatedFavorite };
      }),
    removeFavorite: (id: number) =>
      set((state) => {
        const updatedFavorite = state.favorite.filter((item) => item!== id);
        window.localStorage.setItem(
          "favorite",
          JSON.stringify(updatedFavorite)
        );
        return { favorite: updatedFavorite };
      }),
  })
);