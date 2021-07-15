import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TodoAppStore from "../store/todo-app";
import FormAddTodo from "./FormAddTodo";

const TodoList = observer(() => {

  useEffect(() => {
    TodoAppStore.fetchTodos();
  }, [])

  return (
    <>
      <FormAddTodo />
      <br />
      <p className="text-start"><strong>{TodoAppStore.count}</strong></p>
      <br />
      <table className="table">
        <thead>
          <tr className="table-light">
            <th scope="col"></th>
            <th scope="col">№</th>
            <th scope="col">Описание</th>
            <th scope="col">Удаление</th>
          </tr>
        </thead>
        <tbody>
          {TodoAppStore.todos.map((todo) =>
            <tr className="todo-item" key={todo.id}>
              <td><input type="checkbox" checked={todo.completed} onChange={() => TodoAppStore.toggleTodo(todo)} /></td>
              <td>{todo.id}</td>
              <td className="text-start">{todo.title}</td>
              <td>
                <button className="btn btn-danger" onClick={() => TodoAppStore.removeTodo(todo.id)}>X</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
})

export default TodoList;