import React, { Component } from "react";

export default class TodoItems extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li
        className="list-group-item my-2 text-capitalize d-flex justify-content-between"
        style={{ wordBreak: "break-all" }}
      >
        <h6>{title}</h6>
        <div className="font-icons">
          <span
            className="mx-2 text-success"
            onClick={handleEdit}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            className="mx-2 text-danger"
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
