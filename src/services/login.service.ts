import { defaultAxios } from "../configs/axios.config";
import { LOGIN_API } from "../utils/api/login";
import {
  RequestAccessCodePayload,
  RequestVerifyAccessCodePayload,
} from "../utils/interfaces/user";

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
