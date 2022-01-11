import React from "react";
import "./Card.css";
import { useCart } from "react-use-cart";
import { useNavigate } from 'react-router';

export default function Card({ id,picture, name, price, sliced, fav, product }) {
  const { addItem } = useCart();

  const navigate = new useNavigate();
	const handleSingle =()=>{
		navigate(`/products/${id}`)
	}
  return (
    <div className="col-lg-3 col-md-6 col-xs-12 mb-5 grid-box">
      <div class="car">
      <img src={`http://127.0.0.1:2000/images/${ picture}`} alt="" className="card-img-top img-responsive" onClick={handleSingle} />

        <div className="cart-icon">
          <i
          style={{ cursor: "pointer" }}
            className="fas fa-cart-plus item-actions p-3"
            onClick={() => addItem(product)}
          />
          <i
            className="far fa-heart item-actions p-3"
            onClick={() => addItem(fav)}
          />
          <i className="fas fa-search-plus item-actions p-3" />
        </div>
      </div>
      <p class="card-text text-center">{name}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#DE9034",
            borderRadius: "100%",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#EC42A2",
            borderRadius: "100%",
            marginLeft: "6px",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#8568FF",
            borderRadius: "100%",
            marginLeft: "6px",
          }}
        ></div>
      </div>
      <p className="card-text text-center">
        <small className="text-muted p-2">${price}</small>
        <span style={{ color: "pink", textDecoration: "line-through" }}>
          ${sliced}
        </span>
      </p>
    </div>
  );
}
