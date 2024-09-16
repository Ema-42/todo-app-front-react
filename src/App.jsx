import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import UsersPage from "./pages/Users/UsersPage";
import TodosPage from "./pages/Todos/TodosPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
};

export default App;
