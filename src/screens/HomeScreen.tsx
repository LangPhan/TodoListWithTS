import React, { useState } from "react";
import { Todo } from "../model";
import InputField from "../components/InputField";
import SingleTodo from "../components/SingleTodo";

const HomeScreen: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
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
      <div className="w-full text-center">
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
