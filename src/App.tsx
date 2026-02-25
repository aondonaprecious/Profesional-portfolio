/** @format */

// src/App.tsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchPortfolioData } from "./store/portfoilioSlice";
import type { AppDispatch } from "./store";
import MainLayout from "./components/templates/MainLayout";
import HomePage from "./pages/HomePage";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Future routes like /project/:id will go here
    ],
  },
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Standard procedure: Fetch global data on mount
    dispatch(fetchPortfolioData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
