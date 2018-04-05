import Service, { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default class GitHubService extends Service {
  //@ts-ignore
  ajax = service("ajax");

  repos(this: GitHubService) {
    return get(this, "ajax").request("https://api.github.com/users/experianplc/repos", {
      method: "GET"
    });
  };
};

declare module '@ember/service' {
  interface Registry {
    'github': GitHubService;
  }
}
