import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { Box, Paper } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { Sidebar } from "./Sidebar";
import { cn } from "../../utils/cn";

export function RootLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useHotkeys([
    [
      "mod+B",
      (event) => {
        event.preventDefault();
        setIsSidebarCollapsed((isCollapsed) => !isCollapsed);
      },
    ],
  ]);

  return (
    <Box className="flex h-screen overflow-hidden" bg="gray.1">
      <Box
        className={cn(
          "shrink-0 overflow-hidden duration-200",
          isSidebarCollapsed ? "basis-[52px]" : "basis-[250px]",
        )}
        p="xs"
      >
        <Sidebar
          collapsed={isSidebarCollapsed}
          onToggle={setIsSidebarCollapsed}
        />
      </Box>

      <Box className="h-full min-w-0 flex-1">
        <Box className="h-full" pt="xs" pr="xs" pb="xs">
          <Paper className="h-full bg-white" shadow="none" p="xs">
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
