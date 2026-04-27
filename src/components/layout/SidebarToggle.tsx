import { ActionIcon, Box, Kbd, Tooltip } from "@mantine/core";
import { PhosphorLogoIcon, SidebarSimpleIcon } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";
import { cn } from "../../utils/cn";

export const SidebarToggle = ({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const label = collapsed ? "Open sidebar" : "Close sidebar";

  const tooltipLabel = (
    <Box component="span" className="flex items-center gap-2">
      <span>Toggle sidebar</span>
      <Kbd className="border-0 text-white" bg="gray.8" size="sm">
        ⌘B
      </Kbd>
    </Box>
  );

  return (
    <Tooltip
      label={tooltipLabel}
      position={collapsed ? "right" : "bottom"}
      transitionProps={{ duration: 0 }}
    >
      <ActionIcon
        aria-label={label}
        onClick={() => {
          onToggle((isCollapsed) => !isCollapsed);
        }}
        variant="subtle"
        size={32}
        className={cn(
          "group relative",
          collapsed ? "cursor-e-resize" : "cursor-w-resize",
        )}
      >
        {/* Layer the icons so collapsed hover can swap without remounting the button. */}
        <Box
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            collapsed ? "group-hover:opacity-0" : "opacity-0",
          )}
        >
          <PhosphorLogoIcon size={20} />
        </Box>

        <Box
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100",
          )}
        >
          <SidebarSimpleIcon size={20} />
        </Box>
      </ActionIcon>
    </Tooltip>
  );
};
