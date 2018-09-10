import {LOAD_TODOS, TODO_REPLACE, TODO_REMOVE}  from './todo'

const MESSAGE_SHOW = 'MESSAGE_SHOW';
export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg});
export default function(state='', action){

    switch(action.type){
        case MESSAGE_SHOW:
           return action.payload;
        case LOAD_TODOS:
        case TODO_REPLACE:
        case TODO_REMOVE:
           return '';
        default:
            return state;
    }
}