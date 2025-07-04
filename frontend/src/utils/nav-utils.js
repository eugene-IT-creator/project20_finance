export class NavUtils {
    static categories() {
        let navItemLast = document.getElementById('nav-item-last');
        navItemLast.style.border = '1px solid #0D6EFD';
        navItemLast.style.borderRadius = '10px';

        let cat = document.getElementById('cat-btn');
        cat.ariaExpanded = true;
        cat.classList.add('active');
        cat.style.color = 'white';
        cat.style.borderBottomLeftRadius = '0'
        cat.style.borderBottomRightRadius = '0'

        let navItemCollapse = document.getElementById('categories-collapse');
        navItemCollapse.classList.remove('collapse');

        let navLinkIncomes = document.getElementById('nav-link-incomes');
        let navLinkExpenses = document.getElementById('nav-link-expenses');

        navLinkIncomes.style.borderRadius = '0';

        navLinkExpenses.style.borderTopLeftRadius = '0';
        navLinkExpenses.style.borderTopRightRadius = '0';
        navLinkExpenses.style.borderBottomLeftRadius = '8px';
        navLinkExpenses.style.borderBottomRightRadius = '8px';

    }

}