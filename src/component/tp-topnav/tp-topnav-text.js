class topnavtext extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-topnav-text">
                <slot></slot>
            </div>
        `
        this.styles = document.createElement('style');
        this.styles.innerHTML = ` 

            .tp-topnav-text {    
                width: var(--topnav-text-width);
                height: var(--topnav-text-height);
                padding: var(--topnav-text-padding);  
                margin: 0;

                font-size: var(--topnav-text-text-size);
                color: var(--topnav-text-text-color);
                background-color: var(--topnav-text-color);
                box-sizing: border-box;
            }
        `

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-topnav-text', topnavtext);