import { makeAutoObservable } from "mobx";

class TodoAppStore {
  todos = [];

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(value) {
    let todo = {
      "id": this.todos.length + 1,
      "title": value,
      "completed": false
    }
    this.todos.unshift(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }
  toggleTodo(todo) {
    todo.completed = !todo.completed;
  }

  get count() {
    return <span>`В списке: {this.todos.length} пункт.`</span>;
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todos = [...json].reverse())
  }
}

export default new TodoAppStore();