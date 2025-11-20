import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";

const meta = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const oneLevel = [
  { label: "Dashboard" },
  { label: "Projects" },
  { label: "Settings" },
];

const twoLevel = [
  {
    label: "Dashboard",
    children: [{ label: "Dashboard A" }, { label: "Dashboard B" }],
  },
  {
    label: "Projects",
    children: [{ label: "Project A" }, { label: "Project B" }],
  },
  {
    label: "Settings",
    children: [{ label: "Profile" }, { label: "Security" }],
  },
];

export const OneLevel: Story = {
  args: {
    items: oneLevel,
    isOpen: true,
    onClose: () => console.log("Sidebar closed"),
  },
};

export const TwoLevel: Story = {
  args: {
    items: twoLevel,
    isOpen: true,
    onClose: () => console.log("Sidebar closed"),
  },
};
