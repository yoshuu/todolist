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
    this.navItem = document.querySelectorAll(".nav-item");

    this.init();
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  init() {
    this.navItems.forEach((navItem, i) => {
      navItem.addEventListener(
        "click",
        this.switchToggle.bind(this.navItems, i)
      );
    });
  }
  switchToggle(index) {
    this.forEach((nodeItem) => nodeItem.classList.remove("active"));
    this[index].classList.toggle("active");
  }
  renderTodos(todos) {
    this.todoList.innerHTML = this.todoItem(todos);
    this.init();
  }

  renderTodos = () => {
    this.view.switchState((e) => {
      this.state = e.target.dataset.name;
    });
  };
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  init = () => {
    this.renderTodos();
  };
}

const app = new Controller(new Model(), new View());
