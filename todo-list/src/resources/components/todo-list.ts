import { autoinject } from 'aurelia-framework';

import { HttpClient } from 'aurelia-fetch-client';

const template = document.createElement('template');
template.innerHTML = require('./todo-list.html');

@autoinject // Doesn't do anything
export class TodoList extends HTMLElement {

	private httpClient: HttpClient;

	constructor(p_httpClient: HttpClient) {
		super();

		this.httpClient = p_httpClient;

		const shadowDOM = this.attachShadow({ mode: 'open' });
		shadowDOM.appendChild(template.content.cloneNode(true));
		this.addItem = this.addItem.bind(this);
	}

	connectedCallback() {
		const button = this.shadowRoot.querySelector('button');
		button.onclick = this.addItem;
	}

	addItem() {
		const input: any = this.shadowRoot.querySelector('#new-item');

		const item = document.createElement('todo-list-item');
		item.innerHTML = input.value;

		this.appendChild(item);
	}

	// Won't get called
	loadItems() {
		console.log('loadItems');
		this.httpClient.fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => console.log(json))
	}
}