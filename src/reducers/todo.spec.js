import reducer from './todo';

describe('Todo Reducer', () =>{
  test('returns a state object',()=>{
      const result = reducer(undefined, {type: 'ANYTHING'});
      expect(result).toBeDefined();
  });
  test('Adds A Todo',() => {
    const startState = {
        todos: [
            {id:1, name:'create statit UI', isComplete:true},
            {id:2, name:'create Initial State', isComplete:true},
            {id:3, name:'Use state as to render UI', isComplete:true},
        ]
    }
    const expectedState = {
        currentTodo:'',
        todos: [
            {id:1, name:'create statit UI', isComplete:true},
            {id:2, name:'create Initial State', isComplete:true},
            {id:3, name:'Use state as to render UI', isComplete:true},
            {id:4, name:'Added todo', isComplete:false,}
        ]
    }
    const action = {type: 'ADD_TODO', payload: {id:4, name: 'Added todo', isComplete:false}}
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
})