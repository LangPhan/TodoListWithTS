import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = (Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="relative"
      onSubmit={(e) => {
        Props.handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="w-full rounded-[50px] px-[10px] py-[20px] 
            border-none shadow-xl
            focus:outline-none focus:shadow-3xl"
        ref={inputRef}
        type="text"
        placeholder="Input your task"
        value={Props.todo}
        onChange={(e) => Props.setTodo(e.target.value)}
      />
      <button
        className="absolute bg-blue-500 text-white font-semibold
            rounded-full w-12 h-12 right-0 mt-2 mr-2 shadow-2xl"
        type="submit"
      >
        GO
      </button>
    </form>
  );
};

export default InputField;
