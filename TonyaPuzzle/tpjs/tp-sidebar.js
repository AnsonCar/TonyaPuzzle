class sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log("成功引入sidebar");
    }

    connectedCallback() {
        console.log('成功引入sidebar_connected')
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-sidebar">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
        :host {
            grid-column: 1;
            gird-row: 2;
        }
            .tp-sidebar {
                width: 100%;
                height: 100%;
                background-color: var(--sidebar-color, #bebebe);
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-sidebar', sidebar);