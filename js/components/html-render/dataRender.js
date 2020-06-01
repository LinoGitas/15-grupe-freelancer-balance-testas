class DataRender {
    constructor( selector, selector2, data) {
        this.selector = selector;
        this.selector2 = selector2;
        this.container = null;
        this.data = data;
        this.init();
    }

    init() {  

        this.container = document.querySelector(this.selector);
        this.container2 = document.querySelector(this.selector2);
        
        if ( !this.container ) {
            console.error(`Container not exists!` );
            return false;
        }

        this.render();
    }

    render() {
        if ( !Array.isArray(this.data) ) {
            console.error('ERROR: duomenys turi buti array tipo!');
        }

        let max = 0;
        let min = Infinity;

        let minIncome = min;
        let maxIncome = max;
        let minIncomeMonth = '';
        let maxIncomeMonth = '';

        let minExpense = min;
        let maxExpense = max;
        let minExpenseMonth = '';
        let maxExpenseMonth = '';

        let month = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguzis', 
        'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Groudis'];

        for ( let i=0; i<this.data.length; i++ ) {

            
            let income = this.data[i].income;
            let expense = this.data[i].expense;
            let months = month[(this.data[i].month-1)];
            
            let incomeRes = 0;
            if ( income ){
                incomeRes = income;
            }

            let expenseRes = 0;
            if ( expense ){
                expenseRes = expense;
            }
    
            const HTML = `
            <div class="table-row">
            <div class="cell">${i+1}</div>
            <div class="cell">${months}</div>
            <div class="cell">${incomeRes} Eur</div>
            <div class="cell">${expenseRes} Eur</div>
            <div class="cell">${Math.abs(incomeRes-expenseRes)} Eur</div>
            </div>`;
            this.container.insertAdjacentHTML('beforeend', HTML);

            if ( incomeRes > 0 && incomeRes < minIncome ) { 
                minIncome = incomeRes;
                minIncomeMonth = months;
            }

           if ( incomeRes > 0 && incomeRes > maxIncome) { 
                maxIncome = incomeRes;
                maxIncomeMonth = months;
            }

            if ( expenseRes > 0 && expenseRes < minExpense ) { 
                minExpense = expenseRes;
                minExpenseMonth = months;
            }

            if ( expenseRes > 0 && expenseRes > maxExpense ) { 
                maxExpense = expenseRes;
                maxExpenseMonth = months;        
            }
        }

        const HTML2 = `
            <div class="item">
                <div id="minIncome" class="value">Mėnesio pavadinimas</div>
                <div class="title"> <b>${minIncomeMonth}</b></div>
            </div>
            <div class="item">
                <div class="value">Mėnesio pavadinimas</div>
                <div class="title"> <b>${maxIncomeMonth}</b></div>
            </div>
            <div class="item">
                <div class="value">Mėnesio pavadinimas</div>
                <div class="title"><b>${minExpenseMonth}</b> 'mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui'</div>
            </div>
            <div class="item">
                <div class="value">Mėnesio pavadinimas</div>
                <div class="title"><b>${maxExpenseMonth}</b> 'mėnuo, kai buvo didžiausios išlaidos'</div>
            </div>`;

        this.container2.insertAdjacentHTML('beforeend', HTML2);
    }
}

export default DataRender;