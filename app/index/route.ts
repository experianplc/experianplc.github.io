import Route from "@ember/routing/route";
import { get, set } from "@ember/object";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {

  github = service("github");

  model(this: IndexRoute) {
    return get(this, "github").repos();
  };

  setupController(this: IndexRoute, controller, model) {
    set(controller, "repositories", model);
  };

};
