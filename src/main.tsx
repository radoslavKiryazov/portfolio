import React from "react";
import ReactDOM from "react-dom/client";
import PageShell from "./components/PageShell.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <HomePage />,
    errorElement: <div> 404 NOT FOUND</div>,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageShell>
      <RouterProvider router={router} />
    </PageShell>
  </React.StrictMode>
);
