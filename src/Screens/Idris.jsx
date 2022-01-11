import React, { useState } from 'react'

export default function Idris() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    username:'',
  });
  const [display, setDisplay]=useState([])

    const handlePlus =()=>{
      setCount(count +1);
    }
    const handleMinus = ()=>{
      if(count === 0){
        setCount = 0;
      }else{

      setCount(count -1);
      }
    }
    const handleInput =(e)=>{
      setUser({user,[e.target.id]:e.target.value})
    }

    const handleSave =(e)=>{
        e.preventDefault();
        setDisplay(display.length===0?user.username:[display, ',',user.username])
    }

    const [text, setText] = useState("");
    const data = [
    {
      'name':"wristwatch",
      'price':5000
      },
      {
          'name': 'bag',
          'price':1500
      },
      {
          'name':'laptop',
          'price':2000,
      },
      {
          'name':'1dris',
          'price':10000,
      },
      {
          'name':'proud',
          'price':1000,
      }

  ]
  const handleChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div>
      <p>increment count: {count} </p>
      <span>
        <button onClick={handlePlus}>Increment</button>
        <button onClick={handleMinus}>Decrement</button>

<div className="form-box mt-5 p-5 ms-5">
<input type="text" id='username' placeholder='userName' onChange={handleInput} value={user.username}  />
<button className='btn btn-
large btn-primary px-5 p-2' onClick={handleSave}> Submit </button>
</div>
<h1 className='ms-5 p-5'> My username is: <p>{display}</p></h1>

</span>

<div className="container mt-5 p-5">
      <input onChange={handleChange} value={text} />
      <div className="car">
      <ul>
               {
                  data.filter((item)=>{ return item.name.includes(text)})
                   .map((item)=>{
                    return(<li>{`${item.name} - ${item.price}`} </li>)
                   })
               }
                
            </ul>
       
     </div>
     </div>
      </div>



   
  )
}
