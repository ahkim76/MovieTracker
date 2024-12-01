import "./App.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="main" />} />
          <Route path="main" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
