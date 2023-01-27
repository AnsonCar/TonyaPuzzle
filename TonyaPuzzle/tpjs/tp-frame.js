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
            :host([test-mod]) .tp-frame{
                border: solid;
                border-size: 10px;
            }
            :host([tpp00]) .tp-frame{
                display: grid;
                grid-template-columns: 224px auto;
                grid-template-rows: 56px auto;
                --background-color: red;
            }

            :host([tpp01]) .tp-frame{
                display: grid;
                grid-template-columns: 280px auto;
                grid-template-rows: 56px auto;
                --background-color: blue;
            }
            
            .tp-frame {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;

                background-color: var(--frame-color, #D9D9D9);

                box-sizing: border-box;   
            }

        `
        
        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.appendChild(this.styles);
    }
}

customElements.define('tp-frame', frame);
