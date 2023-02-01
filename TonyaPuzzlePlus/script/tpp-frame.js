class frame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="tpp-frame" id="">
                <slot></slot>
            </div>
        `;
        
        this.styles = document.createElement('style');
        this.styles.innerHTML = `
            :host .tpp-frame, * > *{
                position: fixed;
                box-sizing: border-box;

                font-family: Arial, Helvetica, sans-serif;
            }

            /* To-B框架 */
            :host([tppToB-00]) .tpp-frame{
                display: grid;
                grid-template-columns: 260px auto;
                grid-template-rows: 56px auto;

                grid-template-areas:
                'top top'
                'side main';
            }

            :host([test-mod]) .tpp-frame{
                border: 16px solid blue;
            }

            .tpp-frame {
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

customElements.define('tpp-frame', frame);