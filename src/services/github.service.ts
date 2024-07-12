import { defaultAxios } from "../configs/axios.config";
import { GITHUB_API } from "../utils/api/github";
import {
  RequestGithubUserList,
} from "../utils/interfaces/github";

export const getGithubUserList = async ({
  keyword,
  page = 1,
  perPage = 20,
}: RequestGithubUserList) => {
  try {
    const result = await defaultAxios.get(GITHUB_API.GET_USER_LIST, {
      params: { q: keyword, page: page, per_page: perPage },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getGithubUserProfile = async (githubId: number) => {
  try {
    const result = await defaultAxios.post(GITHUB_API.GET_USER, {
      githubId: githubId,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

