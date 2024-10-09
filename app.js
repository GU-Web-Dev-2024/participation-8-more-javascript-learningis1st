"use strict";

// import functions
import { addTodo, clearInput } from "./todo.js";
import { saveTodo, loadTodo } from "./storage.js";

// set up DOM elements
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");

// load todos from local storage
let tasks = loadTodo();

// add event listener to the input field
todoInput.addEventListener("click", ()=> {
    const todoInput = document.getElementById("todoInput");
    tasks.push(todoInput.value);
    saveTodo(tasks);
});