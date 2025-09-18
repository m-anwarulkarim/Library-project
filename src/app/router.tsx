import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Blog from "@/pages/Blog";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import { TrendingBooksData } from "@/components/data/TrendingBooksData";
import Books_8 from "@/components/data/Books_8";
import { About } from "@/pages/About";
import Error from "@/features/Error";

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
        loader: Books_8,
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
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
