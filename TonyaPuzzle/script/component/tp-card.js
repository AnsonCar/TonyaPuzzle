class card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-card">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host([test-mod]) .tp-card{
                border: 12px solid red;
            }
            
            .tp-card {
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;

                background-color: var(--card-color, #D9D9D9);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-card', card);