import { BlocksIcon, PanelLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const SidebarToggle = ({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) => {
  const label = collapsed ? "Open sidebar" : "Close sidebar";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label={label}
          onClick={onToggle}
          variant="ghost"
          size="icon"
          className={cn(
            "group relative",
            collapsed ? "cursor-e-resize" : "cursor-w-resize",
          )}
        >
          {/* Layer the icons so collapsed hover can swap without remounting the button. */}
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity",
              collapsed ? "group-hover:opacity-0" : "opacity-0",
            )}
          >
            <BlocksIcon aria-hidden="true" className="size-5" />
          </span>

          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity",
              collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100",
            )}
          >
            <PanelLeftIcon aria-hidden="true" className="size-5" />
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent
        className="animate-none"
        side={collapsed ? "right" : "bottom"}
        sideOffset={4}
      >
        <span>Toggle sidebar</span>
        <Kbd>⌘B</Kbd>
      </TooltipContent>
    </Tooltip>
  );
};
