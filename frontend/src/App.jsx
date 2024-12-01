import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Main from "./Components/Main";
import MovieSearch from "./Components/MovieSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="main" />} />
          <Route path="main" element={<Main />} />
          <Route path="movie-search" element={<MovieSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
