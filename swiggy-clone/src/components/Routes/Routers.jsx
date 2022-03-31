

import { Route, Routes } from "react-router-dom";

import { Home } from "../Home/home";
import { Restaurant } from "../Restaurant/Restaurant";

export const Routers = () => {

    return (
        <>
         <Routes>
             <Route path = {"/"} element = {<Home />} />
             <Route path = {"/restaurants"} element = {<Home />} />
             <Route path = {"/restaurant/id"} element = {<Restaurant />} />
         </Routes>
        </>
    )
}