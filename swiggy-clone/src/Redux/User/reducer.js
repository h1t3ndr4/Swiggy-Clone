
import {ADD_AUTH, ADD_USER, ADD_CART, REM_DISH} from "./action";

const initState = {
    isAuth: JSON.parse(localStorage.getItem("auth")) || "No",
    userLogged: JSON.parse(localStorage.getItem("user")) || {}
}

export const loginReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case ADD_AUTH:
                localStorage.setItem("auth", JSON.stringify("Yes"));
                return {...store, isAuth: JSON.parse(localStorage.getItem("auth"))}
        case ADD_USER: 
        localStorage.setItem("user", JSON.stringify({...payload, password: "XXXXXXX"}));
        return {...store, userLogged: JSON.parse(localStorage.getItem("user"))};
        case ADD_CART: 
           store.userLogged.cart.push(payload);
           console.log(store.userLogged);
          localStorage.setItem("user", JSON.stringify(store.userLogged));
          return {...store, userLogged: JSON.parse(localStorage.getItem("user"))}
          case REM_DISH: 
             const newDishes = store.userLogged.cart.filter((e) => (e._id !== payload));
             store.userLogged.cart = [...newDishes];
             localStorage.setItem("user", JSON.stringify({...store.userLogged}));
             console.log(store.userLogged);
             return {...store, userLogged: JSON.parse(localStorage.getItem("user"))}
        default:
            return store;
    }
}