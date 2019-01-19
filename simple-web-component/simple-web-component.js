class SimpleWebComponent extends HTMLElement {

  constructor() {
    super();
  }

  // Called everytime when the element is inserted into the DOM.
  connectedCallback() {
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    const id = document.createElement('p');
    id.setAttribute('class', 'id');

    const taskId = this.getAttribute('userTaskId');
    id.textContent = taskId;

    const shadow = this.attachShadow({mode: 'open'});

    const style = document.createElement('style');
    style.textContent = '.wrapper {' +
                          'font-size: 20px;' +
                          'color: green;' +
                        '}';

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(id);
  }

  // Called evertime when the element is removed from the DOM.
  disconnectedCallback() {

  }

  // Called when an attribute is added, removed, updated or replaced.
  attributeChangedCallback(attributeName, oldValue, newValue) {

  }

  set userTaskId(value) {
    console.log(value)
    this.setAttribute('userTaskId', value);
  }

  get userTaskID() {
    return this.hasAttribute('userTaskId');
  }
}

// Declaring a new HTML tag here with the calss we created earlier.
window.customElements.define('simple-web-component', SimpleWebComponent);
