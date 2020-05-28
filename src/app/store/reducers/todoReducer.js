import { nanoid } from 'nanoid'

const initialState = []

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const MARK_ALL_AS_COMPLETED = 'MARK_ALL_AS_COMPLETED'
const MARK_ALL_AS_NOT_COMPLETED = 'MARK_ALL_AS_NOT_COMPLETED'
const DELETE_COMPLETED = 'DELETE_COMPLETED'
const DELETE_ALL = 'DELETE_ALL'

export function markAllAsCompleted() {
  return {
    type: MARK_ALL_AS_COMPLETED
  }
}

export function markAllAsNotCompleted() {
  return {
    type: MARK_ALL_AS_NOT_COMPLETED
  }
}

export function deleteCompleted() {
  return {
    type: DELETE_COMPLETED
  }
}

export function deleteAll() {
  return {
    type: DELETE_ALL
  }
}

export function addTodo(description) {
  return {
    type: ADD_TODO,
    description
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}


export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: return [...state, {
      id: nanoid(),
      completed: false,
      description: action.description
    }]

    case TOGGLE_TODO: 
      return state.map(todo => action.id == todo.id ? { ...todo, completed: !todo.completed } : todo)

    case DELETE_TODO:
      return state.filter(todo => action.id != todo.id)
    
    case MARK_ALL_AS_COMPLETED:
      return state.map(el => ({...el, completed: true}))
    
    case MARK_ALL_AS_NOT_COMPLETED:
      return state.map(el => ({...el, completed: false}))
    
    case DELETE_COMPLETED:
      return state.filter(el => el.completed != true)
    
    case DELETE_ALL:
      return []
    
    default: return state

  }
}
