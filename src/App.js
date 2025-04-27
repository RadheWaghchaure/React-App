import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const restList = {
  "restaurants": [
    {
      "name": "Spice Garden",
      "image": "https://b.zmtcdn.com/data/pictures/3/19265313/3d9e514f84d04111e1a7c7dc904a04ab_o2_featured_v2.jpg",
      "location": "Downtown, Cityville",
      "rating": 4.5,
      "cuisine": ["Indian", "Asian Fusion"],
      "deliveryTime": "30-45 mins",
      "priceRange": "400"
    },
    {
      "name": "The Burger Joint",
      "image": "https://b.zmtcdn.com/data/dish_photos/60c/44f7ef5560ab3599ee3cdfd98f7ce60c.jpeg?fit=around|130:130&crop=130:130;*,*",
      "location": "Uptown, Cityville",
      "rating": 4.2,
      "cuisine": ["American"],
      "deliveryTime": "25-35 mins",
      "priceRange": "150"
    },
    {
      "name": "Sushi World",
      "image": "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
      "location": "Midtown, Cityville",
      "rating": 4.7,
      "cuisine": ["Japanese"],
      "deliveryTime": "40-50 mins",
      "priceRange": "400"
    },
    {
      "name": "Pasta Palace",
      "image": "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid&w=740",
      "location": "West End, Cityville",
      "rating": 4.4,
      "cuisine": ["Italian"],
      "deliveryTime": "30-40 mins",
      "priceRange": "200"
    },
    {
      "name": "Taco Fiesta",
      "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490",
      "location": "Southside, Cityville",
      "rating": 4.3,
      "cuisine": ["Mexican"],
      "deliveryTime": "20-30 mins",
      "priceRange": "600"
    },
    {
      "name": "BBQ Nation",
      "image": "https://static01.nyt.com/images/2024/07/18/multimedia/18grilled-vegetable-mainsrex4-cbjp/grilled-vegetable-mainsrex1-cbjp-mediumSquareAt3X.jpg",
      "location": "Riverfront, Cityville",
      "rating": 4.0,
      "cuisine": ["Barbecue"],
      "deliveryTime": "45-55 mins",
      "priceRange": "350"
    },
    
    {
      "name": "Pizza Planet",
      "image": "https://c8.alamy.com/comp/2RT56X6/pizza-party-dinner-table-with-various-kinds-of-italian-pizza-salad-and-red-wine-on-a-black-background-top-view-2RT56X6.jpg",
      "location": "Midtown, Cityville",
      "rating": 4.3,
      "cuisine": ["Italian", "Pizza"],
      "deliveryTime": "25-35 mins",
      "priceRange": "700"
    },
    {
      "name": "Noodle Nook",
      "image": "https://www.wellplated.com/wp-content/uploads/2016/07/Asian-Noodle-Salad-with-Peanut-Sauce.jpg",
      "location": "Downtown, Cityville",
      "rating": 4.4,
      "cuisine": ["Thai", "Asian Fusion"],
      "deliveryTime": "30-40 mins",
      "priceRange": "150"
    },
    {
      "name": "Deli Fresh",
      "image": "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg",
      "location": "Financial District, Cityville",
      "rating": 4.1,
      "cuisine": ["Sandwiches", "Salads"],
      "deliveryTime": "15-25 mins",
      "priceRange": "100"
    },
    {
      "name": "Ramen Republic",
      "image": "https://www.allrecipes.com/thmb/MZjbph8PbP6wTscsqFsoRKsM-ls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/237732-top-ramen-salad-1x1-455-copy-23dd9fbbd1274316b49148aef951d9de.jpg",
      "location": "College Town, Cityville",
      "rating": 4.3,
      "cuisine": ["Japanese", "Ramen"],
      "deliveryTime": "25-35 mins",
      "priceRange": "200"
    },
    {
      "name": "Biryani House",
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ymjvq1ewa4tnzbpmqnip",
      "location": "Downtown, Cityville",
      "rating": 4.4,
      "cuisine": ["Indian"],
      "deliveryTime": "30-40 mins",
      "priceRange": "400"
    },
    
  ]
}


const RestaurantCard = (props) =>{
  const {restData} = props;
  const {name, image, location,rating,cuisine,deliveryTime,priceRange} = restData;
  return(
    <div className="rest-card">
      <img
        className="rest-logo"
        alt="rest-logo"
        src={image} />
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{priceRange}</h4>

    </div>

  )
}

const AppLayout = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(<AppLayout/>);




 