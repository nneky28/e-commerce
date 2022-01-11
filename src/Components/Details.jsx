import "./Details.css";
import React, { useState } from "react";

function Details({
  picture1,
  picture2,
  picture3,
  picture4,
  name,
  price,
  sliced,
  description,
  color,
  inCart,
}) {
  const [singleImage, setSingleImage] = useState();

  const changeImage = (theImage) => {
    setSingleImage(theImage);
    // alert("jajajaj")
  };
  return (
    <div
      className="row ms-2 p-5 mt-5 me-5"
      style={{
        boxShadow: "0px 0px 25px 10px #F6F4FD",
        borderRadius: "2px",
        backgroundColor: "#fff",
      }}
    >
      <div className="col-lg-2">
        <div className="cad mb-3" style={{ background: "hsla(0, 0%, 77%, 5)" }}>
          <img
            onClick={() => changeImage(picture1)}
            src={`http://127.0.0.1:2000/images/${picture1}`}
            className="mt-1 imaj"
            alt="bag1"
          />
        </div>
        <div className="cad mb-3" style={{ background: "hsla(0, 0%, 77%, 1)" }}>
          <img
            onClick={() => changeImage(picture2)}
            src={`http://127.0.0.1:2000/images/${picture2}`}
            className="mt-1 imaj"
            alt="bag2"
          />
        </div>

        <div className="cad mb-2" style={{ background: 'hsla(0, 0%, 77%, 1)'}}>
						<img
						onClick={()=> changeImage(picture3)} 
						src={`http://127.0.0.1:2000/images/${ picture3}`}className='mt-1  imaj'  alt="bag3" />
						</div>
      </div>
      {!singleImage ? (
        <div className="col-lg-4">
          <div className="car4">
            <img
              src={`http://127.0.0.1:2000/images/${picture3}`}
              className="card-img mt-1 pt-5"
              alt="bag4"
            />
          </div>
        </div>
      ) : (
        <div className="col-lg-4">
          <div className="car4">
            <img
              src={`http://127.0.0.1:2000/images/${singleImage}`}
              className="card-img mt-1 pt-5"
              alt="bag4"
            />
          </div>
        </div>
      )}

      <div className="col-lg-6 mt-5">
        <div className="" style={{ padding: "8px 25px" }}>
          <div className="">
            <div className="col-lg-12 mt-5">
              <p
                className="card-title"
                style={{ fontFamily: "Josefin Sans", fontSize: "24px" }}
              >
                {name}
              </p>
            </div>
          </div>
          <div className="prices">
            <span>
              <i className="far fa-star" style={{ color: "yellow" }} />
              <i
                className="far fa-star"
                style={{ marginLeft: "5px", color: "yellow" }}
              />
              <i
                className="far fa-star"
                style={{ marginLeft: "5px", color: "yellow" }}
              />
              <i
                className="far fa-star"
                style={{ marginLeft: "5px", color: "yellow" }}
              />
              <i
                className="far fa-star"
                style={{ marginLeft: "5px", color: "yellow" }}
              />
            </span>
            <span style={{ color: "blue" }}>(22)</span>
          </div>
          <div>
            <span className="card-price" style={{ color: "blue" }}>
              ${sliced}.00
            </span>
            <span
              className="card-price-former ms-2"
              style={{ color: "#f939bf", textDecoration: "line-through" }}
            >
              ${price}
            </span>
          </div>

          <div className="item-description">
            <p
              style={{
                color: "blue",
                marginBottom: 0,
                fontFamily: "Josefin Sans",
              }}
            >
              {color}
            </p>

            <p>{description}.</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                padding: "5px",
                fontFamily: "Josefin Sans",
                color: "blue",
              }}
            >
              Add To Cart
            </button>
            <span>
              <i className="far fa-heart" style={{ padding: "0 8px" }} />
              {inCart}
            </span>
          </div>
          <div>
            <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
              Categories:
            </p>
            <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>Tags:</p>
            <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
              Share:
              <span>
                <i
                  className="fab fa-facebook"
                  style={{ color: "blue", paddingLeft: "8px" }}
                />
              </span>
              <span>
                <i
                  className="fab fa-instagram-square"
                  style={{ color: "#FB2E86", paddingLeft: "8px" }}
                />
              </span>
              <span>
                <i
                  className="fab fa-twitter-square"
                  style={{
                    color: "#37DAF3",
                    borderRadius: "1em",
                    paddingLeft: "8px",
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
