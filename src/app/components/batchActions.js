import { LitElement, html, css } from 'lit-element'
import connect from '../../lib/Connect.mixin'
import StateToPropsMixin from '../../lib/StateToProps.mixin'
import store from '../store/store'
import { markAllAsCompleted, markAllAsNotCompleted, deleteCompleted, deleteAll } from '../store/reducers/todoReducer'

export default class BatchAction extends connect(store)(LitElement) {
  
  static get properties() { return {
    description: String,
    id: Number,
    completed: Boolean
  }}

  static get styles () { return css`
    div {
      width: 100%;
      max-width: 300px;
      display: grid;
      grid-template: 1fr 1fr / 1fr 1fr;
    }
  `}

  allCompleted () {
    this.dispatch(markAllAsCompleted())
  }

  allNotCompleted () {
    this.dispatch(markAllAsNotCompleted())
  }

  deleteCompleted () {
    this.dispatch(deleteCompleted())
  }

  deleteAll () {
    this.dispatch(deleteAll())
  }

  render () {
    return html`
      <div>
        <button @click="${this.allCompleted}">Mark all as completed</button>
        <button @click="${this.allNotCompleted}">Mark all as not completed</button>
        <button @click="${this.deleteCompleted}">Delete completed</button>
        <button @click="${this.deleteAll}">Delete all</button>
      </div>
    `
  }
}
