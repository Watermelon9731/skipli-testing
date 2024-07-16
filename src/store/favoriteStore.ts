import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FavoriteState = {
  favoriteList: any[];
};

type FavoriteAction = {
  setFavoriteList: (list: FavoriteState["favoriteList"]) => void;
  updateFavoriteList: (id: number) => void;
  resetFavoriteList: () => void;
};

const initialState: FavoriteState = {
  favoriteList: [],
};

export const useFavoriteStore = create<FavoriteState & FavoriteAction>()(
  persist(
    (set) => ({
      ...initialState,
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
      resetFavoriteList: () => {
        set(initialState);
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
