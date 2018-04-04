import Route from "@ember/routing/route";
import { computed, get } from "@ember/object";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {

  model(this: IndexRoute) {
    // TODO: This appears to be a bug in the Typescript definitions. Revisit this later.
    return this.get("store").query(("github-repository" as never), { user: "experianplc" }); // get repositories owned by user
  };

  setupController(controller, model) {
    controller.set("repositories", model.content);
  }

};
