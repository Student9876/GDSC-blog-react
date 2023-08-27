import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import CreateBlog from './components/CreateBlog';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "<h1>Error</h1>",
  },
  {
    path: "/createblog",
    element: <CreateBlog/>,
  }
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

