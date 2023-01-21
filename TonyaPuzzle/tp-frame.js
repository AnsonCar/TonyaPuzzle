class frame01 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            .tp-frame01{
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                
                display: grid;
                grid-template-columns: 224px auto;
                grid-template-rows: 56px auto;

                border: solid;
                border-size: 10px;

                background-color: red;

                box-sizing: border-box;
            }

            .tp-frame01 > *{
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>
        
        <div class="tp-frame01">
            
        </div>
        `
    }
}

customElements.define('tp-frame01', frame01);

class frame02 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            .tp-frame02{
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                
                display: grid;
                grid-template-columns: 280px auto;
                grid-template-rows: 56px auto;

                border: solid;
                border-size: 10px;

                background-color: blue;

                box-sizing: border-box;
            }

            .tp-frame02 > *{
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }

            tp-topnav {
                grid-column: 2/3;
                background-color: #ffffff;
            }

        </style>
        
        <div class="tp-frame02">
            <slot>
            </slot>
        </div>
        `
    }
}

customElements.define('tp-frame02', frame02,);