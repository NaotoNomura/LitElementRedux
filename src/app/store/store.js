import reducer from './reducers/todoReducer'
import { createStore } from 'redux'

const Store = createStore(reducer)

Store.dispatch({type: 'ADD_TODO', description: '1. Use connect state!'})
Store.dispatch({type: 'ADD_TODO', description: '2. Use connect state!'})
Store.dispatch({type: 'ADD_TODO', description: '3. Use connect state!'})

export default Store
