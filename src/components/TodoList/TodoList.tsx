import React, { useState } from "react";

interface Todos {
  id: string | number;
  text: string;
  status: string;
}
// 객체 값이 없을 때를 생각해서 undefined 지정
export default function ToDoList() {
  const [todos, setTodos] = useState<Todos[] | undefined>([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos?.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
