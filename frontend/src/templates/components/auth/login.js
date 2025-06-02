export class Login {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        console.log('LOGIN');

        this.findElements();
    }

    findElements() {
        this.emailElement = document.getElementById("email");
        this.passwordElement = document.getElementById("password");
        this.rememberMeElement = document.getElementById("remember-me");
        this.commonErrorElement = document.getElementById("common-error");
    }
}