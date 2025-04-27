import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{
    const[listOfRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurants, setfilteredRestaurants] = useState([]);
    const[ searchText, setSearchText ] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.eatsure.com/v1/api/get_restaurants?"
        );
        const json = await data.json();
        console.log(json?.data?.data);
        setListOfRestaurants(json?.data?.data);
        setfilteredRestaurants(json?.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    return listOfRestaurants.length === 0 ? ( <Shimmer/> )  :(
      <div className="body">
          <div className="search">
            <input type="text" 
            className="search-box" 
            value={searchText} 
            onChange={(e) =>{setSearchText(e.target.value)}}/>
            <button onClick={ () => {
              const filteredRestaurants = 
              listOfRestaurants.filter((res) => res.brand_name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredRestaurants(filteredRestaurants);
            }}>Search</button>
        </div>

        <div className="rest-container">
          {
            filteredRestaurants.map((restaurant,index) =>(
              <RestaurantCard key={index} restData={restaurant} />
            ))

          }
        </div>
      </div>
    )
};

export default Body;