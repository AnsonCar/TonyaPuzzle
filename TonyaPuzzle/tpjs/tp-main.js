class main extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log("成功引入main");
    }

    connectedCallback() {
        console.log('成功引入main_connected')
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-main">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host .tp-main{
                grid-column: 2;
                gird-row: 2;
            }
            .tp-main {
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 8px;
                box-sizing: border-box;
                background-color: var(--main-color, red);
                overflow: auto;
            }

        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-main', main);