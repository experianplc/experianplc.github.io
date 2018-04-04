import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { computed, get, set } from "@ember/object";

export default class IndexController extends Controller {

  repositories = [];

  //@ts-ignore
  githubSession = service("github-session");

  featuredRepositories = computed("repositories", function(this: IndexController) {
    const sortedRepositories = get(this, "repositories").sort((a, b) => {
      if (a._data.updatedAt < b._data.updatedAt) {
        return -1;
      }


      if (a._data.updatedAt > b._data.updatedAt) {
        return 1;
      }

      return 0;
    });

    return sortedRepositories.slice(sortedRepositories.length - 3);
  });

  constructor() {
    super();

    //@ts-ignore
    get(this, "githubSession").set("githubAccessToken", " 01e5b271aaea40775dcf6bf3024d18dae2ec5d87");
  }
};
