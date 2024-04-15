import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    // Consultar datos en la base de datos
    const [tasks] = await pool.query("SELECT * FROM tasks");
    // Enviar respuesta
    return res.status(200).json(tasks);
  } catch (error) {
    // Enviar respuesta de error
    return res.status(500).json({ message: "Error getting tasks", error });
  }
};

export const getTask = async (req, res) => {
  try {
    // Obtener tarea por ID
    const [task] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (!task.length) {
      // Enviar respuesta de error
      return res.status(404).json({ message: "Task not found" });
    }
    // Enviar respuesta
    res.json(task);
  } catch (error) {
    // Enviar respuesta de error
    return res.status(500).json({ message: "Error getting task", error });
  }
};

export const createTask = async (req, res) => {
  const { title, description, tag, priority } = req.body;

  try {
    // Insertar datos en la base de datos
    await pool.query(
      "INSERT INTO tasks (title, description, tag, priority) VALUES (?, ?, ?, ?)",
      [title, description, tag, priority]
    );
    // Enviar respuesta
    res.send("Task '" + title + "' created successfully");
  } catch (error) {
    // Enviar respuesta de error
    return res.status(500).json({ message: "Error creating task", error });
  }
};

export const updateTask = async (req, res) => {
  try {
    // Actualizar tarea por ID
    const [task] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    if (task.affectedRows === 0) {
      // Enviar respuesta de error
      return res.status(404).json({ message: "Task not found" });
    }
    // Enviar respuesta
    res.json(task);
  } catch (error) {
    // Enviar respuesta de error
    return res.status(500).json({ message: "Error updating task", error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    // Eliminar tarea por ID
    await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
    if (task.affectedRows === 0) {
      // Enviar respuesta de error
      return res.status(404).json({ message: "Task not found" });
    }
    // Enviar respuesta
    res.send("Task deleted successfully");
  } catch (error) {
    // Enviar respuesta de error
    return res.status(500).json({ message: "Error deleting task", error });
  }
};
