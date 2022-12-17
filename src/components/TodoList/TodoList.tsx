import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

interface Todos {
  id: string | number;
  text: string;
  status: string;
}
// 객체 값이 없을 때를 생각해서 undefined 지정
export default function ToDoList() {
  const [todos, setTodos] = useState<Todos[] | any>([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo: string[] | undefined) =>
    // 새로운 투두를 todos에 업데이트 해야함
    // console.log(todo);
    setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {todos?.map((item: any) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
