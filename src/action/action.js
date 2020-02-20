import {ADD_TODO,REMOVE_TODO } from '../actionType'


export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
  dispatch(action)
}

