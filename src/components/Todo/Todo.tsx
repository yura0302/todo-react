import React from "react";
import { Todos } from "../TodoList/TodoList";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  todo: Todos;
  onUpdate: (updated: Todos) => void;
  onDelete: (deleted: Todos) => void;
}

export default function Todo({ todo, onUpdate, onDelete }: Props) {
  const { text, status } = todo;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button>
        <FaTrashAlt />
      </button>
    </li>
  );
}
