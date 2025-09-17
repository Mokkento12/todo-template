import { useAppSelector, useAppDispatch } from "../hooks";
import { toggleTodo, removeTodo } from "../store/todoSlice";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <ul className="space-y-2 mt-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-3 bg-gray-50 rounded"
        >
          <span
            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
