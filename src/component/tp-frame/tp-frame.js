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
        `
        
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            /* To-B框架 */
            
            :host([ToB-00]) .tp-frame {
                display: grid;
                grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
                grid-template-rows: var(--topnav-height) minmax(0, 1fr);
                
                grid-template-areas: 
                    var(--frame-template-areas,
                        'top top'
                        'side main'
                        );
            }

            :host([ToB-01]) .tp-frame {
                display: grid;
                grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
                grid-template-rows: var(--topnav-height) minmax(0, 1fr);
            }
            
            :host([test-mod]) .tp-frame{
                border: var(--test-mod);
            }

            .tp-frame {
                min-width: var(--frame-min-width);
                width: var(--frame-width);
                height: var(--frame-height);
                margin: 0;
                padding: 0;
                // position: fixed;
                background-color: var(--frame-color);
                box-sizing: border-box;
            }
        `
        
        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-frame', frame);
