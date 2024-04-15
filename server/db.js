// Archivo donde se guardan las configuraciones específicas de la base de datos
import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost", // El host de tu servidor MySQL, puede ser localhost
  port: 3306, // El puerto de tu servidor MySQL, por defecto es 3306
  user: "root", // El nombre de usuario de MySQL, por defecto en XAMPP es 'root'
  password: "", // XAMPP no coloca contraseña por defecto
  database: "mernbd_tasks", // Nombres de la base de datos que deseas utilizar
});
