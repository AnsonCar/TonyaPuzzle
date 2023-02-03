class frame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tpp-frame">
                <slot></slot>
            </div>
        `;
        
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            /* To-B框架 */
            :host([ToB-00]) .tpp-frame {
                display: grid;
                grid-template-columns: var(--sidebar-width,260px) auto;
                grid-template-rows: var(--topnav-height,56px) auto;

                grid-template-areas: 
                    var(--frame-template-areas,
                        'top top'
                        'side main'
                        );
            }

            :host([test-mod]) .tpp-frame{
                border: var(--test-mod,12px solid red);
            }

            .tpp-frame {
                width: var(--frame-width,100%);
                height: var(--frame-height,100%);
                margin: 0;
                padding: 0;

                background-color: var(--frame-color, #ffffff);
                box-sizing: border-box;
            }
        `
        
        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tpp-frame', frame);
