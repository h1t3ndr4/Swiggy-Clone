import { Link } from "react-router-dom"

export const Offers = () => {
    return(
        <div>
            <div style={{
                backgroundColor: "#245062",
                display: "flex",
                justifyContent: "space-around"
            }}>
                <div>
                    <h1>Offers for you</h1>
                    <p>Explore top deals and offers exclusively for you!</p>
                </div>
                <img width= "30%" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"></img>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "left",
                gap: "20px",
                paddingLeft: "10%"
            }}>
            <Link to="offers/restaurant">Restaurant offers</Link>
            <Link to="offers/payment">Payment offers/Coupons</Link>
            </div>
            <hr />


        </div>
    )
}