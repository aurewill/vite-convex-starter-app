import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { mantineTheme } from "./theme";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const convexUrl = import.meta.env.VITE_CONVEX_URL;

if (convexUrl === undefined) {
  throw new Error("Missing VITE_CONVEX_URL");
}

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Missing root element");
}

const convex = new ConvexReactClient(convexUrl);

createRoot(root).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <MantineProvider defaultColorScheme="light" theme={mantineTheme}>
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </ConvexProvider>
  </StrictMode>,
);
