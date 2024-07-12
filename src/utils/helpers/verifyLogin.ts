import { USER_FAVORITE, USER_ID } from "../constansts/user";

export const loginCheck = () => {
  const userId = localStorage.getItem(USER_ID);
  const userFavoriteId = localStorage.getItem(USER_FAVORITE);
  return userId && userFavoriteId;
};
