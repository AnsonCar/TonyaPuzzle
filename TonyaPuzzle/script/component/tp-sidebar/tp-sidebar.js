class sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-sidebar">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host {
                grid-area: side;
                // grid-column: 1/2;
                // grid-row: 2/3;
            }

            :host .tp-sidebar {
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: center;
            }
            :host([test-mod]) .tp-sidebar {
                border: var(--test-mod);
            }

            .tp-sidebar {
                width: var(--sidebar-width);
                height: var(--sidebar-height);
                padding: 8px;
                margin: 0;

                overflow: auto;
                
                background-color: var(--sidebar-color);
                box-sizing: border-box;
            }

            :host([noScrollbar]) .tp-sidebar::-webkit-scrollbar {
                display:none;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-sidebar', sidebar);