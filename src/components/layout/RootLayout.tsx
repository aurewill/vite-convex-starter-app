import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { AppShell, Box, Paper } from "@mantine/core";
import { Sidebar } from "./Sidebar";

export function RootLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navbarWidth = isSidebarCollapsed ? 52 : 250;

  return (
    <AppShell
      navbar={{
        width: navbarWidth,
        breakpoint: 0,
      }}
      withBorder={false}
    >
      <AppShell.Navbar bg="gray.1" p="xs">
        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggle={setIsSidebarCollapsed}
        />
      </AppShell.Navbar>

      <AppShell.Main bg="gray.1" h="100vh">
        <Box h="100%" pt="xs" pb="xs" pr="xs">
          <Paper bg="white" h="100%" shadow="none" p="xs">
            <Outlet />
          </Paper>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
