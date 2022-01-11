import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";
import { PaystackConsumer } from "react-paystack";

function CartsTotal({ contactEmail, pageprop }) {
  let page = pageprop;
  const navigate = useNavigate();
  const { items, cartTotal, totalItems, emptyCart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const reference = new Date().getTime().toString();

  const config = {
    reference,
    email: `${user}`,
    amount: cartTotal * 100,
    publicKey: "pk_test_0cf400c602268d06bbba26454b61c1a4f858f698",
  };

  const saveorder = () => {
    items.map((item, i) => {
      console.log("item", item);

      let payload = {
        user_id: `${user_id}`,
        product_id: `${item.id}`,
        product_qty: `${item.quantity}`,
        product_price: `${item.price}`,
        product_total: `${item.itemTotal}`,
        trans_total: `${cartTotal}`,
        trans_ref: `${config.reference}`,
        trans_status: "pending",
      };
      fetch("http://localhost:2000/api/payment", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("dont stress me", response);
        })
        .catch();
    });
  };
  const handleSuccess = () => {
    fetch(`http://localhost:2000/api/update_status/${reference}`)
      .then((response) => response.json())
      .then((updated)=>{

      })
      .catch((error) => {
        console.log("please dont stress me", error);
      });

    emptyCart();
    navigate("/success");
    // console.log(reference)
  };

  const handleClose = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  //console.lo(config.amount);

  return (
    <div
      className="bt mb-3"
      style={{ width: "371px", height: "auto", backgroundColor: "#F4F4FC" }}
    >
      <div style={{ padding: "23px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            SubTotals:
          </p>
          <p
            style={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            ${cartTotal ? cartTotal : 0}.00
          </p>
        </div>
        <hr />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Quantity:
          </p>
          <p
            style={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {totalItems ? totalItems : 0}
          </p>
        </div>
        <hr />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Totals:
          </p>

          <p
            style={{
              color: "#1D3178",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            ${contactEmail && cartTotal ? cartTotal + 50 : cartTotal}.00
          </p>
        </div>
        <hr />
      </div>
      <div class="form-check">
        <input type="checkbox" checked />
        <label
          class="form-check-label"
          for="flexCheckChecked"
          style={{ fontFamily: "lato", fontWeight: 400, fontSize: "12px" }}
        >
          <span style={{ paddingLeft: "8px" }}>
            Shipping & taxes calculated at checkout
          </span>
        </label>
      </div>

      {!pageprop ? (
        <Link to="/demo">
          <div className="container mt-3 mb-5">
            <Button
              border="0"
              background="#19D16F"
              color="#fff"
              radius="3px"
              font="Lato"
              padding="7px 75px"
              name="Proceed to Checkout"
              // width="100%"
              margin="35px auto"
              // press={}
            />
          </div>
        </Link>
      ) : (
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <div className="container mt-3">
              <Button
                border="0"
                background="#19D16F"
                color="#fff"
                radius="3px"
                font="Lato"
                padding="7px 75px"
                name="Proceed to Checkout"
                // width="100%"
                margin="35px auto"
                press={() => {
                  fetch("http://localhost:2000/api/blog")
                    .then((response) => response.json())
                    .then(function (data) {
                      saveorder();
                      initializePayment(handleSuccess, handleClose);
                    });
                }}
              />
            </div>
          )}
        </PaystackConsumer>
      )}
    </div>
  );
}

export default CartsTotal;
