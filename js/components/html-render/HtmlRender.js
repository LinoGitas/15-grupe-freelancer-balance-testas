class HtmlRender {
    constructor( container, data) {
        this.container = container;
        this.data = data;
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

        const HTML = `
        <div class="table-row">
        <div class="cell">1</div>
        <div class="cell">${this.data.month}</div>
        <div class="cell">${icome}</div>
        <div class="cell">${expense} </div>
        <div class="cell">-</div>
        </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }
}

export default HtmlRender;