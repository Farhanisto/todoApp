import {getTodos, createTodo,updateTodo,destroyTodo} from '../lib/todoServices'
import {showMessage} from './messages'

const inialState = {
    todos: [],
    currentTodo: ''
}

const CURRENT_CHANGE ='CURRENT_CHANGE';
const ADD_TODO = 'ADD_TODO';
export const LOAD_TODOS = 'LOAD_TODOS'
export const TODO_REPLACE = 'TODO_REPLACE';
export const  TODO_REMOVE ='TODO_REMOVE';

export const updateCurrent = (val) => ({type:CURRENT_CHANGE, payload:val});
export const loadTodos = (todos) => ({type:LOAD_TODOS, payload:todos});
export const addTodo = (todo)=>({type:ADD_TODO, payload:todo});
export const replaceTodo = (todo) => ({type:TODO_REPLACE, payload:todo});
export const removeTodo = (id) => ({type: TODO_REMOVE, payload:id});

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading'))
        getTodos().then(todos => dispatch(loadTodos(todos)));
    }
}
export const saveTodo = (name)=>{
    return (dispatch) =>{
        dispatch(showMessage('saving...'))
        createTodo(name)
        .then(res => dispatch(addTodo(res))).then(dispatch(showMessage('')))
    }
}

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('saving ...'));
        const {todos} = getState().todo;
        const todo = todos.find(t => t.id === id);
        console.log(todo)
        const toggled = {...todo, isComplete: !todo.isComplete};
        updateTodo(toggled).then(res => dispatch(replaceTodo(res)));

    }
}

export const deleteTodo = (id) => {

    return (dispatch)=> {
        dispatch(showMessage('deleting'));
        destroyTodo(id)
        .then((()=> dispatch(removeTodo(id))))
    }
}
export const getVisibleTodos = (todos, filter) => {

    switch(filter){
        case 'completed':
          return todos.filter(t => t.isComplete===true)
        case 'uncompleted':
          return todos.filter(t => t.isComplete===false)
        default:
          return todos
    }
}
export default (state = inialState, action) => {
  switch(action.type){
      case ADD_TODO:
        return {...state,currentTodo:'', todos: state.todos.concat(action.payload)}
      case LOAD_TODOS:
         return{...state, todos:action.payload}
      case CURRENT_CHANGE:
        return {...state, currentTodo:action.payload}
      case TODO_REPLACE:
          return {...state,todos: state.todos.map(t => t.id === action.payload.id ? action.payload : t)};
      case TODO_REMOVE:
          return {...state, todos: state.todos.filter(t => t.id !== action.payload)};
      default:
        return state
  }
}