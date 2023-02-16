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
                width: var(--topnav-item-width);
                height: var(--topnav-item-height);
                padding: var(--topnav-item-padding);
                margin: 0;

                background-color: var(--topnav-item-color);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav-item', topnavitem);