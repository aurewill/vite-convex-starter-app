import { Box, Group, Stack } from "@mantine/core";
import { PhosphorLogoIcon } from "@phosphor-icons/react";
import { type Dispatch, type SetStateAction } from "react";
import { SidebarToggle } from "./SidebarToggle";
import { cn } from "../../utils/cn";

interface SidebarProps {
  collapsed: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <Stack>
      <Group justify="space-between" wrap="nowrap" gap={0}>
        <Box className="relative size-8 shrink-0">
          <Box
            className={cn(
              "absolute inset-0 grid place-items-center transition-opacity",
              collapsed && "pointer-events-none opacity-0",
            )}
          >
            <PhosphorLogoIcon size={20} />
          </Box>

          <Box
            className={cn(
              "absolute inset-0 transition-opacity",
              !collapsed && "pointer-events-none opacity-0",
            )}
          >
            <SidebarToggle collapsed onToggle={onToggle} />
          </Box>
        </Box>

        <Box
          className={cn(
            "grid size-8 shrink-0 place-items-center transition-opacity",
            collapsed && "pointer-events-none opacity-0",
          )}
        >
          <SidebarToggle collapsed={false} onToggle={onToggle} />
        </Box>
      </Group>
    </Stack>
  );
};
