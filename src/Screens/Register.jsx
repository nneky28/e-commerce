import Nav from "../Components/Nav";
import Button from "../Components/Button";
import HeaderCard from "../Components/HeaderCard";
import "./Login.css";
import Supporters from "../Components/Supporters";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import React, { useContext, useEffect, useState } from "react";

export default function Register() {
  const { user, setUser } = useContext(userContext);
  const { jwt, setJwt } = useContext(userContext);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("payload", payload.email, payload.password);
    setPayload({ ...payload, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const testing = {
      ...payload,
    };
  
    console.log("hey", testing);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(testing),
      redirect: "follow",
    };

    fetch("http://localhost:2000/api/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.output){

          navigate("/login");
        }

      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    "page is loaded";
    console.log("user", user);
    setUser(user);
  }, []);

  return (
    <>
      <Nav />
      <HeaderCard title="My Account" />
      <div className="box">
        <h3 className="log">Sign Up</h3>
        <p className="log1">Please Register using account details below</p>

        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={payload.email}
          className="ms-4 mt-5 mb-3"
        />

        <input
          type="text"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          value={payload.password}
          className="ms-4"
        />

        <p className="lego ms-4 mt-2">Forgot your Password?</p>

        <div className="btm ms-4">
          <Button
            border="0"
            background="#FB2E86"
            color="#fff"
            radius="2px"
            font="Josefin Sans"
            padding="1% 40%"
            name="Sign Up"
            press={handleSubmit}
          />
        </div>
        <p className="log1 ms-2 mt-2 mb-5">
          Already have an Account? Create Account
        </p>
      </div>
      <Supporters />
      <Footer />
    </>
  );
}
