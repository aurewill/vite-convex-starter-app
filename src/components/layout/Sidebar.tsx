import { BlocksIcon } from "lucide-react";
import { SidebarToggle } from "./SidebarToggle";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-nowrap items-center justify-between gap-0">
        <div className="relative size-8 shrink-0">
          {/* Keep the collapsed toggle and expanded logo in the same slot to avoid flicker. */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              collapsed && "pointer-events-none opacity-0",
            )}
          >
            <BlocksIcon aria-hidden="true" className="size-5" />
          </div>

          <div
            inert={!collapsed}
            className={cn(
              "absolute inset-0",
              !collapsed && "pointer-events-none opacity-0",
            )}
          >
            <SidebarToggle collapsed onToggle={onToggle} />
          </div>
        </div>

        <div
          inert={collapsed}
          className={cn(
            "flex size-8 shrink-0 items-center justify-center",
            collapsed && "pointer-events-none opacity-0",
          )}
        >
          <SidebarToggle collapsed={false} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
};
