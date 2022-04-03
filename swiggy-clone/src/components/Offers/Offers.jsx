import { Link } from "react-router-dom"
import {NavBar} from "../Home/Navbar/Navbar"

export const Offers = () => {
    return(
        <div>
            <NavBar></NavBar>
            <div style={{
                backgroundColor: "#245062",
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 20px",
            }}>
                <div style={{
                    textAlign: "left",
                    color: "white",
                    justiftContent: "left",
                    paddingTop:"8%"
                }}>
                    <div style={{
                        fontSize: "40px",
                        fontWeight: "600",
                        fontFamily: "ProximaNova,arial,Helvetica Neue,sans-serif",
                    }}>Offers for you</div>
                    <div style={{
                        fontSize: "20px"
                    }}>Explore top deals and offers exclusively for you!</div>
                </div>
                <img width= "30%" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"></img>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "left",
                gap: "20px",
                paddingLeft: "10%"
            }}>
            <Link to= {"/offers/restaurant/"} >Restaurant offers</Link>
            <Link to= {"/offers/payment"}>Payment offers/Coupons</Link>
            </div>
            <hr />


        </div>
    )
}