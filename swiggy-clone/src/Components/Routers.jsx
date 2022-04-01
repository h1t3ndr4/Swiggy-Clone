import { Offers } from "./Offers/Offers";
import { Route, Routes } from "react-router-dom";
import { Restaurant } from "./Offers/Restaurant";
import { PaymentCoupons } from "./Offers/PaymentCoupons";
import { Home } from "./Home";
import { GridTemplateColumns } from "./Offers/GridBox";
export const Routers = () => {
  
    return (
      <>
        <Offers/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/offers" element={<Restaurant/>}/>
          <Route path="offers/restaurant" element={<GridTemplateColumns/>}/>
          <Route path="offers/payment" element={<PaymentCoupons/>}/>

          {/* <Route path="/products" element={<ProductsPage/>}/> */}
          {/* <Route path="/products/:id" exact element={<ProductsDetailsPage/>}/> */}
        </Routes>
      </>
    );
  };
  