
export const ADD_USER = "ADD_USER";
export const ADD_AUTH = "ADD_AUTH";
export const ADD_CART = "ADD_CART";
export const REM_DISH = "REM_DISH";

export const addUser = (value) => ({type: ADD_USER, payload: value});

export const addAuth = (item) => ({type: ADD_AUTH, payload: item});

export const addCart = (item) => ({type: ADD_CART, payload: item});

export const remDish = (item) => ({type: REM_DISH, payload: item});