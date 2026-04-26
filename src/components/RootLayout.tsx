import { Outlet } from "@tanstack/react-router";
import { AppShell, Paper } from "@mantine/core";

export function RootLayout() {
  return (
    <AppShell
      padding="xs"
      navbar={{
        width: "250",
        breakpoint: 0,
      }}
      withBorder={false}
    >
      <AppShell.Navbar bg="gray.1">Navbar</AppShell.Navbar>

      <AppShell.Main bg="gray.1" h="100vh">
        <Paper bg="white" h="100%" shadow="none">
          <Outlet />
        </Paper>
      </AppShell.Main>
    </AppShell>
  );
}
