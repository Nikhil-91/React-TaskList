import React from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
      console.log(todos);
    }
    this.state = {
      items: todos,
      id: uuidv4(),
      item: "",
      editItem: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
    this.addLocalStorage(newItem);
  };

  handleEdit = (id) => {
    let newItems = [...this.state.items];
    let selectedItems = newItems.find((item) => item.id === id);
    newItems = newItems.filter((item) => item.id !== id);

    this.setState({
      items: newItems,
      item: selectedItems.title,
      id: id,
      editItem: true,
    });
    this.deleteLocalStorage(id);
  };

  handleDelete = (id) => {
    let newItems = [...this.state.items];
    newItems = newItems.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
    this.deleteLocalStorage(id);
  };

  ClearList = () => {
    console.log("Clear List");
    this.setState({
      items: [],
    });
    this.clearAllLocalStorage();
  };

  addLocalStorage = (item) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
      console.log("first block");
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
      console.log("Second block");
    }
    todos.push(item);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  deleteLocalStorage = (id) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  clearAllLocalStorage = () => {
    localStorage.clear();
  };

  render() {
    return (
      <section>
        <div className="contianer">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-center text-capitalize">Todo Lists</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                clearList={this.ClearList}
                filterList={this.filterList}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
