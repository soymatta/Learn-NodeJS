import React from "react";
import { Formik } from "formik";
import { createTask } from "../api/tasks.api";
import NavBar from "../components/NavBar.jsx";
import "../components/tailwind.css";

function NewTask() {
  return (
    <>
      <NavBar name="New task!" />
      <Formik
        initialValues={{ title: "", description: "", tag: "" }}
        onSubmit={async (values, actions) => {
          // Sacar el radio que este checked
          if (document.getElementById("h-prio").checked) {
            values.priority = "1";
          } else if (document.getElementById("m-prio").checked) {
            values.priority = "2";
          } else {
            values.priority = "3";
          }

          console.log(values);
          await createTask(values);

          if (document.getElementById("h-prio").checked) {
            document.getElementById("h-prio").checked = false;
          } else if (document.getElementById("m-prio").checked) {
            document.getElementById("m-prio").checked = false;
          } else {
            document.getElementById("l-prio").checked = false;
          }

          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <form
            className="card-body bg-neutral my-9 mx-auto w-3/5 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <label className="label" htmlFor="title">
                <span className="label-text text-lg font-bold">Title</span>
              </label>
              <input
                placeholder="Set a title for your task"
                className="input input-bordered"
                id="title"
                name="title"
                onChange={handleChange}
                value={values.title}
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex-1 ">
                <div className="form-control max-w-48 m-auto">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold">Hight priority</span>
                    <input
                      type="radio"
                      name="prio"
                      className="radio checked:bg-primary"
                      id="h-prio"
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <div className="form-control max-w-48 m-auto">
                  <label className="label cursor-pointer">
                    <span className="label-text  font-bold">
                      Medium priority
                    </span>
                    <input
                      type="radio"
                      name="prio"
                      className="radio checked:bg-secondary"
                      id="m-prio"
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <div className="form-control max-w-48 m-auto">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold">Low priority</span>
                    <input
                      type="radio"
                      name="prio"
                      className="radio checked:bg-tertiary"
                      id="l-prio"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label" htmlFor="description">
                <span className="label-text text-lg font-bold">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Write a description for your task"
                className="textarea textarea-bordered"
                id="description"
                name="description"
                rows={4}
                onChange={handleChange}
                value={values.description}
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="tag">
                <span className="label-text text-lg font-bold">Tag</span>
              </label>
              <input
                placeholder="Set a tag for your task"
                className="input input-bordered"
                id="tag"
                name="tag"
                onChange={handleChange}
                value={values.tag}
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Task..." : "Create Task"}
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div></div>
    </>
  );
}

export default NewTask;
