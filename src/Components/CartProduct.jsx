import React from 'react'
import "./Carts.css"
import { useCart } from "react-use-cart";
import { FaTimes } from "react-icons/fa";

function CartProduct({name,color,size,price,picture,qty,item}) {
    const{removeItem,updateItemQuantity} = useCart();

    return (
        <div>
      <FaTimes
        // className="cart-icon"  
        onClick={() => removeItem(item.id)}
        style={{ cursor: "pointer", float: "left", color: "red" }}
      />
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-3 cart-img-div">
              <img
                className="cart-img"
                src={`http://127.0.0.1:2000/images/${picture}`}
                alt=""
              />
            </div>
            <div className="col-lg-9">
              <h6>{name}</h6>
              <p>
                Color:{color}
                {/* <span style={{ float: "right" }}>$32.00</span> */}
              </p>
              <p>Size: {size}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <p className="pt-4">${price}</p>
        </div>
        <div className="col-lg-2">
          <div>
            <h6 className="pt-4">
              <i
                style={{ cursor: "pointer" }}
                class="fa fa-minus me-2"
                aria-hidden="true"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              ></i>
              <span>{qty}</span>
              <span>
                <i
                  style={{ cursor: "pointer" }}
                  class="fa fa-plus ms-2"
                  aria-hidden="true"
                  // onClick={()=>addItem(item)}
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                ></i>
              </span>
            </h6>
          </div>
        </div>
        <div className="col-lg-2">
          <p className="pt-4">${price * qty}</p>
        </div>
      </div>
      <hr />
    </div>
    
    )
}

export default CartProduct
