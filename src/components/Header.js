import React from "react";


const Header = (props) => {
    console.log("Header", props.data)
    return (
       
        <div>
        <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-part-3/33/global_shopping-512.png"></img>
        </div>
           
        </div>
    )
}

export default Header;









