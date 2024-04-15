import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import testRoutes from "./routes/test.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express(); // Instancia de express

app.use(cors()); // Middleware para el manejo de CORS
app.use(express.json()); // Middleware para el manejo de JSON

app.use(testRoutes); // Define el uso de las rutas dentro de testRoutes
app.use(tasksRoutes); // Define el uso de las rutas dentro de tasksRoutes

app.listen(PORT, () => {
  console.log(`Express corriendo en el puerto ${PORT}`);
  console.log(`Ingresa: http://localhost:${PORT}`);
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hello World!");
});
