import { GithubProfile } from "./github";

export interface RequestUpdateFavorite {
  favoriteId: string;
  profile: GithubProfile;
  type: "ADD" | "REMOVE";
}

export interface RequestFavoriteList {
  userId: string;
}
