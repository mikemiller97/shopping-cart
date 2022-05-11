import React from "react"

export default function Item (props) {
    let [quantity, setQuantity] = React.useState(0)

    function increment() {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    function decrement() {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1)
        }
    }

    function addToCart() {
        props.setItemsCount((prevItemsCount) => prevItemsCount + quantity)
    }

    return ( 
    <div className="item" >
        <p>{props.name}</p>
        <img src={props.image} alt="the product"/>
        <div className="quantity">
        <button onClick={decrement}>-</button>
            <p>{quantity}</p>
            <button onClick={increment}>+</button>
        </div>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
    )
}