import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utils/CartSlice";

const MenuItemsShow = ({ menu }) => {
  // console.log(menu);
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  // console.log(items);
  const itemQuantity = items.length;
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
            <button
              onClick={() => {
                dispatch(removeItem());
              }}
            >
              -
            </button>
            <span>{items.length}</span>
            <button
              onClick={() => {
                dispatch(addItem(menu));
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="addItems"
            onClick={() => {
              dispatch(addItem(menu));
            }}
          >
            Add
          </button>
        )}
        <img src={`/images/${menu.card.info.imgName}`} />
      </div>
    </div>
  );
};

export default MenuItemsShow;
