import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// components
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/github" element={<MainPage />} />
      <Route path="/*" element={<Navigate to="/github" />} />
    </Routes>
  );
};

export default App;
