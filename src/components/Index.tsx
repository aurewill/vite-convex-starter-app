import {
  AppShell,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  NavLink,
  Paper,
  Stack,
  Text,
  TextInput,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import {
  IconInbox,
  IconSearch,
  IconPlus,
  IconSettings,
  IconFilter,
  IconFolder,
  IconFiles,
  IconDots,
} from "@tabler/icons-react";

export function Index() {
  return (
    <AppShell
      navbar={{ width: 216, breakpoint: "sm" }}
      padding={0}
      bg="#080808"
    >
      <AppShell.Navbar
        p="sm"
        bg="#080808"
        style={{
          borderRight: "1px solid #1f1f1f",
        }}
      >
        <Stack h="100%" gap="md">
          <Group justify="space-between">
            <Group gap="xs">
              <Avatar size={22} radius="xl" color="green">
                AG
              </Avatar>
              <Text size="sm" fw={500} c="gray.2">
                agentretriever
              </Text>
            </Group>

            <Group gap={4}>
              <ActionIcon variant="subtle" color="gray" size="sm">
                <IconSearch size={15} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray" size="sm">
                <IconPlus size={15} />
              </ActionIcon>
            </Group>
          </Group>

          <Stack gap={2}>
            <NavLink
              label="Inbox"
              leftSection={<IconInbox size={16} />}
              c="gray.4"
              styles={navStyles}
            />
            <NavLink
              label="My issues"
              leftSection={<IconFiles size={16} />}
              c="gray.4"
              styles={navStyles}
            />
          </Stack>

          <Box>
            <Text size="xs" c="dimmed" mb={6}>
              Workspace
            </Text>
            <Stack gap={2}>
              <NavLink
                label="Projects"
                leftSection={<IconFolder size={16} />}
                c="gray.4"
                styles={navStyles}
              />
              <NavLink
                label="Views"
                leftSection={<IconFiles size={16} />}
                c="gray.4"
                styles={navStyles}
              />
              <NavLink
                label="More"
                leftSection={<IconDots size={16} />}
                c="gray.4"
                styles={navStyles}
              />
            </Stack>
          </Box>

          <Box>
            <Text size="xs" c="dimmed" mb={6}>
              Your teams
            </Text>
            <Stack gap={2}>
              <NavLink
                label="Agentretriever"
                leftSection={<Box w={10} h={10} bg="red" />}
                c="gray.4"
                styles={navStyles}
              />
              <NavLink label="Issues" c="gray.4" styles={navStyles} />
              <NavLink label="Projects" c="gray.4" styles={navStyles} />
              <NavLink label="Views" c="gray.4" styles={navStyles} />
            </Stack>
          </Box>

          <Box mt="auto">
            <Paper bg="#151515" radius="md" p="sm">
              <Text size="xs" c="dimmed">
                What&apos;s new
              </Text>
              <Text size="xs" c="gray.2" fw={500}>
                Linear Agent MCP support
              </Text>
            </Paper>
          </Box>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Box p="sm" h="100vh">
          <Paper
            h="100%"
            radius="md"
            bg="#101010"
            style={{
              border: "1px solid #222",
              overflow: "hidden",
            }}
          >
            <Group
              h={48}
              px="md"
              justify="space-between"
              style={{
                borderBottom: "1px solid #191919",
              }}
            >
              <TextInput
                variant="unstyled"
                placeholder="Search issues, projects, and documents..."
                leftSection={<IconSearch size={16} />}
                styles={{
                  input: {
                    color: "var(--mantine-color-gray-2)",
                  },
                }}
                style={{ flex: 1 }}
              />

              <Group gap="xs">
                <ActionIcon variant="subtle" color="gray" radius="xl">
                  <IconFilter size={16} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" radius="xl">
                  <IconSettings size={16} />
                </ActionIcon>
              </Group>
            </Group>

            <Group px="md" py="xs" gap="xs">
              {["All", "Issues", "Projects", "Documents"].map((tab) => (
                <Button
                  key={tab}
                  size="xs"
                  radius="xl"
                  variant={tab === "All" ? "filled" : "default"}
                  color="dark"
                >
                  {tab}
                </Button>
              ))}
            </Group>

            <Divider color="#191919" />

            <ScrollArea h="calc(100% - 96px)">
              <Box p="md">{/* your search results / file browser here */}</Box>
            </ScrollArea>
          </Paper>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

const navStyles = {
  root: {
    borderRadius: 8,
    padding: "6px 8px",
  },
  label: {
    fontSize: 13,
  },
};
