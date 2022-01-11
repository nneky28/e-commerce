import React, { useState, useEffect, useContext } from "react";
import Nav from "../Components/Nav";
import HeaderCard from "../Components/HeaderCard";
import Supporters from "../Components/Supporters";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import ListFrame from "../Components/ListFrame";
import { userContext } from "../context/userContext";
import Center from "../Components/Center";

function ShopLeft({ inputHandle }) {
  const [products, setProducts] = useState([]);
  const { payload, setPayload } = useContext(userContext);
  // const {updatedFavourite, setUpdatedFavourite}=useContext(userContext);

  const Product = () => {
    fetch("http://127.0.0.1:2000/api/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.products);
      })
      .catch((error) => {
        alert(
          "Something went wrong! Please check your internet connection...."
        );
        console.log("error", error);
      });
  };
  useEffect(() => {
    Product();
  }, []);

  const leftFilter = (e) => {
    if (e.target.checked) {
      fetch(`http://127.0.0.1:2000/api/filter/${e.target.value}`)
        .then((response) => response.json())
        .then((filtered) => {
          setProducts(filtered);
          console.log("hello", filtered);
        });
    } else {
      Product();
    }
  };

  return (
    <div>
      <Nav />
      <HeaderCard title="Shop Left" />
      <Center />
      <div className="container">
        <div className="main">
          <div className="row mt-5">
            <SideBar inputHandle={leftFilter} />
            <div className="col-lg-9">
              {products.map((product) => (
                <ListFrame
                  key={product.id}
                  product={product}
                  id={product.id}
                  fav={product.favourites?.favourite}
                  name={product.name}
                  picture={product.picture_url1}
                  description={product.description}
                  price={product.Price}
                  sliced={Math.ceil(
                    product.price -
                      (product.slicedPercentage / 100) * product.price
                  )}
                />
              ))}
              {/* <ListFrame/> */}
            </div>
          </div>
        </div>
      </div>
      <Supporters />
      <Footer />
    </div>
  );
}

export default ShopLeft;
