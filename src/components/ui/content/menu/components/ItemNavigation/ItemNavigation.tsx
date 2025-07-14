import AnimatedButton from "@/components/ui/common/btns/AnimatedButton";
import { ItemNavigationProps } from "./ItemNavigation.types";

const ItemNavigation = ({ items, isActiveItem, onItemChange }: ItemNavigationProps) => {
  return (
    <ul id="item-navigation" className="row-center justify-center gap-5 flex-wrap ">
      {items.map((item, i) => {
        return (
          <li key={item.id}>
            <AnimatedButton
              isActive={isActiveItem(i)}
              perspective={12}
              className="text-2xl text-red-500"
              onClick={() => onItemChange(i)}>
              {item.name}
            </AnimatedButton>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemNavigation;
