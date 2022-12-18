import React, { useState } from "react";
import { Todos } from "../TodoList/TodoList";

interface Props {
  onAdd: (todo: Todos) => void;
}

// type hello = "bye" | "hi";

export default function AddTodo({ onAdd }: Props) {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: "고유한값", text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
