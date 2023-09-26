export const TodoList = (props) => {
    return (
        <div>
            <ul>
            {props.todos.map((todo, index) => (
                <li key={index} onClick={() => props.deleteTodo(index)}>{todo.description}</li>
            ))}
            </ul>
        </div>
    )
}