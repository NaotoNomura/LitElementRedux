import { LitElement, html, css } from 'lit-element'
import { repeat } from 'lit-html/directives/repeat'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import Todo from './todo'
import connect from '../../lib/Connect.mixin'
import StateToPropsMixin from '../../lib/StateToProps.mixin'
import store from '../store/store'

function mapStateToProps (state) {
  return {
    todos: state.map(todo => todo.id)
  }
}

export default class TodoList extends StateToPropsMixin(mapStateToProps)(connect(store)(ScopedElementsMixin(LitElement))) {

  static get properties () { return {
    todos: Object
  }}

  static get scopedElements () { return {
    'todo-item': Todo
  }}

  static get styles () { return css`
    ul {
      padding: 10px;
    }
  `}

  render () {
    
    return html`
      <ul>
        ${repeat(this.todos, id => id,
          id => html`
            <todo-item .id="${id}"></todo-item>
          `)}
      </ul>
    `
  }

}
