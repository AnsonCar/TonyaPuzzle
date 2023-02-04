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
            }
            
            :host .tp-topnav {
                display: flex;
                align-items: center;
            }
            
            :host([test-mod]) .tp-topnav {
                border: var(--test-mod,12px solid red);
            }

            .tp-topnav {
                width: var(--topnav-width, 100%);
                height: var(--topnav-height, 56px);
                padding: 0;
                margin: 0;

                background-color: var(--topnav-color, #8C8C8C);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav', topnav);