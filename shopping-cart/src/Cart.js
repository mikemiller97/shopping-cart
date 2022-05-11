import React from "react"
import Item from "./Item"

export default function Cart() {
    let [itemsCount, setItemsCount] = React.useState(0)

    return (
        <div className="cart">
            <div className="banner">
            <p>You have {itemsCount} items in your cart</p>
            <button>Checkout</button>
            </div>
            <div className="items-list">
                <Item
                    name = "Soap"
                    itemsCount = {itemsCount}
                    setItemsCount = {setItemsCount}
                    image = "https://i5.walmartimages.com/asr/f1b22a66-95b7-4cf7-8191-6eeeaffa3138_2.f41353ce6e029d9ed1c6fec4042628f9.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                />
                <Item 
                    name = "Toothpase"
                    itemsCount = {itemsCount}
                    setItemsCount = {setItemsCount}
                    image = "https://m.media-amazon.com/images/I/71N7pOlkSYL._SL1500_.jpg"
                />
                <Item
                    name = "Grenade"
                    itemsCount = {itemsCount}
                    setItemsCount = {setItemsCount}
                    image = "https://upload.wikimedia.org/wikipedia/commons/2/20/MkII_07.JPG"
                />
            </div>
        </div>
    )
}