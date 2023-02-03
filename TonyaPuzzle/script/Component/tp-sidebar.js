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
            }

            :host([test-mod]) .tp-sidebar {
                border: var(--test-mod,12px solid red);
            }

            .tp-sidebar {
                width: var(--sidebar-width, 256px);
                height: var(--sidebar-height, 100%);
                padding: 0;
                margin: 0;

                background-color: var(--sidebar-color, #bebebe);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-sidebar', sidebar);