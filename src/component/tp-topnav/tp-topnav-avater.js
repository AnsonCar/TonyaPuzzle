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
                width: var(--avatar-width);
                height: var(--avatar-height);
                padding: 0;
                margin: 0;

                border-radius: 50%;

                background-color: var(--avatar-color);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav-avatar', avatar);