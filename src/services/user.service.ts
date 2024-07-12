import { defaultAxios } from "../configs/axios.config";
import { FAVORITE_PROFILE } from "../utils/api/user";
import { GithubProfile } from "../utils/interfaces/github";
import { RequestUpdateFavorite } from "../utils/interfaces/user";

export const updateFavoriteProfile = async ({
  favoriteId,
  profile,
}: RequestUpdateFavorite) => {
  try {
    const payload: GithubProfile = {
      login: profile.login,
      id: profile.id,
      avatar_url: profile.avatar_url,
      html_url: profile.html_url,
      followers_url: profile.followers_url,
      repos_urls: profile.repos_urls,
    };
    const result = await defaultAxios.post(FAVORITE_PROFILE.UPDATE, {
      favoriteId,
      payload,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavoriteProfileList = async (userId: string) => {
  try {
    const result = await defaultAxios.post(FAVORITE_PROFILE.LIST_DATA, {
      userId: userId,
    });
    return result.data[0];
  } catch (error) {
    console.log(error);
  }
};
