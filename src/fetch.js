import React from 'react';
import './App.css';
import App, {Todolist , addTodo} from './App'


function App2 () {
fetch('https:reqres.in/api/users',{
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name: "user 1"

    })
})
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

}




export default App2 ;