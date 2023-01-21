class topnav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            .tp-topnav {
                width: 100%;
                height: 100%;
                background-color: #8C8C8C;
            }
        </style>

        <div class="tp-topnav">

        </div>
        `
    }
}

customElements.define('tp-topnav', topnav);