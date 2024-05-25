import React, { useState } from "react"
import Todo from "./components/todo"
function App() {
  const [todos, setTodos] = useState([
    {
      name: "First Todo",
      description: "this is our first todo app",
      status: true
    },
    {
      name: "Second Todo",
      description: "this is our second todo app",
      status: true
    }
  ]);
  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const addTodo = (e:any) => {
    e.preventDefault(); 
    setTodos([...todos, { name: name, description: description, status: true }]);
    setName(''); 
    setDescription('');
  };
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      {
        todos.map((todo, index) =>
          (<Todo name={todo.name} description={todo.description} status={todo.status} key={index} />)

        )
        }
        <form onSubmit={addTodo}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Todo Name"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          placeholder="Todo Description"
        />
        <button type="submit">Add Todo</button>
      </form>
    </React.Fragment>
  )
}

export default App
