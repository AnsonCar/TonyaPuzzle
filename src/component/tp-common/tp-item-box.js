class itembox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-item-box">
                <slot></slot>
            </div>
        `

        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host([test-mod]) .tp-item-box{
                border: var(--test-mod);
            }

            .tp-item-box {
                width: var(--item-box-width);
                height: var(--item-box-height);
                margin: var(--item-box-margin);
                padding: 0;

                background-color: var(--item-box-color);
                box-sizing: border-box;
            }
        `
        
        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-item-box', itembox);
