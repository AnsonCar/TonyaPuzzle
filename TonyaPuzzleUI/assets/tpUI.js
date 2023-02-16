(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tpp-frame">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=`
            /* To-B框架 */
            
            :host([ToB-00]) .tpp-frame {
                display: grid;
                grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
                grid-template-rows: var(--topnav-height) minmax(0, 1fr);
                
                grid-template-areas: 
                    var(--frame-template-areas,
                        'top top'
                        'side main'
                        );
            }

            :host([ToB-01]) .tpp-frame {
                display: grid;
                grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
                grid-template-rows: var(--topnav-height) minmax(0, 1fr);
            }
            
            :host([test-mod]) .tpp-frame{
                border: var(--test-mod);
            }

            .tpp-frame {
                width: var(--frame-width);
                height: var(--frame-height);
                margin: 0;
                padding: 0;
                // position: fixed;
                background-color: var(--frame-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-frame",r);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-topnav">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=`
            :host {
                grid-area: top;
                // grid-column: 1/4;
                // grid-row: 1/4;
            }
            
            :host .tp-topnav {
                display: flex;
                align-items: center;
            }
            
            :host([test-mod]) .tp-topnav {
                border: var(--test-mod);
            }
            
            .tp-topnav {
                width: var(--topnav-width);
                height: var(--topnav-height);
                padding: 0;
                margin: 0;

                background-color: var(--topnav-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-topnav",d);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-topnav-item">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=` 
            .tp-topnav-item {
                width: var(--topnav-item-width);
                height: var(--topnav-item-height);
                padding: var(--topnav-item-padding);
                margin: 0;

                background-color: var(--topnav-item-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-topnav-item",l);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-avatar">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=` 
            .tp-avatar {
                width: var(--avatar-width);
                height: var(--avatar-height);
                padding: 0;
                margin: 0;

                border-radius: 50%;

                background-color: var(--avatar-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-topnav-avatar",h);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-sidebar">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=`
            :host {
                grid-area: side;
                // grid-column: 1/2;
                // grid-row: 2/3;
            }

            :host .tp-sidebar {
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: center;
            }
            :host([test-mod]) .tp-sidebar {
                border: var(--test-mod);
            }

            .tp-sidebar {
                width: var(--sidebar-width);
                height: var(--sidebar-height);
                padding: 8px;
                margin: 0;

                overflow: auto;
                
                background-color: var(--sidebar-color);
                box-sizing: border-box;
            }

            :host([noScrollbar]) .tp-sidebar::-webkit-scrollbar {
                display:none;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-sidebar",m);let c=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-main">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=`
            :host {
                grid-area: main;
                // grid-column: 2/3;
                // grid-row: 2/3;
            }

            :host([grid]) .tp-main{
                display: grid;
                grid-template:  auto auto auto auto / auto auto auto auto;
                gap: 16px;
            }

            :host([test-mod]) .tp-main{
                border: var(--test-mod);
            }
            
            .tp-main {
                width: var(--main-width);
                height: var(--main-height);
                padding: var(--main-padding);
                margin: 0;
                
                background-color: var(--main-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}};customElements.define("tp-main",c);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-item-box">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=`
            :host([test-mod]) .tp-item-box{
                border: var(--test-mod);
            }

            .tp-item-box {
                width: var(--item-box-width);
                height: var(--item-box-height);
                margin: var(--item-box-margin);
                padding: 0;

                background-color: var(--item-box-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-item-box",p);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.template=document.createElement("template"),this.template.innerHTML=`
            <div class="tp-card">
                <slot></slot>
            </div>
        `,this.styles=document.createElement("style"),this.styles.innerHTML=`
            :host([test-mod]) .tp-card{
                border: var(--test-mod);
            }
            
            .tp-card {
                width: var(--card-widht);
                height: var(--card-height);
                padding: 0;
                margin: 0;

                background-color: var(--card-color);
                box-sizing: border-box;
            }
        `,this.shadowRoot.appendChild(this.template.content),this.shadowRoot.appendChild(this.styles)}}customElements.define("tp-card",u);
