class topnav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-topnav">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host {
                grid-area: top;
                // grid-column: 1/4;
                // grid-row: 1/4;
            }
            
            :host .tp-topnav {
                display: flex;
                align-items: center;
            }
            
            :host([test-mod]) .tp-topnav {
                border: var(--test-mod);
            }
            
            .tp-topnav {
                width: var(--topnav-width);
                height: var(--topnav-height);
                padding: 0;
                margin: 0;

                background-color: var(--topnav-color);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav', topnav);