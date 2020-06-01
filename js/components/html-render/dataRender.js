import HtmlRender from './HtmlRender.js';

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

        for ( let i=0; i<this.data.length; i++ ) {
            new HtmlRender(this.container, this.data[i], i);
        }


        const HTML2 = `
            <div class="item">
            <div id="minIncome" class="value">Mėnesio pavadinimas</div>
            <div class="title">Liepa, Vasaris, Birzelis 'mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui'</div>
        </div>
        <div class="item">
            <div class="value">Mėnesio pavadinimas</div>
            <div class="title">Rugsejis 'mėnuo, kai buvo daugiausiai uždirbta'</div>
        </div>
        <div class="item">
            <div class="value">Mėnesio pavadinimas</div>
            <div class="title">Lapkritis 'mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui'</div>
        </div>
        <div class="item">
            <div class="value">Mėnesio pavadinimas</div>
            <div class="title">Rugsejis 'mėnuo, kai buvo didžiausios išlaidos'</div>
        </div>`;

        this.container2.insertAdjacentHTML('beforeend', HTML2);
    }
}

export default DataRender;