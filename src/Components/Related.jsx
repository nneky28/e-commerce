import React from 'react'

function Related() {
    return (
        <div className="col-lg-3" >
            <div className='cob'style={{ border:'1px solid #eee',background:'gray',width:'80%' }}>
            <img src="/images/1.png"className='imago p-4 me-4' alt="related products"/>
         </div>
            <div>
                <p className='men mt-3' style={{fontFamily:'Josefin Sans', color:'#151875' }}>
                    Mens Fashion Wear
                    <span className='stars px-2 ms-4'>
                            <i className="far fa-star" style={{ color: 'yellow'}} />
                            <i className="far fa-star" style={{  color:'yellow' }} />
                            <i className="far fa-star" style={{  color:'yellow' }} />
                            <i className="far fa-star" style={{ color:'yellow' }} />
                            <i className="far fa-star" style={{ color:'yellow' }} />
                    </span>
                </p>
                <p className='ego' style={{color:'#151875', fontFamily:'Josefin Sans'}}>$23.00</p>
            </div>
        </div>
    )
}

export default Related
