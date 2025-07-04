import {NavUtils} from "../../utils/nav-utils";

export class ExpensesView {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.categories();
    }

    categories() {
        NavUtils.categories();
    }
}