import AddTodoFrom from "./components/addTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Мои задачи</h1>
      <AddTodoFrom />
      <TodoList />
    </div>
  );
}

export default App;
