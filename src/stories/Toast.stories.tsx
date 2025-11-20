import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../components/Toast/Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: "Success! Your account has been created.",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Error! Something went wrong.",
    type: "error",
  },
};

export const Warning: Story = {
  args: {
    message: "Warning! You have unsaved changes.",
    type: "warning",
  },
};

export const Info: Story = {
  args: {
    message: "Info! This is an info message.",
    type: "info",
  },
};

export const CustomDuration: Story = {
  args: {
    message: "This toast will close in 8 seconds.",
    duration: 8000,
  },
};

export const Closable: Story = {
  args: {
    message: "This toast can be closed.",
    closable: true,
  },
};
