import { MenuItem } from "@/types";

interface MenuContentProps {
  item: MenuItem;
}

const MenuContent = ({ item }: MenuContentProps) => {
  return (
    <article key={item.id} data-speed="1.1">
      <h3 id="item-title">{item.name}</h3>
      <h4 id="item-subtitle">{item.descriptionHeading}</h4>
      <div id="item-garnish">
        {item.garnish && <p>garnish: {item.garnish}</p>}
        <p>ingredients: {item.ingredients.join(", ")}</p>
        <p>{item.alcohol && `ABV: ${item.abv}%`}</p>
      </div>
      <p id="item-description">{item.description}</p>
    </article>
  );
};

export default MenuContent;
