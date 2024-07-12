import { GithubProfile } from "./github";

export interface RequestUpdateFavorite {
  favoriteId: string;
  profile: GithubProfile;
}

export interface RequestFavoriteList {
  userId: string;
}
