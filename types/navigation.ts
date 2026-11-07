import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
  icon?: IconType;
  description?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};
