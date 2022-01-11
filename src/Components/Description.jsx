import React from 'react'

function Description() {
    return (
        <div className="row "  style={{marginTop:"131px"}}>
            <span className="col-lg-2" style={{ fontFamily:'Josefin Sans', fontSize:'24px'}}><a href="#" style={{textDecoration:'none', color:'#151875',textDecoration:'underline'}}>Description</a></span>
            <span className="col-lg-2" style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}><a href="#" style={{textDecoration:'none', color:'#151875'}}>Additional Info</a></span>
            <span className="col-lg-2" style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}><a href="#" style={{textDecoration:'none', color:'#151875'}}>Reviews</a></span>
            <span className="col-lg-2" style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}><a href="#" style={{textDecoration:'none', color:'#151875'}}>Video</a></span>

            <div id="desctiption" style={{marginTop:'61px'}}>
                <p style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}>Varius Tempor</p>
                <span style={{color:'#A9ACC6'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet, voluptatibus fuga impedit delectus sit labore inventore molestiae est necessitatibus odio nulla qui excepturi dolorem obcaecati, accusamus alias culpa ab nostrum! Earum vero perspiciatis amet explicabo perferendis provident fugiat nostrum magni, delectus repudiandae dolorum adipisci natus illo veniam laudantium quos sed exercitationem magnam distinctio necessitatibus. Ipsum dolore modi saepe, numquam, sit in ipsa quae vero et veniam laudantium?</span>
            </div>
            <div id="" style={{marginTop:'36px'}}>
                <p style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}>More Details</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
            </div>
        </div>
    )
}

export default Description
