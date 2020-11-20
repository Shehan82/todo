import './App.css';
import React, { useState } from 'react';
import { Button, Card, CardContent, Input } from '@material-ui/core';


function App() {

  const [todos, setTodos] = useState(["hello", "hi", "how", "much"]);
  const [input, setInput] = useState("")

  const chng = (event) => {
    setInput(event.target.value);
  }

  const addTodo = (event)=>{
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
    
  };
  return (
    
    <div className="App">
      <Card className="app__header">
        <CardContent>
        <h1>This is a todo app</h1>
        </CardContent>
      </Card>
      

      <form>
        <Input type="text" value={input} onChange={chng}/>
        <button type="submit" onClick={addTodo}>add todo</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

      <Button color="secondary">Secondary</Button>
    </div>
  );
}

export default App;
