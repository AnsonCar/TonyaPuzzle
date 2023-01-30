class frame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tp-frame">
                <slot></slot>
            </div>
        `;
        
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host .tp-frame, * > *{
                position: fixed;
                box-sizing: border-box;

                font-family: Arial, Helvetica, sans-serif;
            }

            /* To-B框架 */
            :host([tppToB-00]) .tp-frame{
                display: grid;
                grid-template-columns: 224px auto;
                grid-template-rows: 56px auto;

                grid-template-areas:
                'top top'
                'side main';
            }

            :host([tppToB-01]) .tp-frame{
                display: grid;
                grid-template-columns: 280px auto;
                grid-template-rows: 60px auto ;

                grid-template-areas:
                'side top'
                'side main';
                
                --sidebar-width:280px;
                --topnav-height:60px;
            }

            :host([test-mod]) .tp-frame{
                border: 16px solid blue;
            }

            .tp-frame {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;

                background-color: var(--frame-color, #ffffff);
            }
        `
        
        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-frame', frame);