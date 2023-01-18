// 創建 Custom Element
class topbar extends HTMLElement{
    constructor() {
         // 一定要先繼承
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML = `
        <style>
            .tp-topbar{
                position: fixed;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 50px;
                opacity: 1;
            
                background: #15439F;
            
                backdrop-filter: blur(60px);
                box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.16), inset 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
                
                color: white; /* 文字用，未來會改 */
            }
        </style>
        <div class="tp-topbar">
            <slot></slot>
        </div>
        `
    }
}

customElements.define('tp-topbar', topbar);