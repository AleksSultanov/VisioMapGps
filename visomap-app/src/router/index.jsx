import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/root.jsx";
import { Places } from "../pages/places.jsx";
import { Layout } from "../layout.jsx";
import { ROUTE_PATHES } from "./pathes.js";
import { NotFoundPage } from "../pages/notFound.jsx";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: ROUTE_PATHES.root,
          element: <Root />,
        },
        {
          path: ROUTE_PATHES.base,
          element: <Root />,
        },
        {
          path: ROUTE_PATHES.places,
          element: <Places />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  { basename: "/VisioMapGps/" }
);
