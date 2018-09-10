const base_url = process.env.REACT_APP_DEV_URL
export const getTodos = () =>{
    return fetch(base_url)
           .then(res=>res.json()).catch(function(e){
               console.log(e)
           })
}

export const createTodo = (name) =>{
    return fetch(base_url, {
        method: 'POST',
        headers: {
            'Accept':'Application/json',
            'Content-Type':'Application/json',
        },
        body: JSON.stringify({name:name, isComplete:false})
    })
           .then(res=>res.json()).catch(function(e){
               console.log(e)
           })
}

export const updateTodo = (todo) =>{
    return fetch(`${base_url}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept':'Application/json',
            'Content-Type':'Application/json',
        },
        body: JSON.stringify(todo)
    })
           .then(res=>res.json()).catch(function(e){
               console.log(e)
           })
}

export const destroyTodo = (id) =>{
    return fetch(`${base_url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept':'Application/json',
            'Content-Type':'Application/json',
        },
    })
}