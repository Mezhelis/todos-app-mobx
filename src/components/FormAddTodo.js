import { observer } from "mobx-react-lite";
import FormAddTodoStore from "../store/form-add-todo";
import TodoAppStore from "../store/todo-app";

const FormAddTodo = observer(() => {

  function addTodo() {
    TodoAppStore.addTodo(FormAddTodoStore.inputVal);
    FormAddTodoStore.changeInputVal('')
  }

  return (
    <div className="input-group mt-3 mb-3">
      <input
        className="form-control"
        type="text"
        value={FormAddTodoStore.inputVal}
        onChange={(e) => FormAddTodoStore.changeInputVal(e.target.value)} />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={addTodo}>Добавить</button>
    </div>
  )
})

export default FormAddTodo;

