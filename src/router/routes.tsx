import type { RouteObject } from "react-router";
import Layout from "../components/layout";
import { lazy } from "react";

const NotFoundPage = lazy(() => import("MFE_1/not-found"));

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    errorElement: <div>Error loading route</div>,
    children: [
      {
        index: true,
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
          const Component = await import("MFE_1/home").then(
            (module) => module.default
          );

          return { Component };
        },
      },
      {
        path: "mfe-1/showcase",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
          const Component = await import("MFE_1/showcase").then(
            (module) => module.default
          );

          return { Component };
        },
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
];
