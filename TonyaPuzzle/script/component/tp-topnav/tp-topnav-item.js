class topnavitem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-topnav-item">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = ` 
            .tp-topnav-item {
                width: var(--topnav-width, 56px);
                height: var(--topnav-height, 56px);
                padding: 8px;
                margin: 0;

                // background-color: var(--topnav-item-color, #8C8C8C);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav-item', topnavitem);