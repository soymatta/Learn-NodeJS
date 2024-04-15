import React, { useState } from "react";
import { updateTask, deleteTask } from "../api/tasks.api";
import { Link } from "react-router-dom";

import "./tailwind.css";
import "boxicons";

function Task(props) {
  const [completed, setCompleted] = useState(props.completed);
  const [deleted, setDeleted] = useState(false);

  const handleDoneClick = async () => {
    await updateTask({ id: props.id, completed: true });
    setCompleted(true);
  };

  const handleUndoneClick = async () => {
    await updateTask({ id: props.id, completed: false });
    setCompleted(false);
  };

  const handleDeleteClick = async () => {
    await deleteTask(props.id);
    setDeleted(true);
  };

  if (deleted) {
    return null;
  }

  return (
    <div
      className={`card w-96 shadow-xl m-8 ${
        completed
          ? "bg-base-300 border border-green-400"
          : "bg-neutral border border-transparent"
      }`}
    >
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <Link to="/edit" className="btn btn-ghost text-s">
            <box-icon name="edit" color="#a6adbb"></box-icon>
          </Link>
        </h2>
        <p>
          {props.priority === 1 ? (
            <div className="badge badge-primary">High P.</div>
          ) : props.priority === 2 ? (
            <div className="badge badge-secondary">Medium P.</div>
          ) : (
            <div className="badge badge-tertiary">Low P.</div>
          )}
          {completed ? (
            <div className="badge badge-success gap-2">done</div>
          ) : (
            ""
          )}
        </p>

        <p>{props.description}</p>
        <div className="card-actions justify-end">
          {props.tag && <div className="badge badge-outline">{props.tag}</div>}
        </div>
        <div className="card-actions justify-between">
          {!completed ? (
            <button className="btn btn-success" onClick={handleDoneClick}>
              Done!
            </button>
          ) : (
            <button className="btn btn-warning" onClick={handleUndoneClick}>
              Undone
            </button>
          )}
          <button className="btn btn-error" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
