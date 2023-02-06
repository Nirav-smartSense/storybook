import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from "./comp1.component";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
export const PrimaryButton = () => <Button />;
