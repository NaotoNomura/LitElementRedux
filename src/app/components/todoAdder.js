import { LitElement, html, css } from 'lit-element'
import connect from '../../lib/Connect.mixin'
import store from '../store/store'
import { addTodo } from '../store/reducers/todoReducer'

export default class Todo extends connect(store)(LitElement) {
  constructor () {
    super()
    this.description = ""
  }

  add() {
    this.dispatch(addTodo(this.shadowRoot.querySelector('input').value))
  }

  render () {
    console.log(this.description)
    return html`
      <input type="text">
      <button @click=${this.add}>ADD</button>
    `
  }
}
