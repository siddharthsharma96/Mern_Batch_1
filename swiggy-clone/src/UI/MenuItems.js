import MenuItemsShow from "./MenuItemsShow";

const MenuItems = ({ res }) => {
  return (
    <div className="menuContainer">
      {res.card.card.itemCards &&
        res.card.card.itemCards.map((menu) => {
          return <MenuItemsShow menu={menu} />;
        })}
    </div>
  );
};
export default MenuItems;
