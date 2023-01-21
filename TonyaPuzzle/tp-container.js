// 創建 Custom Element
class gridContainer extends HTMLElement {
    constructor() {
        // 一定要先繼承
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        <style>
            /* 整體無邊界及填充 */
            * {
                margin: 0;
                padding: 0;
            }
            
            /* 整體 */
            /* Grid框架_排版用 */
            .tp-container {
                width: 100%;
                height: 100%;
            
                display: grid;
                grid-template-columns: 224px auto;
                grid-template-rows: 56px auto;
            
                /* 固定框架(topNav/sideBar/main) */
                position: fixed;
            
                font-family: Arial, Helvetica, sans-serif;
            
                background-color: red;
            }
        </style>

        <div class="tp-container">
            <slot></slot>
        </div>
        `
    }
}

customElements.define('container', gridContainer);