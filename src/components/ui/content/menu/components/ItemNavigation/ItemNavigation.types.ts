import { MenuItem } from "@/types/global";

export interface ItemNavigationProps {
  items: MenuItem[];
  isActiveItem: (index: number) => boolean;
  onItemChange: (index: number) => void;
}
