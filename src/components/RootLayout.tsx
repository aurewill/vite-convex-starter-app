import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { ActionIcon, AppShell, Group, Paper } from "@mantine/core";
import { SidebarSimpleIcon } from "@phosphor-icons/react";

export function RootLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <AppShell
      padding="xs"
      navbar={{
        width: 250,
        breakpoint: 0,
        collapsed: { desktop: sidebarCollapsed },
      }}
      withBorder={false}
    >
      <AppShell.Navbar bg="gray.1" p="xs">
        Navbar
      </AppShell.Navbar>

      <AppShell.Main bg="gray.1" h="100vh">
        <Paper bg="white" h="100%" shadow="none" p="xs">
          <Group>
            <ActionIcon
              aria-label={
                sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
              onClick={() => {
                setSidebarCollapsed((collapsed) => !collapsed);
              }}
              variant="transparent"
            >
              <SidebarSimpleIcon size={20} />
            </ActionIcon>
          </Group>
          <Outlet />
        </Paper>
      </AppShell.Main>
    </AppShell>
  );
}
