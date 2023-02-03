class usericon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-usericon">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = ` 
            .tp-userion {
                width: var(--usericon-width, 40px);
                height: var(--usericon-height, 40px);
                padding: 0;
                margin: 0;

                border-radius: 50%;

                background-color: var(--usericon-color, #8C8C8C);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-usericon', usericon);