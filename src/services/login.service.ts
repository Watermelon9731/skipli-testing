import { defaultAxios } from "../configs/axios.config";
import { LOGIN_API } from "../utils/api/login";

export const loginWithPhoneNumber = async (phoneNumber: string) => {
  try {
    const result = await defaultAxios.post(LOGIN_API.POST_PHONE, {
      phoneNumber,
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
