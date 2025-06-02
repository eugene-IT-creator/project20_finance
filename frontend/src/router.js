import {IncomesView} from "./templates/components/incomes/incomes-view";
import {IncomesCreate} from "./templates/components/incomes/incomes-create";
import {IncomesEdit} from "./templates/components/incomes/incomes-edit";
import {ExpensesEdit} from "./templates/components/expenses/expenses-edit";
import {ExpensesView} from "./templates/components/expenses/expenses-view";
import {ExpensesCreate} from "./templates/components/expenses/expenses-create";
import {IncomesExpensesEdit} from "./templates/components/incomes-expenses/incomes-expenses-edit";
import {IncomesExpensesView} from "./templates/components/incomes-expenses/incomes-expenses-view";
import {IncomesExpensesCreate} from "./templates/components/incomes-expenses/incomes-expenses-create";
import {Login} from "./templates/components/auth/login";
import {SignUp} from "./templates/components/auth/sign-up";
import {Dashboard} from "./templates/components/dashboard";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');

        this.initEvents();

        this.routes = [
            {
                route: '/login',
                title: 'Login',
                filePathTemplate: '/templates/auth/login.html',
                useLayout: false,
                load: () => {
                    new Login();
                },
                styles: ['bootstrap.min.css'],
                scripts: ['jquery.min.js', 'bootstrap.min.js']
            },
            {
                route: '/sign-up',
                title: 'Registration',
                filePathTemplate: '/templates/auth/sign-up.html',
                useLayout: false,
                load: () => {
                    new SignUp();
                }
            },
            {
                route: '/',
                title: 'Dashboard',
                filePathTemplate: '/templates/dashboard.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new Dashboard();
                }
            },
            {
                route: '/incomes',
                title: 'Incomes',
                filePathTemplate: '/templates/incomes/incomes.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesView();
                }
            },
            {
                route: '/incomes/create',
                title: 'Create an income category',
                filePathTemplate: '/templates/incomes/create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesCreate();
                }
            },
            {
                route: '/incomes/edit',
                title: 'Edit income category',
                filePathTemplate: '/templates/incomes/edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesEdit();

                }
            },
            {
                route: '/expenses',
                title: 'Create an expense category',
                filePathTemplate: '/templates/expenses/expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesView();
                }
            },
            {
                route: '/expenses/create',
                title: 'Create expense category',
                filePathTemplate: '/templates/expenses/create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesCreate();
                }
            },
            {
                route: '/expenses/edit',
                title: 'Edit expense category',
                filePathTemplate: '/templates/expenses/edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesEdit();
                }
            },
            {
                route: '/incomes-expenses',
                title: 'Incomes & Expenses',
                filePathTemplate: '/templates/incomes-expenses/incomes-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesExpensesView();
                }
            },
            {
                route: '/incomes-expenses/create',
                title: 'Create income/expense',
                filePathTemplate: '/templates/incomes-expenses/create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesExpensesCreate();
                }
            },
            {
                route: '/incomes-expenses/edit',
                title: 'Edit income/expense',
                filePathTemplate: '/templates/incomes-expenses/edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesExpensesEdit();
                }
            },
        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        window.addEventListener('popstate', this.activateRoute.bind(this));
    }

    async activateRoute() {
        // Что находится в url-адресе и где находится пользователь
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        // Вставляется нужный заголовок страницы
        if (newRoute.title) {
            this.titlePageElement.innerText = newRoute.title + ' | Lumincoin Finance';
        }

        if (newRoute.filePathTemplate) {
                this.contentPageElement.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
        }

        // Загружаются компоненты страниц
        if (newRoute.load && typeof newRoute.load === 'function') {
            newRoute.load();
        }
    }
}