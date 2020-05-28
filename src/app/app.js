import { LitElement, html, css } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import TodoList from './components/todolist'
import TodoAdder from './components/todoAdder'
import BatchActions from './components/batchActions'

class AppComponent extends ScopedElementsMixin(LitElement) {

  constructor () {
    super()
  }

  static get scopedElements() { return {
    'todo-list': TodoList,
    'todo-adder': TodoAdder,
    'batch-actions': BatchActions
  }}

  static get styles() {
      return css`
        :host {
            width: 300px;
            display: block;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
        }
      `
  }

  render() {
    return html`
      <todo-adder></todo-adder>
      <todo-list></todo-list>
      <batch-actions></batch-actions>
    `
  }

}

customElements.define('app-component', AppComponent);
