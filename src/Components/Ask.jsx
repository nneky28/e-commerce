import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from './Button'

export default function Ask() {
  const [payload,setPayload] = useState({
    name: " ",
    question: " "
  })
  const navigate = useNavigate();

  const handleChange= (e)=>{
    console.log('payload',payload.name,payload.question);
     setPayload({...payload,[e.target.id]:e.target.value})
}


  const handleSubmit= ()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(payload),
    redirect: 'follow'
    };

    fetch('http://localhost:2000/api/info',
      requestOptions)
      .then(response => response.json())
      .then(result =>{
        console.log(result);

        navigate('/reg');
      })

      .catch(error => console.log('error', error));

    }
      useEffect(() => {
          console.log('message', payload)
          setPayload(payload)
      }, [])

  return (
    <div>
      <div className="card mt-5">
              <h3 className='onef mt-5 ms-5'>Ask Question</h3>
                <input type="text" id="name" placeholder='Your Name*' className='input mt-5' onChange={handleChange}
              value={payload.name}
              />
          
              <textarea name="" id="question" cols="10" rows="10" placeholder='Type your Message*' className='area mt-5' onChange={handleChange}
             value={payload.question}></textarea>

              <div className="btm ms-5 mt-5 px-2">
            <Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="2% 9%"
								name="Send Mail"
               press={handleSubmit}
							/>
               </div>

              
              </div> 
    </div>
  )
}
