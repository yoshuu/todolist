class Model {
  constructor() {
    this.todos = [];
  }

  change(callback) {
    this.isChange = callback;
  }

  _commit(todos) {
    this.isChange(todos);
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };

    this.todos.push(todo);
    this._commit(this.todos);
  }
}

class View {
  constructor() {
    this.app = this.getElement("#root");
    this.title = this.createElement("h1");
    this.title.textContent = "apple";

    this.app.append(this.title);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
