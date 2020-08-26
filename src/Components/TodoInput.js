import React, { Component } from "react";
import "../index.css";

export default class TodoInput extends Component {
  render() {
    const { item, handleSubmit, handleChange, editItem } = this.props;
    return (
      <div>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control border border-primary text-capitalize"
              placeholder="add tasks"
              onChange={handleChange}
              value={item}
            />
            <button
              type="submit"
              disabled={item ? false : true}
              className={
                editItem
                  ? "btn btn-block btn-success mt-3 text-uppercase "
                  : "btn btn-block btn-primary mt-3 text-uppercase "
              }
            >
              {editItem ? "Edit Item" : " Add Item"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
