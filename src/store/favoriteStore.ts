import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GithubProfile } from "../utils/interfaces/github";

type FavoriteState = {
  favoriteList: GithubProfile[];
};

type FavoriteAction = {
  setFavoriteList: (list: FavoriteState["favoriteList"]) => void;
  updateFavoriteList: (favoriteItem: GithubProfile) => void;
  resetFavoriteList: () => void;
};

const initialState: FavoriteState = {
  favoriteList: [],
};

export const useFavoriteStore = create<FavoriteState & FavoriteAction>()(
  persist(
    (set) => ({
      ...initialState,
      setFavoriteList: (list: FavoriteState["favoriteList"]) =>
        set({ favoriteList: [...list] }),
      updateFavoriteList: (favoriteItem) =>
        set((state) => {
          if (!state.favoriteList || state.favoriteList.length <= 0) {
            return { favoriteList: [...state.favoriteList, favoriteItem] };
          } else {
            const isExist = state.favoriteList.find(
              (item: GithubProfile) => item.id === favoriteItem.id
            );
            if (isExist) {
              const newList = state.favoriteList.filter(
                (item) => item.id !== favoriteItem.id
              );
              return { favoriteList: [...newList] };
            } else {
              return { favoriteList: [...state.favoriteList, favoriteItem] };
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
