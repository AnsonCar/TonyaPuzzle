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
                // grid-column: 2/3;
                // grid-row: 2/3;
            }

            :host([grid]) .tp-main{
                display: grid;
                grid-template:  auto auto auto auto / auto auto auto auto;
                gap: 16px;
            }

            :host .tp-main{
                display: flex;
            }

            :host([test-mod]) .tp-main{
                border: var(--test-mod);
            }
            
            .tp-main {
                width: var(--main-width);
                height: var(--main-height);
                padding: var(--main-padding);
                margin: 0;
                
                background-color: var(--main-color);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-main', main);