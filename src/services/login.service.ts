import { defaultAxios } from "../configs/axios.config";
import { LOGIN_API } from "../utils/api/login";
import {
  USER_FAVORITE,
  USER_FAVORITE_PROFILES,
  USER_ID,
} from "../utils/constansts/user";
import {
  RequestAccessCodePayload,
  RequestVerifyAccessCodePayload,
} from "../utils/interfaces/login";

export const getAccessCode = async ({
  phoneNumber,
}: RequestAccessCodePayload) => {
  try {
    const result = await defaultAxios.post(LOGIN_API.POST_PHONE, {
      phoneNumber,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyAccessCode = async ({
  accessCode,
  userId,
  phoneNumber,
}: RequestVerifyAccessCodePayload) => {
  try {
    const result = await defaultAxios.post(LOGIN_API.VERIFY_ACCESS_CODE, {
      accessCode,
      userId,
      phoneNumber,
    });
    return result.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem(USER_FAVORITE);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(USER_FAVORITE_PROFILES);
};
