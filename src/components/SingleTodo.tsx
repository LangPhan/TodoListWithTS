import React from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = (Props) => {
  const handleDone = (id: number) => {
    Props.setTodos(
      Props.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    Props.setTodos(Props.todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      className={`${
        Props.todo.isDone ? "bg-slate-300" : "bg-white"
      } mx-[20%] 2xl:mx-[40%] my-4 px-5 py-5 rounded-md shadow-lg
    flex flex-row items-center justify-between text-blue-500`}
    >
      {Props.todo.isDone ? (
        <s>{Props.todo.todo}</s>
      ) : (
        <span>{Props.todo.todo}</span>
      )}
      <div className="flex flex-row justify-evenly gap-5">
        <span
          className="cursor-pointer hover:scale-110 hover:text-blue-600"
          onClick={() => handleDone(Props.todo.id)}
        >
          <AiFillCheckCircle size={"1.5em"} />
        </span>
        <span
          className="cursor-pointer hover:scale-110 hover:text-blue-600"
          onClick={() => handleDelete(Props.todo.id)}
        >
          <AiFillDelete size={"1.5em"} />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
