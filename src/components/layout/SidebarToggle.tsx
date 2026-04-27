import { ActionIcon, Box } from "@mantine/core";
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
  const label = collapsed ? "Expand sidebar" : "Collapse sidebar";

  return (
    <ActionIcon
      aria-label={label}
      onClick={() => {
        onToggle((isCollapsed) => !isCollapsed);
      }}
      variant="subtle"
      size={32}
      className="group relative"
    >
      <Box
        className={cn(
          "absolute inset-0 grid place-items-center transition-opacity",
          collapsed ? "group-hover:opacity-0" : "opacity-0",
        )}
      >
        <PhosphorLogoIcon size={20} />
      </Box>

      <Box
        className={cn(
          "absolute inset-0 grid place-items-center transition-opacity",
          collapsed ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        )}
      >
        <SidebarSimpleIcon size={20} />
      </Box>
    </ActionIcon>
  );
};
