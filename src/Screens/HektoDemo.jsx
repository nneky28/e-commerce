import React, { useContext, useState } from "react";
import ContactForm from "../Components/ContactForm";
import CartsTotal from "../Components/CartsTotal";
import ContactProduct from "../Components/ContactProduct";
import { userContext } from "../context/userContext";
import Nav from "../Components/Nav";
import HeaderCard from "../Components/HeaderCard";
import Footer from "../Components/Footer";
import { useCart } from "react-use-cart";

function Contact() {
  const { cartTotals, setCartTotals } = useContext(userContext);
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

  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  // useEffect(() => {
  //     // if(cartTotal){
  //         setCartTotal(cartTotals)
  //     // }
  // }, [cartTotal])

  // console.log(products[0].product_color)
  return (
    <div>
      <Nav />
      <HeaderCard title="Hekto Demo" />
      <div className="header">
        <div className="container">
          <h1 id="title">Contact Address</h1>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "32px", borderRadius: "3px" }}
      >
        <div className=" row ">
          <ContactForm />
          <div className="col-lg-4">
            <div>
              {cartItems
                ? cartItems.map((product, index) => (
                    //    console.log(product.product_picture)
                    <ContactProduct
                      key={product.id}
                      product={product}
                      color={product.color}
                      size={product.size}
                      id={product.id}
                      fav={product.favourites?.favourite}
                      name={product.name}
                      picture={product.picture_url1}
                      price={product.price}
                      sliced={Math.ceil(
                        product.price -
                          (product.slicedPercentage / 100) * product.price
                      )}
                      key={index}
                      product={product}
                    />
                  ))
                : ""}
            </div>
            <div>
              <CartsTotal pageprop={true} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
