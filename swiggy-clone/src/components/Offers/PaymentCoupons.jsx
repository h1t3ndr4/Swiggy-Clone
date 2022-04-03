import { Offers } from "./Offers"
import { Link } from "react-router-dom"
import { Coupons } from "./Coupons"
import PaymentOffers from "../Offers1/PaymentOffers";

export const PaymentCoupons = () => {
    return (
        <div style={{
            margin: "0px 20px",

        }}>
            <Offers></Offers>
            <h2 style={{
                bodrer: "1px solid grey",
                justifyContent: "left"
            }}>Available Coupons</h2>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75%",
            margin: "2% 0",
        }}>
            {/* {Coupons.map((e) => (
                <div style={{
                    border: "1px solid grey",
                    textAlign: "left",
                    margin: "0px 30px 40px 0px",
                    padding: "30px"
                }}>
                    <div style={{
                        display: "flex",
                        border: "1px solid grey"
                    }}>
                        <img src = {e.icon} style = {{
                            width:"15%",
                        }} />
                        <p>{e.code}</p>
                    </div>
                    <div>{e.discount}</div>
                    <div><small>{e.cashback}</small></div>
                    <button>+ MORE</button>
                    
                    <br/>
                    <button style={{
                        color: "#FC8019",
                        border: "1px solid #FC8019",
                        padding: "0px 15px",
                        fontFamily: "Proxinova, arial,",
                        fontSize: "14px",
                        cursor: "pointer"
                    }}>COPY CODE</button>
                </div>
            ))} */}
            <PaymentOffers></PaymentOffers>
            </div>
        </div>
    )
}