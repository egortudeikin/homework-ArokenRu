import { getTodosFromLocalStorage } from "./storage.js";
import { initTodoHandlers, renderTodos } from "./dom.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
