import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { Box, Paper } from "@mantine/core";
import { Sidebar } from "./Sidebar";

export function RootLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sidebarWidth = isSidebarCollapsed ? 52 : 250;

  return (
    <Box
      bg="gray.1"
      h="100vh"
      style={{
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Box
        p="xs"
        style={{
          flex: `0 0 ${sidebarWidth}px`,
          overflow: "hidden",
          transition: "flex-basis 180ms cubic-bezier(0.2, 0, 0, 1)",
        }}
      >
        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggle={setIsSidebarCollapsed}
        />
      </Box>

      <Box flex={1} h="100%" miw={0}>
        <Box h="100%" pt="xs" pb="xs" pr="xs">
          <Paper bg="white" h="100%" shadow="none" p="xs">
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
