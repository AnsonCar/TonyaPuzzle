class avatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-avatar">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = ` 
            .tp-avatar {
                width: var(--avatar-width, 40px);
                height: var(--avatar-height, 40px);
                padding: 0;
                margin: 0px;

                border-radius: 50%;

                background-color: var(--avatar-color, #8C8C8C);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-avatar', avatar);