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
        let icome = '-';
        if ( this.data.income ){
            icome = this.data.income + ` Eur`;
        }

        let expense = '-';
        if ( this.data.expense ){
            expense = this.data.expense + ` Eur`;
        }

        let month = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguzis', 
        'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Groudis'];

        const HTML = `
        <div class="table-row">
        <div class="cell">${this.cnt+1}</div>
        <div class="cell">${month[this.data.month-1]}</div>
        <div class="cell">${icome}</div>
        <div class="cell">${expense} </div>
        <div class="cell">-</div>
        </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }
}

export default HtmlRender;