import Route from "@ember/routing/route";
import { computed, get, set } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ReposRoute extends Route {

  github = service("github");

  model(this: ReposRoute) {
    return get(this, "github").repos();
  };

  setupController(this: ReposRoute, controller, model) {
    set(controller, "repositories", model);
  };

};
