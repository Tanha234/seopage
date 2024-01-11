import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Application from "./Components/Application";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Application />, // Replace with your valid React element or component
    },
  ]);

  return (
    <>
      {/*
        Add your JSX content here if needed
      */}
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;
