import { Offers } from "./Offers";
import { Route, Routes } from "react-router-dom";
import { Restaurant } from "./Restaurant";
import { PaymentCoupons } from "./PaymentCoupons";
import { Home } from "./Home";
export const Routers = () => {
  
    return (
      <>
        <Offers/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/offers" element={<Restaurant/>}/>
          <Route path="offers/restaurant" element={<Restaurant/>}/>
          <Route path="offers/payment" element={<PaymentCoupons/>}/>

          {/* <Route path="/products" element={<ProductsPage/>}/> */}
          {/* <Route path="/products/:id" exact element={<ProductsDetailsPage/>}/> */}
        </Routes>
      </>
    );
  };
  