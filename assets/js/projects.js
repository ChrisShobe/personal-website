const template = document.createElement('template');
template.innerHTML = `
    <style>
        
    </style>
    <div class = "project1-container">
        test
    </div>
`;

class projects extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templeate.content.cloneNode(true));
    }
}

window.customElements.define('projects-component', projects);