import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetail from './pages/moviedetail/MovieDetail';
import MovieList from './components/movielist/MovieList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "movies/popular",
    element: <MovieList />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
