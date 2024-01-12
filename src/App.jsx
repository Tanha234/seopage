import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Application from "./Components/Application";
import Upload from "./Components/Upload";
import User from "./Components/User";




function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Application />,
    

    // },
    {
      path: "/upload",
      element: <Upload />, 
   
    },
    {
      path: "/",
      element: <User />, 
      loader:()=>fetch('http://localhost:5000/upload')

   
    },
  ]);

  return (
    <>
    
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;
