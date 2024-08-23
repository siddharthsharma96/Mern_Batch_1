import { useState } from "react";

const MenuItemsShow = ({ menu }) => {
  console.log(menu);

  const [itemQuantity, setItemQuantity] = useState(0);
  return (
    <div className="menuFoodCard">
      <div className="menuFoodCardInfo">
        <p className="cuisineName">{menu.card.info.name}</p>
        <p className="cuisinePrice">
          ₹ {menu.card.info.defaultPrice / 100 || menu.card.info.price / 100}
        </p>
        <p className="cuisineDesc">{menu.card.info.description}</p>
      </div>
      <div className="menuFoodCardImageInfo">
        {itemQuantity > 0 ? (
          <div className="fgfg">
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
        ) : (
          <button className="addItems">Add</button>
        )}
        <img src={`/images/${menu.card.info.imgName}`} />
      </div>
    </div>
  );
};

export default MenuItemsShow;
