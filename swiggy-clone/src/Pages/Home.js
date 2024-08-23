import { useEffect, useState } from "react";
import "./../Style/home.css";
import Carousel from "../UI/Carousel";
import Card from "../UI/Card";
const Home = () => {
  const [resData, setRestData] = useState([]);
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
