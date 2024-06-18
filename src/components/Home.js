import React from "react";


const Home = (props) => {
    console.log("props", props)
    return (
       
        <div>
       
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-2515306895701eqxj.png" />
                </div>

                <div className="text-wrapper item">
                    <span>
                        I-PHONE
                    </span>

                    <span>
                        PRICE : $1000
                    </span>

                </div>

                <div className="btn-wrapper item">
                    <button onClick={() => {props.addToCartHandler({price:1000, name: " I-PHONE"})}
                }>Add To Cart</button>
                
                <button className="remove-cart-btn" onClick={() => {props.removeToCartHandler()}
            }>Remove To Cart</button>
            


                </div>
            </div>
        </div>
    )
}

export default Home;









