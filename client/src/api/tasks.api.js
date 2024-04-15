import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:4000/tasks"); // Petición de GET a la API
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTask = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/tasks/${id}`); // Petición de GET a la API
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post("http://localhost:4000/tasks", task); // Petición de POST a la API
    console.log(response.data);
  } catch ({ error }) {
    console.error(await error.response);
  }
};

export const updateTask = async (task) => {
  try {
    const response = await axios.put(
      `http://localhost:4000/tasks/${task.id}`,
      task
    ); // Petición de PUT a la API
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/tasks/${id}`); // Petición de DELETE a la API
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
