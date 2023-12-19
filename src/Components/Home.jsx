import React from "react";

import Todos from "./Todos";

export default function Home() {
    let todos = [
        {
            id: 1,
            title: "Todo-1",
            description: "This is todo number 1.",
            date: "01-02-2023"
        },
        {
            id: 2,
            title: "Todo-2",
            description: "This is todo number 2.",
            date: "02-02-2023"
        },
  ]

  return <div>
    <Todos todos={todos} />
  </div>;
}
