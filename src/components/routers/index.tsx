import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import About from "../modules/main/About";
import Blog from "../modules/main/Blog";
import Services from "../modules/main/Services";
import Contact from "../modules/main/Contact";
import Home from "../modules/main/Home";
import { TrendingBooksData } from "../data/TrendingBooksData";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => TrendingBooksData,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
