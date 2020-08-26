import React, { Component } from "react";
import Todoitems from "./TodoItems";

export default class TodoList extends Component {
  render() {
    const {
      items,
      handleDelete,
      handleEdit,
      clearList,
      filterList,
    } = this.props;
    return (
      <ul className="list-group my-5">
        {/* <input
          type="text"
          placeholder="Filter Taks"
          className="form-control my-2"
          onChange={filterList}
        /> */}
        <h3 className="text-center text-capitalize">Todo Items</h3>
        {items.map((item) => {
          return (
            <Todoitems
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="submit"
          className="btn btn-block btn-danger text-upper mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
