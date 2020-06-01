class HtmlRender {
    constructor( container, data, cnt) {
        this.container = container;
        this.data = data;
        this.cnt = cnt;
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        let income = 0;
        if ( this.data.income ){
            income = this.data.income;
        }

        let expense = 0;
        if ( this.data.expense ){
            expense = this.data.expense;
        }

        let month = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguzis', 
        'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Groudis'];

        const HTML = `
        <div class="table-row">
        <div class="cell">${this.cnt+1}</div>
        <div class="cell">${month[this.data.month-1]}</div>
        <div class="cell">${income} Eur</div>
        <div class="cell">${expense} Eur</div>
        <div class="cell">${Math.abs(income-expense)} Eur</div>
        </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }
}

export default HtmlRender;