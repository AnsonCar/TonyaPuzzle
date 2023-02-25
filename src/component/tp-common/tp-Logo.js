class Logo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-logo">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = ` 
            :host([L]) .tp-logo {
                display: flex;
                align-items: center;
                flex-flow: row nowrap; 
                justify-content: flex-end;
            }

            :host([R]) .tp-logo {
                display: flex;
                align-items: center;
                flex-flow: row nowrap; 
                justify-content: flex-start;
            }

            :host([C]) .tp-logo {
                display: flex;
                align-items: center;
                flex-flow: row nowrap; 
                justify-content: center;
            }

            :host([sb]) .tp-logo {
                display: flex;
                align-items: center;
                flex-flow: row nowrap; 
                justify-content: space-between;
            }

            .tp-logo {      
                width: var(--Logo-width);
                height: var(--Logo-height);
                padding: var(--Logo-padding);
                margin: 0;

                font-size: var(--Logo-text-size);
                color: var(--Logo-text-color);
                background-color: var(--Logo-color);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-logo', Logo);