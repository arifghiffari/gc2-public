import { RouterProvider } from "react-router-dom";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Footer from "./views/Footer";
import router from "./routers";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
