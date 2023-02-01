class topnav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        let h = this.dataset.h;

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
            
            .tp-topnav {
                width: 100%;
                height: var(--topnav-height, 56px);
                
                display: flex;
                align-items: center;

                background-color: var(--topnav-color, #8C8C8C);
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav', topnav);