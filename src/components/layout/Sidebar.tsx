import { Group, Stack } from "@mantine/core";
import { PhosphorLogoIcon } from "@phosphor-icons/react";
import { type Dispatch, type SetStateAction } from "react";
import { SidebarToggle } from "./SidebarToggle";

interface SidebarProps {
  collapsed: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  if (collapsed) {
    return (
      <Stack align="flex-start">
        <SidebarToggle collapsed={collapsed} onToggle={onToggle} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Group justify="space-between">
        <PhosphorLogoIcon size={20} />
        <SidebarToggle collapsed={collapsed} onToggle={onToggle} />
      </Group>
    </Stack>
  );
};
