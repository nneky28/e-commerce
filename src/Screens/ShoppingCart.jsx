import React, { useState } from "react";
import Nav from "../Components/Nav";
import HeaderCard from "../Components/HeaderCard";
import Supporters from "../Components/Supporters";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import CartProduct from "../Components/CartProduct";
import CartsTotal from "../Components/CartsTotal";
import CalculateShipping from "../Components/CalculateShipping";
import ReactPaginate from 'react-paginate';



function ShoppingCart() {
  const navigate = new useNavigate();

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productsInCart"))
  );
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div>
      <Nav />
      <HeaderCard title="Shopping Cart" />
      <div className="container shopping-div mt-5 p-3">
        <div className="shopping-cart">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="text-item mb-4">Product</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="text-item mb-4">Price</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="text-item mb-4">Quantity</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="text-item mb-4">Total</h6>
                </div>
              </div>
              {isEmpty ? (
                <h6 style={{ color: "red" }} className="empty-cart text-center">
                  Your Cart is empty! <span style={{ color: "black" }}></span>
                </h6>
              ) : (
                <>
                  {items.map((item, i) => {
                    return (
                      <CartProduct
                        item={item}
                        key={i}
                        picture={item.picture_url1}
                        price={item.price}
                        color={item.color}
                        size={item.size}
                        name={item.name}
                        qty={item.quantity}
                      />
                    );
                  })}
                </>
              )}

              <div className="row">
                <div className="col-lg-3">
                  <Button
                    border="0"
                    background="#FB2E86"
                    color="#fff"
                    radius="2px"
                    font="Josefin Sans"
                    // padding="1% 42%"
                    name="Update Cart"
                  />
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>

                <div className="col-lg-3">
                  <Button
                    border="0"
                    background="#FB2E86"
                    color="#fff"
                    radius="2px"
                    font="Josefin Sans"
                    // padding="1% 42%"
                    name="Clear Cart"
                    press={() => emptyCart()}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h6 className="text-item mb-4 text-center">Cart Totals</h6>
              <CartsTotal />
              <h6 className="text-item mb-4 mt-4 text-center">
                Calculate Shopping
              </h6>
              <CalculateShipping />
            </div>
          </div>
        </div>
      </div>

      <Supporters />
      <Footer />
    </div>
  );
}

export default ShoppingCart;
