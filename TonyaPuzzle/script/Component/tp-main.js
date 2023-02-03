class main extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-main">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host {
                grid-area: main;
            }

            :host([grid]) .tp-main{
                display: grid;
                grid-template:  auto auto auto auto / auto auto auto auto;
                gap: 16px;
            }

            :host([test-mod]) .tp-main{
                border: var(--test-mod,12px solid red);
            }
            
            .tp-main {
                width: var(--main-width,100%);
                height: var(--main-height,100%);
                padding: var(--main-padding,8px);
                margin: 0;

                background-color: var(--main-color, #D9D9D9);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-main', main);