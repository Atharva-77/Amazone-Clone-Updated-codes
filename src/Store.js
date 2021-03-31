import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer} from './Reducers/productReducer'
import {composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from "./Reducers/cartReducer";
import { userLoginReducer,userRegisterReducer, userProfileDetailsReducer } from "./Reducers/userReducer";
import { orderListReducer,getorderListReducer,orderPayReducer } from "./Reducers/orderReducer";


// const initialState={}


const reducer=combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cartList: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userProfileDetails:userProfileDetailsReducer,
    orderList:orderListReducer,
    getorderList:getorderListReducer,
    orderPay:orderPayReducer,
    
})


// const cartItemStorage= localStorage.getItem('cartItemsss') ? JSON.parse(localStorage.getItem('cartItemsss')): []
    
// const cartItemStorage=[]
// console.log("STORECartItem",cartItemStorage);

    // const initialState=
    // {
    //     cartList: {cartItemsss:cartItemStorage}
    // }
// const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;