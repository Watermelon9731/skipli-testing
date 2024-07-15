import { create } from "zustand";

type FavoriteState = {
  favoriteList: any[];
};

type FavoriteAction = {
  setFavoriteList: (list: FavoriteState["favoriteList"]) => void;
  updateFavoriteList: (id: number) => void;
};

export const useFavoriteStore = create<FavoriteState & FavoriteAction>(
  (set) => ({
    favoriteList: [],
    setFavoriteList: (list) =>
      set((state) => ({ favoriteList: [...state.favoriteList, list] })),
    updateFavoriteList: (id) =>
      set((state) => {
        if (!state.favoriteList || state.favoriteList.length <= 0) {
          return { favoriteList: [...state.favoriteList, id] };
        } else {
          const isExist = state.favoriteList.find(
            (item: number) => item === id
          );

          if (isExist) {
            const newList = state.favoriteList.filter(
              (item: number) => item !== id
            );
            return { favoriteList: [...state.favoriteList, newList] };
          } else {
            return { favoriteList: [...state.favoriteList, id] };
          }
        }
      }),
  })
);
