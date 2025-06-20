import {Chart} from "chart.js/auto";

export class Dashboard {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.chartPie();
    }

    chartPie() {
        // INCOMES CHART
        const incomesChart = $("#chart-incomes");
        new Chart(incomesChart, {
            type: 'pie',
            data: {
                labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
                datasets: [{
                    data: [1500, 1700, 500, 400, 300],
                    backgroundColor: ["#DC3545", "#FD7E14", "#FFC107", "#20C997", '#0D6EFD'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                radius: 150,
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 30,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });

        // EXPENSES CHART
        const expensesChart = $("#chart-expenses");
        new Chart(expensesChart, {
            type: 'pie',
            data: {
                labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
                datasets: [{
                    data: [200, 400, 1400, 1500, 600],
                    backgroundColor: ["#DC3545", "#FD7E14", "#FFC107", "#20C997", '#0D6EFD'],
                }]
            },
            options: {
                responsive: true,
                radius: 150,
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 30,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }
}