import { extend } from "lodash";

const template = document.createElement('template');
template.innerHTML = require('./todo-list.html');

export class TodoList extends HTMLElement {
	constructor() {
		super();

		// Add a shadow DOM
		const shadowDOM = this.attachShadow({ mode: 'open' });

		// Render the template in the shadow dom
		shadowDOM.appendChild(template.content.cloneNode(true));

		// Method binding
		this.addItem = this.addItem.bind(this);
	}

	// Called when the element is added to the DOM
	connectedCallback() {
		const button = this.shadowRoot.querySelector('button');
		button.onclick = this.addItem;
	}

	addItem() {
		// Get the input
		const input: any = this.shadowRoot.querySelector('#new-item');

		// Create a new list item
		const item = document.createElement('todo-list-item');
		item.innerHTML = input.value;

		// Add it to the light DOM
		this.appendChild(item);
	}
}