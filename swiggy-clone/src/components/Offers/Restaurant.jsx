
import { Offers } from "../Offers/Offers";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"

export const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  const getData = () => {
    fetch("https://server-swiggy.herokuapp.com/restaurants/").then((res) => res.json())
    .then((data) => (setRestaurants(data)));
  }

 useEffect(() => {
  getData();
 }, [])
 

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 23%)",
          gap: "0.75%",
          margin: "2% 0",
        }}
      >
        <Offers />
        {restaurants.map((e) => (
          
          <div   to = {`/restaurant/id`}
            style={{
              padding: "10px",
            }}
          >
            <img width="90%" src={`${e.image_url}`} />
            <h2>{e.title}</h2>
            <p>{e.categories}</p>
            <p>{e.rating}</p>
            <p>{e.delivery_time} MINS</p>
            <p>{e.price} FOR TWO</p>
          </div>
        ))}
        <br />
        Restarent page
      </div>
    </>
  );
};
