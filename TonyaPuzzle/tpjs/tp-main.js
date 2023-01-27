class main extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-main">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host {
                grid-area: main;
            }

            :host([flex]) .tp-main{
                display: flex;
                flex-flow: row wrap;

                overflow-y: auto;
            }

            :host([grid]) .tp-main{
                padding: 16px;

                display: grid;
                grid-template-columns: repeat(4, auto);
                grid-template-rows: repeat(4, auto);
                gap: 16px;
            }

            :host([test-mod]) .tp-main{
                border: 16px solid red;
            }
            
            .tp-main {
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;

                box-sizing: border-box;
                background-color: var(--main-color, #D9D9D9);
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-main', main);