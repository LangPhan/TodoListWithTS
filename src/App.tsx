import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <h1
        className="text-blue-500 
      text-center text-2xl font-bold my-[2%]"
      >
        Task Notes
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAddTodo} />
      <div className="w-[70%] bg-white mt-5">
          {todos.map((todo) => (
            <li className="list-decimal">{todo.todo}</li>
          ))}
      </div>
    </div>
  );
};

export default App;
