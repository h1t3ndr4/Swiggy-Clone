
import {ADD_RESTAURANT} from "./action";
import {addRestaurant} from "./action";

const initState = {
    restaurant: JSON.parse(localStorage.getItem('restaurant')) || {}
};

// reducer function
export const restReducer = (store = initState, {type, payload}) => {
   switch (type) {
    case ADD_RESTAURANT:
        localStorage.setItem('restaurant', JSON.stringify({...payload}));
        return {...store, restaurant: {...payload}};
        default:
            return store;
   }
}

