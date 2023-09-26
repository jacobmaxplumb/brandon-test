import "./App.css";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (description) => {
		setTodos([...todos, { description, isCompleted: false }]);
	};

	const deleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
		</>
	);
}

export default App;
