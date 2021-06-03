import React from "react"

const CartContext= React.createContext({
    products:[],
    purchaseProcess: ()=>{}
})

export default CartContext