import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
  icon?: IconType;
  inHeader?: boolean;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};
