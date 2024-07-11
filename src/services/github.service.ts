import { defaultAxios } from "../configs/axios.config";
import { GITHUB_API } from "../utils/api/github";

export const getGithubUserList = async (keyword: string) => {
  try {
    const result = await defaultAxios.get(GITHUB_API.GET_USER_LIST, {
      params: { q: keyword, page: 1, per_page: 20 },
    });
    return result.data;
  } catch (error) {}
};

// {
//     "login": "aa",
//     "id": 28438,
//     "node_id": "MDQ6VXNlcjI4NDM4",
//     "avatar_url": "https://avatars.githubusercontent.com/u/28438?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/aa",
//     "html_url": "https://github.com/aa",
//     "followers_url": "https://api.github.com/users/aa/followers",
//     "following_url": "https://api.github.com/users/aa/following{/other_user}",
//     "gists_url": "https://api.github.com/users/aa/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/aa/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/aa/subscriptions",
//     "organizations_url": "https://api.github.com/users/aa/orgs",
//     "repos_url": "https://api.github.com/users/aa/repos",
//     "events_url": "https://api.github.com/users/aa/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/aa/received_events",
//     "type": "User",
//     "site_admin": false,
//     "score": 1
// }