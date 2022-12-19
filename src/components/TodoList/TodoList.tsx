import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export interface Todos {
  id: string | number;
  text: string;
  status: string;
}

/** 이객체 값이 없을 때를 생각해서 undefined 지정 */
export default function ToDoList() {
  const [todos, setTodos] = useState<Todos[] | any>([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo: Todos) => setTodos([...todos, todo]);
  const handleUpdate = (updated: Todos) =>
    setTodos(todos.map((t: Todos) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted: Todos) =>
    setTodos(todos.filter((t: Todos) => t.id !== deleted.id));
  return (
    <section>
      <ul>
        {todos?.map((item: Todos) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
