
import Nav from '../Components/Nav'
import Button from '../Components/Button'
import './Login.css'
import Supporters from '../Components/Supporters'
import Footer from '../Components/Footer'
import { useNavigate } from "react-router-dom";
import { userContext } from '../context/userContext';
import React, { useContext, useEffect, useState } from "react";
import HeaderCard from '../Components/HeaderCard'


export default function Login() {

  const {user, setUser} = useContext(userContext)
  const [payload,setPayload] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();


  const handleChange= (e)=>{
      // console.log('payload',payload.email,payload.password,);
    setPayload({...payload,[e.target.id]:e.target.value})
  }

  const handleSubmit = () =>{

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow'
      };

      fetch('http://localhost:2000/api/login',
        requestOptions)
        .then(response => response.json())
        .then(result =>{
          // console.log("result",result);
          // alert(result.msg);

          if(result.res){
            console.log(result.res);
            localStorage.setItem('user_id',JSON.stringify(result.res.id))
            localStorage.setItem("user", JSON.stringify(result.res.email));
            localStorage.setItem("token", JSON.stringify(result.res.token))
            setUser(result.res.email)
          
            navigate('/success');
        }else{
            console.log('not right')
        }
        })

        .catch(error => console.log('error', error));

      }
      useEffect(() => {
          'page is loaded'
          console.log('user', user)
          setUser(user)
      }, [])

  return (
    <div>
     <Nav />
      <HeaderCard title='My Account' />
      
          <div className="box mt-5">
              <h3 className='log'>Login</h3>
              <p className='log1'>Please login using account details below</p>

            <input type="email"  placeholder='Email'id='email' onChange={handleChange}
            value={payload.email}   className='ms-4 mt-5'/>
              <input type="text" placeholder='password'id='password' onChange={handleChange}
            value={payload.password} className='ms-4 mt-3' />

        <p className='lego ms-4 mt-2'>Forgot your Password?</p>
         
      <div className="btm ms-4">
            <Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="1% 42%"
								name="Login"
                press={handleSubmit}
							/>

        </div>
        <p className='log1 ms-2 mt-2 mb-5'>Don't have an Account? Create Account</p>
        </div>
     
<Supporters />
<Footer />


    </div>
  )
}
