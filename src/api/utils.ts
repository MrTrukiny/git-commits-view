import { IGitHubFetchObject } from '../interfaces/IGitHub';
import {
  DEFAULT_OWNER,
  DEFAULT_REPOSITORY,
  BASE_GITHUB_URL,
} from './constants';

export const configGithubRequest = (): IGitHubFetchObject => {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  };

  const gitHubUrl: string = `${BASE_GITHUB_URL}/repos/${DEFAULT_OWNER}/${DEFAULT_REPOSITORY}/commits`;

  return { url: gitHubUrl, options: { headers } };
};
