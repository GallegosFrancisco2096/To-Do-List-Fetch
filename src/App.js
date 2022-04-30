import React, { useState } from "react";
import './App.css';




function Todolist({ addTodo }) {
  const [value, setItem] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setItem("");
  }
  return (
    <div>
      <h1> My To Do List</h1>
      <div>
        Add and Item.....
        <br />
        <input
          type="text"
          placeholder="type item here"
          value={value}
          onChange={e => setItem(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          type="submit">
          submit
        </button>
      </div>
    </div>
  );
}
function App() {
  const [lista, setLista] = useState([]);


  console.log(lista)

  const addTodo = label => {
    const nuevalista = [...lista, {
      label,
      done: false
    }];
    setLista(nuevalista)

  };

  const RemoveAll = () => {
    const nuevalista = [];
    setLista(nuevalista)

    fetch('https://assets.breatheco.de/apis/fake/todos/user/Francisco', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        console.log(res)
      })
    fetch('https://assets.breatheco.de/apis/fake/todos/user/Francisco', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([]),
    })
      .then(res => {
        console.log(res)
      })
  }


  fetch('https://assets.breatheco.de/apis/fake/todos/user/Francisco', {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lista),
  })
    .then(res => {
      console.log(res)
    })

  const removeTodo = index => {
    const nuevalista = [...lista];
    nuevalista.splice(index, 1);
    setLista(nuevalista);
  };

  return (

    <div className="app">
      <div className="container">
        <Todolist addTodo={addTodo} />
        <div>
          {lista.map((lista, index) => (
            <li >
              {lista.label}
              <button className="btn btn-floating"
                onClick={() => removeTodo(index)}>
                <i class="material-icons">x</i>
              </button>
            </li>
          ))}
        </div>
        <button
          onClick={RemoveAll}
          type="submit">
          Delete All
        </button>
      </div>
    </div>
  )
};

export default App;


