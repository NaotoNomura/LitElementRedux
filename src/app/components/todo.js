import { LitElement, html, css } from 'lit-element'
import connect from '../../lib/Connect.mixin'
import StateToPropsMixin from '../../lib/StateToProps.mixin'
import store from '../store/store'
import { toggleTodo, deleteTodo } from '../store/reducers/todoReducer'

function mapStateToProps(state) {
  const todo = state.find((element) => element.id == this.id)
  if (todo) { 
    return {
      description: todo.description || '[no description]',
      completed: todo.completed,
      greyed: !todo.description
    }
  }
} 
  
export default class Todo extends StateToPropsMixin(mapStateToProps)(connect(store)(LitElement)) {
  
  static get properties() { return {
    description: String,
    id: Number,
    completed: Boolean,
    greyed: Boolean
  }}

  static get styles () { return css`
    li {
      list-style: none;
    }
    span.greyed {
      color: grey;
    }
  `}

  toggle (event) {
    this.dispatch(toggleTodo(this.id))
    event.preventDefault()
  }

  delete () {
    this.dispatch(deleteTodo(this.id))
  }

  render () {
    return html`
      <li>
        ${this.completed ?
          html`<input type="checkbox" @click="${this.toggle}" checked>` :
          html`<input type="checkbox" @click="${this.toggle}">`
        }
        <span class="${this.greyed ? 'greyed' : ''}">${this.description}</span>
        <button @click="${this.delete}">X</button>
      </li>
    `
  }
}
