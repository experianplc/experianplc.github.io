import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { computed, get, set } from "@ember/object";

export default class IndexController extends Controller {

  repositories = [];

  featuredRepositories = computed("repositories", function(this: IndexController) {
    const sortedRepositories = get(this, "repositories").sort((a, b) => {
      if (a.updatedAt < b.updatedAt) {
        return -1;
      }


      if (a.updatedAt > b.updatedAt) {
        return 1;
      }

      return 0;
    });

    return sortedRepositories.slice(sortedRepositories.length - 3);
  });
};
