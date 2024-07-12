export interface RequestGithubUserList {
  keyword: string;
  page?: number;
  perPage?: number;
}

export interface GithubProfile {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  repos_urls: string;
}
