"use strict";

// save todo to local storage
function saveTodo(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load todo from local storage
function loadTodo() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// export functions
export { saveTodo, loadTodo };