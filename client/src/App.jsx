import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404";
import NewTask from "./pages/NewTask";
import TasksPage from "./pages/TasksPage";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/new" element={<NewTask />} />
      <Route path="/edit" element={<EditTask />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
