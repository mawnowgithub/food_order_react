import React from "react"

const CartContext= React.createContext({
    products:[],
    itemsAmount: 0,
    purchaseProcess: ()=>{},
    removeProcess: ()=>{}
})

export default CartContext