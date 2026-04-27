import { ActionIcon, Box } from "@mantine/core";
import { PhosphorLogoIcon, SidebarSimpleIcon } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";

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
      className="group"
      pos="relative"
    >
      {collapsed ? (
        <>
          <Box
            pos="absolute"
            inset={0}
            className="grid place-items-center transition-opacity group-hover:opacity-0"
          >
            <PhosphorLogoIcon size={20} />
          </Box>

          <Box
            pos="absolute"
            inset={0}
            className="grid place-items-center opacity-0 transition-opacity group-hover:opacity-100"
          >
            <SidebarSimpleIcon size={20} />
          </Box>
        </>
      ) : (
        <SidebarSimpleIcon size={20} />
      )}
    </ActionIcon>
  );
};
