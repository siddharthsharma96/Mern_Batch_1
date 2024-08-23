import { useEffect, useState } from "react";
import "./../Style/restaurant.css";
import { useParams } from "react-router-dom";
import RestaurantInfo from "../UI/RestaurantInfo";
import MenuItems from "../UI/MenuItems";
const Restaurant = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/restaurant.json");
      if (response.status === 200) {
        const data = await response.json();
        setRestaurant(data);
      }
    };

    const fetchMenu = async () => {
      const response = await fetch("http://localhost:3000/menu.json");
      if (response.status === 200) {
        const data = await response.json();
        setMenu(data);
      }
    };
    fetchData();
    fetchMenu();
  }, []);
  console.log(restaurant, menu);
  const findRestaurant = () => {
    return restaurant.find((item) => item?.info?.id === params.resId);
  };
  const result = findRestaurant();
  let name = result?.info?.name;
  return (
    <div className="restPage">
      <div className="path">
        <span>Home / Noida / {name}</span>
      </div>
      <div className="restContainerfood">
        <div className="restInfo">
          <p>{name}</p>
          <div className="restaurantService">
            <p>Order Online</p>
            <p>DineOut</p>
          </div>
          <RestaurantInfo />
        </div>
        <div className="restCuisineCont">
          {menu.map((res) => {
            const title = res.card.card.title;
            return (
              <div className="menuItemCont" key={title}>
                <div className="foodCat">
                  <p>
                    {res.card.card.title} ({res.card.card.itemCards.length})
                  </p>
                </div>
                <MenuItems res={res} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
