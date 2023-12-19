import React from "react";

import Home from "./Components/Home";
import AddNewTodo from "./Components/AddNewTodo";

function App() {
    return (
        <div>
            <h1>Todo App</h1>
            <AddNewTodo />
            <Home />
        </div>
    );
}

export default App;