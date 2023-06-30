import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e : React.FormEvent)=>void;
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" onSubmit={(e)=>{ 
        handleAdd(e)
        inputRef.current?.blur();
    }}>
        <input
          ref={inputRef}
          type="input"
          placeholder="Enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="input__submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default InputFeild;
