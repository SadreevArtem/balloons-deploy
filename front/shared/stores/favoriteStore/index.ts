import { create } from "zustand";



export type FavoriteState = {
    favorite: Array<number> | [];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
    hydrateFavorite: () => void;
};

export const useFavoriteStore = create<FavoriteState>(
  (set): FavoriteState => ({
    favorite: [],
    hydrateFavorite: () => {
      try {
        set({
          favorite: JSON.parse(window.localStorage.getItem("favorite") || "[]"),
        });
      } catch {
        set({ favorite: [] });
      }
    },
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
