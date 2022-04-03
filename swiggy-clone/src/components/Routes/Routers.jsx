import { Route, Routes } from "react-router-dom";

import Help from "../Help/Help";
import { MyAccountsOrders } from "../Accounts/MyAccountsOrders";
import { Home } from "../Home/home";
import { Restaurant } from "../Restaurant/Restaurant";
import { GridTemplateColumns } from "../Offers/GridBox";
import { PaymentCoupons } from "../Offers/PaymentCoupons";
import { Successful } from "../payment/Success";
import { Payment } from "../payment/payment";
import  Landing  from "../landing/landing";
import Cart from "../cart/Cart";
import Search from "../Search/Search";
import PaymentOffers from "../Offers1/PaymentOffers";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/restaurants"} element={<Home />} />
        <Route path={"/restaurant/id"} element={<Restaurant />} />
        <Route path={"/offers/restaurant/"} element={<GridTemplateColumns />} />
        <Route path={"/offers/payment"} element={<PaymentCoupons />} />

        <Route path="/help" element={<Help />}></Route>
        <Route path="/my-account/:comp" element={<MyAccountsOrders />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment/" element={<Payment />}></Route>
        <Route path="/successful/" element={<Successful />}></Route>
        <Route path="/search/" element={<Search />}></Route>

        {/* <Route path="/offers/payment" element={<PaymentOffers />}></Route> */}
      </Routes>
    </>
  );
};
