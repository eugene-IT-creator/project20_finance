import {IncomesView} from "./components/incomes/incomes-view";
import {IncomesCreate} from "./components/incomes/incomes-create";
import {IncomesEdit} from "./components/incomes/incomes-edit";
import {ExpensesEdit} from "./components/expenses/expenses-edit";
import {ExpensesView} from "./components/expenses/expenses-view";
import {ExpensesCreate} from "./components/expenses/expenses-create";
import {IncomesExpensesEdit} from "./components/incomes-expenses/incomes-expenses-edit";
import {IncomesExpensesView} from "./components/incomes-expenses/incomes-expenses-view";
import {IncomesExpensesCreate} from "./components/incomes-expenses/incomes-expenses-create";
import {Login} from "./components/auth/login";
import {SignUp} from "./components/auth/sign-up";
import {Dashboard} from "./components/dashboard";
import {AuthUtils} from "./utils/auth-utils";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');

        this.userName = null;
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
                styles: ['icheck-bootstrap.min.css']

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
                    new Dashboard(this.openNewRoute.bind(this));
                },
                scripts: ['chart.js']
            },
            {
                route: '/incomes-view',
                title: 'Incomes',
                filePathTemplate: '/templates/incomes/incomes-view.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesView(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/incomes/create',
                title: 'Create an income category',
                filePathTemplate: '/templates/incomes/create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/incomes/edit',
                title: 'Edit income category',
                filePathTemplate: '/templates/incomes/edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesEdit(this.openNewRoute.bind(this));
                },
            },
            {
                route: '/expenses-view',
                title: 'Create an expense category',
                filePathTemplate: '/templates/expenses/expenses-view.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesView(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/expenses/create',
                title: 'Create expense category',
                filePathTemplate: '/templates/expenses/create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/expenses/edit',
                title: 'Edit expense category',
                filePathTemplate: '/templates/expenses/edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesEdit(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/incomes-expenses',
                title: 'Incomes & Expenses',
                filePathTemplate: '/templates/incomes-expenses/incomes-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesExpensesView(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/incomes-expenses/create',
                title: 'Create income/expense',
                filePathTemplate: '/templates/incomes-expenses/create.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesExpensesCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/incomes-expenses/edit',
                title: 'Edit income/expense',
                filePathTemplate: '/templates/incomes-expenses/edit.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomesExpensesEdit(this.openNewRoute.bind(this));
                }
            },
        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        window.addEventListener('popstate', this.activateRoute.bind(this));

        document.addEventListener('click', this.clickHandler.bind(this));

    }

    async openNewRoute(url) {
        const currentRoute = window.location.pathname;
        history.pushState({}, '', url);
        await this.activateRoute(null, currentRoute);
    }

    async clickHandler(e) {
        let element = null;
        if (e.target.nodeName === 'A') {
            element = e.target;
        } else if (e.target.parentElement.nodeName === 'A') {
            element = e.target.parentNode;
        }
        if (element) {
            e.preventDefault();
            const currentRoute = window.location.pathname;
            // Заменяем ссылку с localhost:9000, чтобы оставалось только название самой страницы
            const url = element.href.replace(window.location.origin, '');
            // Переход на другую страницу
            if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {
                return;
            }
            await this.openNewRoute(url);
        }
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
            let contentBlock = this.contentPageElement
            if (newRoute.useLayout) {
                this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());
                contentBlock = document.getElementById('content-layout');


                // Вставить имя и фамилию администратора
                this.profileNameElement = document.getElementById('profile-name');
                if (!this.userName) {
                    let userInfo = AuthUtils.getAuthInfo(AuthUtils.userInfoTokenKey);
                    if (userInfo) {
                        userInfo = JSON.parse(userInfo);
                        if (userInfo && userInfo.name) {
                            this.userName = userInfo.name;
                        }
                    }
                }
                // Нет лишнего парсинга при переходах на другие страницы
                this.profileNameElement.innerText = this.userName;

                // Чтобы при переходе на другую страницу она подсвечивалась в меню
                this.activateMenuItem(newRoute);
            }

            contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
        }

        // Загружаются компоненты страниц
        if (newRoute.load && typeof newRoute.load === 'function') {
            newRoute.load();
        }
    }

    activateMenuItem(route) {
        document.querySelectorAll('.layout-menu .nav-link').forEach(item => {
            const href = item.getAttribute('href');
            if ((route.route.includes(href) && href !== '/') || (route.route === '/' && href === '/')) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
                item.style.color = '#052C65';
            }
        })
    }
}