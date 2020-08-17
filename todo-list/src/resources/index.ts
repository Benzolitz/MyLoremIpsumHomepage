import { FrameworkConfiguration } from 'aurelia-framework';

import { TodoList } from './components/todo-list';
import { TodoListItem } from './components/todo-list-item';

export function configure(config: FrameworkConfiguration) {
  // config.globalResources([]);
}

customElements.define('todo-list', TodoList);
customElements.define('todo-list-item', TodoListItem);