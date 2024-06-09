import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";
import Nav from "../components/Nav";
import Indonesian from "../components/category/Indonesian";
import Mexican from "../components/category/Mexican";
import Thai from "../components/category/Thai";
import Italian from "../components/category/Italian";
import Japanese from "../components/category/Japanese";
import Detail from "../views/Detail";

const url = "https://server.gc1-arifghiffari.online";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu url={url} />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "indonesian",
        element: <Indonesian />,
      },
      {
        path: "japanese",
        element: <Japanese />,
      },
      {
        path: "mexican",
        element: <Mexican />,
      },
      {
        path: "italian",
        element: <Italian />,
      },
      {
        path: "thai",
        element: <Thai />,
      },
    ],
  },
]);

export default router;
