export interface RequestGithubUserList {
  keyword: string;
  page?: number;
  perPage?: number;
}

export interface GithubProfile {
  html_url: string;
  followers_url: string;
  login: string;
  avatar_url: string;
  id: number;
  repos_urls: string;
}
