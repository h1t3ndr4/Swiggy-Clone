
import { Link } from "react-router-dom";
import { Restaurants } from "../RestaurantData";

export const Restaurant = () => {
    console.log(Restaurants)
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 23%)",
            gap: "0.75%",
            margin: "2% 0",
        }}>
            {Restaurants.map((e) => (
                <div style={{
                    padding: "10px"
                }}>
                    <img width="90%" src = {`${e.image_url}`} />
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
    )
}