import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART} from  '../actions';
 
const initProduct = localStorage.getItem("UserCart") ? {...JSON.parse(localStorage.getItem("UserCart"))} 
: {
    numberCart:0,
    Carts:[],
    _products:[]
}
console.log("initProduct: ",initProduct)
 
function todoProduct(state = initProduct,action){
    console.log("Payload: ", action.payload);
    switch(action.type){
        case GET_ALL_PRODUCT:
            return{
                ...state,
                _products:action.payload
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            console.log("so luong na:",action.payload.soLuong)
            if(state.numberCart==0){
                let cart = {
                    id:action.payload.maSP,
                    quantity:action.payload.soLuong ,
                    name:action.payload.tenSP,
                    image: action.payload.anhSP,
                    price:action.payload.giaSP,
                    storeID: action.payload.account_CH, 
                }
                state.Carts.push(cart);
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.payload.maSP){
                        state.Carts[key].quantity+=action.payload.soLuong;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.maSP,
                        quantity:action.payload.soLuong,
                        name:action.payload.tenSP,
                        image: action.payload.anhSP,
                        price:action.payload.giaSP,
                        storeID: action.payload.account_CH,
                    }
                    state.Carts.push(_cart);
                }
            }
            console.log("state ne:",state)
            let cart2 = {...state, numberCart: state.numberCart+action.payload.soLuong}
            localStorage.setItem("UserCart",JSON.stringify(cart2));
            return{
                ...state,
                numberCart:state.numberCart+action.payload.soLuong
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
                localStorage.setItem("UserCart",JSON.stringify(state));
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                let quantity = state.Carts[action.payload].quantity;
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
                localStorage.setItem("UserCart",JSON.stringify(state));
                return{
                    ...state
                }
            case DELETE_CART:
                
                let quantity_ = state.Carts[action.payload].quantity;
                let cart = {
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!=state.Carts[action.payload].id
                    })
                }
                localStorage.setItem("UserCart",JSON.stringify(cart));
                return cart
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;
