import { useEffect, useState } from "react";
import "./../Style/home.css";
import Carousel from "../UI/Carousel";
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
  console.log(resData);
  return (
    <div className="home__Page__Container">
      {/* <h1>Home Page</h1> */}
      <Carousel resData={resData}></Carousel>
    </div>
  );
};

export default Home;
