import { Footer } from "./Components/Footer";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import "./Style/App.css";
import CounterNew from "./Components/CounterNew";
import Debouncing from "./Components/Debouncing";
import UserCard from "./Components/UserCard";
import { useEffect, useState } from "react";
import UserCardwithExtraField from "./Components/UserCardwithextraField";
import StatelessComponent from "./Components/StatelessComponent";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/data.json");
        if (response.status === 200) {
          const data = await response.json();
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const HOFCOMPONENT = UserCardwithExtraField(UserCard);

  return (
    <div className="app">
      <h1>Learning React</h1>
      {/* <div className="userCard">
        {data.map((item) => (
          <UserCard
            key={item.id}
            id={item.id}
            name={item.name}
            isStudent={item.isStudent}
          />
        ))}
      </div> */}
      {/* <div className="userCard">
        {data.map((item) => {
          return <HOFCOMPONENT user={item} />;
        })}
      </div> */}
      <StatelessComponent />

      {/* <Counter /> */}
      <CounterNew />
      {/* <Debouncing /> */}
      {/* <Header /> */}
      {/* <h1>Learning React </h1>
      // <Header />
      <Footer /> */}
    </div>
  );
}

export default App;
