import {NavUtils} from "../../utils/nav-utils";

export class IncomesView {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.categories();
    }

    categories() {
        NavUtils.categories();
    }
}