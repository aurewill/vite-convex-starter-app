import { useEffect, useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

export function RootLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((isCollapsed) => !isCollapsed);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "b" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsSidebarCollapsed((isCollapsed) => !isCollapsed);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-svh overflow-hidden bg-muted">
      <aside
        aria-label="Primary sidebar"
        className={cn(
          "shrink-0 overflow-hidden p-2 transition-[flex-basis] duration-200 ease-out motion-reduce:transition-none",
          isSidebarCollapsed ? "basis-[52px]" : "basis-[250px]",
        )}
      >
        <Sidebar collapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      </aside>

      <main className="h-full min-w-0 flex-1 py-2 pr-2">
        <div className="h-full rounded-lg border bg-background p-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
