"use strict";

// function to add a new todo
function addTodo() {
    // get the input value
    const todoInput = document.getElementById("todoInput").value;

    // check if the input value is empty
    if (todoInput === "") {
        alert("Please enter a todo");
        return;
    }

    // create a new li element
    const li = document.createElement("li");

    // create a text node with the input value
    const textNode = document.createTextNode(todoInput);

    // append the text node to the li element
    li.appendChild(textNode);

    // append the li element to the ul element
    document.getElementById("todoList").appendChild(li);

    // clear the input field
    clearInput();
}

// function to clear input field
function clearInput() {
    document.getElementById("todoInput").value = "";
}

// export functions
export { addTodo, clearInput };