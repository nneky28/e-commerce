import React from 'react'

function Button({border=null, background=null, color=null,radius=null, font=null, padding=null, name=null, press=null}) {
    return (
        <button className='btn btn-lg' onClick={press} style={{border:border, backgroundColor:background, color:color, borderRadius:radius, fontFamily:font, padding:padding,}}>{name} </button>
    )
}

export default Button
