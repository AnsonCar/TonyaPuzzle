// 創建 Custom Element
class topnav extends HTMLElement {
    constructor() {
        // 一定要先繼承
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            .topnav {
                width: 100px;
                height: 100px;
                background-color: red;
            }
        </style>
        <div class="tp-topnav">
            <slot></slot>
        </div>
        `
    }
}

customElements.define('tp-topnav', topnav);