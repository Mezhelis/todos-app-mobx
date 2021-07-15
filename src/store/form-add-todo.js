import { makeAutoObservable } from "mobx";

class FormAddTodoStore {
  inputVal = '';

  constructor() {
    makeAutoObservable(this)
  }

  changeInputVal(val) {
    this.inputVal = val;
  }
}

export default new FormAddTodoStore();