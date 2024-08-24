import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./../Style/search.css";
import PopularRestaurant from "../UI/PopularRestaurant";
import SearcheData from "../UI/SearcheData";

const Search = () => {
  const [Restaurant, setRestaurant] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const items = Restaurant.slice(0, 8);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/restaurant.json");
      if (response.status === 200) {
        const data = await response.json();
        setRestaurant(data);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setInputValue(queryParam);
    }
  }, [searchParams]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsInputEmpty(inputValue === "");
      navigate(`?query=${inputValue}`);
      if (inputValue.trim() !== "") {
        const filtered = Restaurant.filter((restaurant) =>
          restaurant?.info?.name
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        );
        setFilteredRestaurants(filtered);
      } else {
        setFilteredRestaurants([]);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [inputValue, navigate]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCuisineClick = (cuisineName) => {
    setInputValue(cuisineName);
  };

  return (
    <div className="search">
      <div className="searchContainer">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="searchField"
          placeholder="Search Restaurants and Food"
        />
      </div>
      {isInputEmpty && (
        <>
          <h3 className="heading">Popular Restaurants</h3>
          <div className="searCuisineContainer">
            {items.map((res) => (
              <PopularRestaurant
                res={res}
                handleCuisineClick={handleCuisineClick}
              />
            ))}
          </div>
        </>
      )}
      {!isInputEmpty && filteredRestaurants.length === 0 ? (
        <div className="searchNotFound">
          <p>This restaurant is not listed</p>
          <p>Please enter some Other Restaurant Name</p>
        </div>
      ) : (
        <div className="searched">
          {filteredRestaurants.map((res) => (
            <SearcheData res={res} navigate={navigate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
