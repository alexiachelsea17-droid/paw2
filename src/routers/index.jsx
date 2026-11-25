
import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import("../pages/home/home.jsx");
          return { Component: module.default };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const module = await import("../pages/about/about.jsx");
          return { Component: module.default };
        },
      },
    ],
  },
]);

export default router;
