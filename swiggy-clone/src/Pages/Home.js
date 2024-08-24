import { useContext, useEffect, useState } from "react";
import "./../Style/home.css";
import Carousel from "../UI/Carousel";
import Card from "../UI/Card";
import UserContext from "../Utils/userContext";
const Home = () => {
  const [resData, setRestData] = useState([]);
  const { userName, setUserName } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/restaurant.json");
      if (response.status === 200) {
        const data = await response.json();
        setRestData(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="homePageContainer">
      {/* <input
        value={userName}
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      /> */}
      {/* <h1>Home Page</h1> */}
      <Carousel resData={resData}></Carousel>
      <h2>Restaurants with online food delivery in Noida</h2>
      <div className="cardContainer">
        {resData.map((res) => {
          return <Card show={true} resData={res}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;
